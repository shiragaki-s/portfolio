from flask import Flask
import psycopg2

app = Flask(__name__)

connection  = psycopg2.connect(
    host="db",
    port="5432",
    user="postgres",
    password="password",
    database="portfolio"
)

@app.route("/")
def index():
    return "hello,flask"

@app.route("/test")
def test():
    with connection:
      with connection.cursor() as cursor:
        sql = "INSERT INTO public.test(name) VALUES ('suzuki');"
        cursor.execute(sql)
        connection.commit()
    return "test実行されました"
    

@app.route("/calendar")
def calendar():
    return "カレンダー画面です"

@app.route("/calendar",methods=["POST"])
def update_calendar():
    # カレンダーの更新処理
    return

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)