'use strict';

/* API SETTINGS  */
var NEWSAPI_API_KEY = 'd9c1944567eb4d618cda98a9a83cf21f';

/* NEWS  SETTINGS  */
var NEWS_DESCRIPTION_LIMIT = 200;
var NEWS_AUTHOR_LIMIT = 30;
var SHOW_NEWS_DATE = true;
var DEFAULT_KEYWORS = ['google', 'microsoft', 'android', 'apple', 'black friday', 'xbox', 'games', 'russia', 'usa', 'europe'];

/* GENERAL SETTINGS */
var MOBILE_BREAKPOINT = 1024;

/* ElEMENTS & SELECTORS */
var ELEMENTS = {
	sourcesContent: document.getElementById('sources-content'),
	loader: document.getElementById('loader'),
	mainContent: document.getElementById('main-content'),
	errorMessage: document.querySelector('.error-message'),
	logo: document.querySelector('.logo'),
	menuButton: document.querySelector('.menu-button')
};
var SELECTORS = {
	menuExpanded: 'menu-expanded'
};
//# sourceMappingURL=config.js.map