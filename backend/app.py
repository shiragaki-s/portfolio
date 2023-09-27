from functools import wraps
import json
# from backend.verify import verify_token
# from backend.models.company import Company
# from backend.models.job_change_site import JobChangeSite
from flask import Flask, request
import psycopg2
# from flask_cors import cross_origin
from flask_cors import CORS
import psycopg2.extras
import jwt


app = Flask(__name__)
CORS(app, origins=["*", "http://127.0.0.1:5173"], methods=["GET", "POST"])
connection = psycopg2.connect(
    host="db",
    port="5432",
    user="postgres",
    password="password",
    database="portfolio"
)


@app.route("/")
def index():
    return "hello,flask"


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        region = 'ap-northeast-1'
        user_pool_id = 'ap-northeast-1_Fb83n7Ap6'
        client_id = '67ihhmjsetfg8s8aa57udbqp3q'

        issuer = f'https://cognito-idp.{region}.amazonaws.com/{user_pool_id}'
        jwks_url = f'{issuer}/.well-known/jwks.json'

        jwks_client = jwt.PyJWKClient(jwks_url)
        signing_key = jwks_client.get_signing_key_from_jwt(token)

        token = jwt.decode(
            token,
            signing_key.key,
            algorithms=["RS256"],  # RS256
            # audience=client_id,
            issuer=issuer
        )
        print(token['token_use'])
        if token['token_use'] != 'access':
            raise Exception('Invalid token_use')
        return f(token, *args, **kwargs)
    return decorated


@app.route("/calendar", methods=["GET"])
@token_required
# @cross_origin(origins=["http://localhost:3000"], methods=["GET"])
def calendar(f):
    with connection:
        schedules = get_schedules(connection)
        companies = get_companies(connection)
        jobChangeSites = get_jobChangeSite(connection)
    return {"schedules": schedules, "companies": companies, "jobChangeSites": jobChangeSites}


@app.route("/calendar", methods=["POST"])
@token_required
def update_calendar(f):
    # リクエストのJSONデータを取り出す
    data = request.get_json()  # pythonのオブジェクトとしてJSONを取り出す
    # スケジュールの更新処理なのか新規登録処理なのか判定
    # scheduleIdの有無で判定
    company_id = get_new_company_id_after_register(
        data['company']) if data['company']['id'] == -1 else data['company']['id']
    # companyが既存か新規か
    # 新規ならcompanyテーブルに登録
    job_site_id = get_new_job_site_id_after_register(
        data['jobChangeSite']) if data['jobChangeSite']['id'] == -1 else data['jobChangeSite']['id']

    # レスポンスとして更新されたデータの情報を返す
    if data['id'] == -1:
        with connection:
            with connection.cursor() as cursor:
                # データを挿入するSQL文を定義します
                sql = "INSERT INTO public.schedule (title, date, time, company_id, job_change_site_id, desired_level, remarks) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id"
                # 挿入するデータを定義します
                data = (data['title'], data['date'], data['time'], company_id,
                        job_site_id, data['desiredLevel'], data['remarks'])
                # SQL文を実行します
                cursor.execute(sql, data)
                # cursor.fetchone()['id']の時、型エラー発生
                schedule_id = cursor.fetchone()[0]
                connection.commit()
    else:
        with connection:
            with connection.cursor() as cursor:
                schedule_id = data['id']
                # データを挿入するSQL文を定義します
                sql = "UPDATE public.schedule SET\
                      title = %s, date=%s, time=%s, company_id=%s, job_change_site_id=%s, desired_level=%s, remarks=%s WHERE id=%s"
                # 挿入するデータを定義します
                data = (data['title'], data['date'], data['time'], company_id,
                        job_site_id, data['desiredLevel'], data['remarks'], data['id'])
                # SQL文を実行します
                cursor.execute(sql, data)
                connection.commit()

    return {"res": "ok", "id": schedule_id, "company_id": company_id, "job_site_id": job_site_id}


