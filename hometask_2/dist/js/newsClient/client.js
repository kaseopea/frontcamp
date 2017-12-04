'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsAPIClient = function () {
	function NewsAPIClient(apiKey) {
		_classCallCheck(this, NewsAPIClient);

		this.apikey = apiKey;
	}

	_createClass(NewsAPIClient, [{
		key: 'getNewsSources',
		value: function getNewsSources() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				var _API_URLS$sources = API_URLS.sources,
				    url = _API_URLS$sources.url,
				    _API_URLS$sources$par = _API_URLS$sources.params,
				    params = _API_URLS$sources$par === undefined ? {} : _API_URLS$sources$par;


				fetch(_this.getUrl(url, params)).then(function (response) {
					return response.json();
				}).then(function (data) {
					return resolve(data.sources);
				}).catch(function (err) {
					return reject(err.message);
				});
			});
		}
	}, {
		key: 'getNewsByParam',
		value: function getNewsByParam(param, value) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				var _API_URLS$news = API_URLS.news,
				    url = _API_URLS$news.url,
				    _API_URLS$news$params = _API_URLS$news.params,
				    params = _API_URLS$news$params === undefined ? {} : _API_URLS$news$params;

				fetch(_this2.getUrl(url, Object.assign({}, params, _defineProperty({}, param, value)))).then(function (response) {
					return response.json();
				}).then(function (data) {
					return resolve(data.articles);
				}).catch(function (err) {
					return reject(err.message);
				});
			});
		}

		/* UTILS */

	}, {
		key: 'getUrl',
		value: function getUrl(url, params) {
			var paramsObj = [];
			params.apikey = this.apikey;
			for (var key in params) {
				paramsObj.push(key + '=' + encodeURIComponent(params[key]));
			}
			return url + '?' + paramsObj.join('&');
		}
	}]);

	return NewsAPIClient;
}();

var NewsClient = function () {
	return { NewsAPIClient: NewsAPIClient };
}();
//# sourceMappingURL=client.js.map