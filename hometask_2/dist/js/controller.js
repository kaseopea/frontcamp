'use strict';

var getSourcesHtml = function getSourcesHtml(data) {
  if (!data.length) {
    return;
  }
  var sources = data.map(function (source) {
    return '<li onclick="app.openSource(\'' + source.id + '\')" data-source-id="' + source.id + '">\n                <a data-source-id="' + source.id + '" title="' + source.name + '">\n                <img data-source-id="' + source.id + '" alt="' + source.name + '" class="icon" src="https://icons.better-idea.org/icon?url=' + source.url + '&amp;size=16..32..48"> <span class="link-text">' + source.name + '</span></a>\n            </li>';
  });
  return '<ul class="sources-list">' + sources.join('') + '</ul>';
};

var getNewsHtml = function getNewsHtml(data) {
  if (!data.length) {
    return;
  }
  var _data$0$source$name = data[0].source.name,
      sourceTitle = _data$0$source$name === undefined ? '' : _data$0$source$name;


  var news = data.map(function (newsOne, index) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = newsOne.publishedAt ? new Date(newsOne.publishedAt) : null;
    return '<div class="grid-item item-' + ++index + '">\n        <div class="grid-item-inner">\n        \n        <div class="card">\n            <div class="thumb">\n              ' + (date && SHOW_NEWS_DATE ? '<div class="date">\n                <div class="day">' + date.getDate() + '</div>\n                <div class="month">' + monthNames[date.getMonth()] + '</div>\n              </div>' : '') + '\n              <a href="' + newsOne.url + '" target="_blank">\n                <img class="thumb-pic" src="' + newsOne.urlToImage + '"/>\n              </a>\n            </div>\n\n            <article class="card-info">\n              <a href="' + newsOne.url + '" class="card-info-title" target="_blank">' + newsOne.title + '</a>\n              <p class="card-info-desc">' + newsOne.description.substring(0, NEWS_DESCRIPTION_LIMIT) + '...</p>\n              ' + (newsOne.author ? '<span class="card-info-author">' + newsOne.author.substring(0, NEWS_AUTHOR_LIMIT) : '') + '</span>\n            </article>\n\n        </div>\n\n        </div>\n    </div>';
  });
  return '<h2 class="page-title">' + sourceTitle + '</h2><div class="news-grid clearfix">' + news.join('') + '</div>';
};

var CONTROLLER = function () {
  return {
    getSourcesHtml: getSourcesHtml,
    getNewsHtml: getNewsHtml
  };
}();
//# sourceMappingURL=controller.js.map