@app.route("/delete", methods=["POST"])
@token_required
def delete_schedule(f):
    args = request.get_json()
    with connection:
        with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
            print(1)
            # データを挿入するSQL文を定義します
            sql = "DELETE FROM public.schedule WHERE id = %s;"
            print(2)
            # 挿入するデータを定義します
            print("args['schedule_id']")
            print(args['schedule_id'])
            print(type(args['schedule_id']))

            data = (args['schedule_id'],)
            print(3)
            # SQL文を実行します
            cursor.execute(sql, data)
            print(4)
        connection.commit()
    return {"res": "ok", "id": args['schedule_id']}


def get_new_company_id_after_register(company):
    with connection:
        with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
            # データを挿入するSQL文を定義します
            sql = "INSERT INTO public.company (company_name, company_url, interest_features) VALUES (%s, %s, %s) RETURNING company_id"
            # 挿入するデータを定義します
            data = (company['name'], company['url'],
                    company['interestFeatures'])
            # SQL文を実行します
            cursor.execute(sql, data)
            company_id = cursor.fetchone()['company_id']
        connection.commit()
    return company_id


def get_new_job_site_id_after_register(job_change_site):
    with connection:
        with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
            # データを挿入するSQL文を定義
            sql = "INSERT INTO public.job_change_site (job_change_site_name, job_change_site_url) VALUES (%s, %s) RETURNING job_change_site_id"
            # 挿入するデータを定義
            data = (job_change_site['name'], job_change_site['url'])
            # SQL文を実行します
            cursor.execute(sql, data)
            job_site_id = cursor.fetchone()['job_change_site_id']
            connection.commit()
        return job_site_id


def schedule_form(data):
    return {
        'id': data['id'],
        'title': data['title'],
        'date': data['date'].strftime('%Y-%m-%d'),
        'time': data['time'].strftime('%Y-%m-%d %H:%M'),
        'company': {
            'id': data['company_id'],
            'name': data['company_name'],
            'url': data['company_url'],
            'interestFeatures': data['interest_features'],
        },
        "jobChangeSite": {
            'id': data['job_change_site_id'],
            'name': data['job_change_site_name'],
            'url': data['job_change_site_url'],
        },
        'desiredLevel': data['desired_level'],
        'remarks': data['remarks'],
    }


def get_schedules(connection):
    with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
        # データを挿入するSQL文を定義します
        sql = "SELECT * FROM public.schedule INNER JOIN public.company ON public.company.company_id=public.schedule.company_id\
                  JOIN public.job_change_site ON public.job_change_site.job_change_site_id=public.schedule.job_change_site_id"
        # 挿入するデータを定義します
        # SQL文を実行します
        cursor.execute(sql)
        connection.commit()
        schedules = cursor.fetchall()
        dict_result = [dict(row) for row in schedules]
    reSchedules = [schedule_form(data) for data in dict_result]
    return reSchedules


def get_companies(connection):
    with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
        # データを挿入するSQL文を定義します
        sql = "SELECT * FROM public.company"
        # 挿入するデータを定義します
        # SQL文を実行します
        cursor.execute(sql)
        connection.commit()
        companies = cursor.fetchall()
        return [format_company(dict(row)) for row in companies]


def get_jobChangeSite(connection):
    with connection.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
        # データを挿入するSQL文を定義します
        sql = "SELECT * FROM public.job_change_site"
        # 挿入するデータを定義します
        # SQL文を実行します
        cursor.execute(sql)
        connection.commit()
        jobChangeSite = cursor.fetchall()
        return [format_job_change_site(dict(row)) for row in jobChangeSite]


def format_company(company):
    return {
        'id': company['company_id'],
        'name': company['company_name'],
        'url': company['company_url'],
        'interestFeatures': company['interest_features']
    }


def format_job_change_site(job_change_site):
    return {
        'id': job_change_site['job_change_site_id'],
        'name': job_change_site['job_change_site_name'],
        'url': job_change_site['job_change_site_url']
    }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
