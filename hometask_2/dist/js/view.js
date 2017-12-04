"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
  }

  _createClass(Renderer, [{
    key: "showElement",

    // Show element
    value: function showElement(element) {
      return element ? element.style.display = "block" : null;
    }

    // Hide element

  }, {
    key: "hideElement",
    value: function hideElement(element) {
      return element ? element.style.display = "none" : null;
    }

    // Render content to specific element

  }, {
    key: "setView",
    value: function setView(element, content) {
      return element ? element.innerHTML = content : null;
    }

    // Reset content of specific element

  }, {
    key: "resetView",
    value: function resetView(element) {
      return element ? element.innerHTML = "" : null;
    }

    // Add class

  }, {
    key: "addClass",
    value: function addClass(element, className) {
      return element.classList.add(className);
    }
    // Remove class

  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      return element.classList.remove(className);
    }

    // Check if element is hidden

  }, {
    key: "isHidden",
    value: function isHidden(element) {
      return window.getComputedStyle(element).display === "none";
    }

    // check if view is mobile

  }, {
    key: "isMobileView",
    value: function isMobileView() {
      return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= MOBILE_BREAKPOINT;
    }
  }]);

  return Renderer;
}();

var VIEW = function () {
  return {
    Renderer: Renderer
  };
}();
//# sourceMappingURL=view.js.map