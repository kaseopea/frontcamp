"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Check if NewsClient is defined on the page
if (!NewsClient) {
  throw new Error(CLIENT_MESSAGES.error.noNewsClientDefined);
}

var newsClient = new NewsClient.NewsAPIClient(NEWSAPI_API_KEY);
var appView = new VIEW.Renderer();

var App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "init",

    /* init */
    value: function init() {
      this.initNewsSources();
      this._loadDefaultNews(DEFAULT_KEYWORS);
      this._initResizeEventListener();
      this._initMainMenu();
    }

    /* ************ VIEW ACTIONS ************ */

  }, {
    key: "initNewsSources",
    value: function initNewsSources() {
      var _this = this;

      newsClient.getNewsSources().then(function (data) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.sourcesContent, CONTROLLER.getSourcesHtml(data));
      }).catch(function (err) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.mainContent, _this._getErrorMarkup(CLIENT_MESSAGES.error.noSourcesLoaded));
      });
    }
  }, {
    key: "openSource",
    value: function openSource(sourceId) {
      if (appView.isMobileView()) {
        appView.hideElement(ELEMENTS.sourcesContent);
      }

      if (sourceId) {
        appView.resetView(ELEMENTS.mainContent);
        appView.showElement(ELEMENTS.loader);
        this._loadNewsBySourceId(sourceId);
      }
    }

    // Logo click

  }, {
    key: "openIndex",
    value: function openIndex() {
      this.loadDefaultNews(DEFAULT_KEYWORS);
    }

    // Mobile Menu Button

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (appView.isHidden(ELEMENTS.sourcesContent)) {
        appView.showElement(ELEMENTS.sourcesContent);
        appView.addClass(document.body, SELECTORS.menuExpanded);
      } else {
        appView.hideElement(ELEMENTS.sourcesContent);
        appView.removeClass(document.body, SELECTORS.menuExpanded);
      }
    }

    /* ************ UTILS (Private) ************ */

    /* init menu */

  }, {
    key: "_initMainMenu",
    value: function _initMainMenu() {
      if (appView.isMobileView() && !appView.isHidden(ELEMENTS.sourcesContent)) {
        appView.addClass(document.body, SELECTORS.menuExpanded);
      }
    }

    /* Load default news on startup */

  }, {
    key: "_loadDefaultNews",
    value: function _loadDefaultNews(keywords) {
      var _this2 = this;

      var query = keywords[Math.floor(Math.random() * keywords.length)];

      appView.resetView(ELEMENTS.mainContent);
      appView.showElement(ELEMENTS.loader);

      newsClient.getNewsByParam("q", query).then(function (data) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.mainContent, CONTROLLER.getNewsHtml(data));
      }).catch(function (err) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.mainContent, _this2._getErrorMarkup(CLIENT_MESSAGES.error.noNewsLoaded));
      });
    }

    /* InitResizeEventListener */

  }, {
    key: "_initResizeEventListener",
    value: function _initResizeEventListener() {
      window.addEventListener("resize", function () {
        if (appView.isMobileView()) {
          appView.hideElement(ELEMENTS.sourcesContent);
          appView.removeClass(document.body, SELECTORS.menuExpanded);
        } else {
          appView.showElement(ELEMENTS.sourcesContent);
        }
      });
    }

    /* Load news by source id */

  }, {
    key: "_loadNewsBySourceId",
    value: function _loadNewsBySourceId(sourceId) {
      var _this3 = this;

      appView.removeClass(document.body, SELECTORS.menuExpanded);
      newsClient.getNewsByParam("sources", sourceId).then(function (data) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.mainContent, CONTROLLER.getNewsHtml(data));
      }).catch(function (err) {
        appView.hideElement(ELEMENTS.loader);
        appView.setView(ELEMENTS.mainContent, _this3._getErrorMarkup(CLIENT_MESSAGES.error.noNewsLoaded));
      });
    }

    /* Get Error Markup */

  }, {
    key: "_getErrorMarkup",
    value: function _getErrorMarkup(message) {
      return " <div class=\"error-message\">" + message + "</div>";
    }
  }]);

  return App;
}();
//# sourceMappingURL=app.js.map