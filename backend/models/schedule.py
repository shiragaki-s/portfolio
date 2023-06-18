class Schedule:

    def __init__(self, id, title, date, time, company_id, job_change_site_id, desired_level, remarks):
        self._id = id
        self._title = title
        self._date = date
        self._time = time
        self._company_id = company_id
        self._job_change_site_id = job_change_site_id
        self._desired_level = desired_level
        self._remarks = remarks

    @property
    def id(self):
        return self._id

    @property
    def title(self):
        return self._title

    @property
    def date(self):
        return self._date

    @property
    def time(self):
        return self._time

    @property
    def company_id(self):
        return self._company_id

    @property
    def job_change_site_id(self):
        return self._job_change_site_id

    @property
    def desired_level(self):
        return self._desired_level

    @property
    def remarks(self):
        return self._remarks
    # def __init__(self, x, y):
    #     # _ をつけて隠蔽していることを示す
    #     self._x = x
    #     self._y = y

    # @property
    # def x(self):
    #     return self._x

    # @property
    # def y(self):
    #     return self._y
