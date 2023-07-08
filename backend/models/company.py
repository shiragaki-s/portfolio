class Company:

    def __init__(self, id, name, url, interest_features):
        self._id = id
        self._name = name
        self._url = url
        self._interest_features = interest_features

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value

    @property
    def url(self):
        return self._url

    @url.setter
    def url(self, value):
        self._url = value

    @property
    def interest_features(self):
        return self.interest_features

    @interest_features.setter
    def interest_features(self, value):
        self._interest_features = value
