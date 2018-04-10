/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var appConfig = __webpack_require__(2);
var articlesJson = __webpack_require__(3);
var app = express();

/* Setting alternative views directory */
app.use(express.static('public'));

/* send todos */
app.get('/articles/all.json', function (req, res) {
    res.json(articlesJson);
});

/* uncaughtException error handling */
process.on('uncaughtException', function (err) {
    return console.log(err);
});

/* Server */
app.listen(appConfig.appPort, function () {
    return console.log(appConfig.appName + ' listening on port ' + appConfig.appPort + '!');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"appName":"Amazing app","appPort":8080,"logFilename":"route-access.log","secretKey":"secretsecretkey","db":{"prefix":"rusau_","posts":{"modelName":"plips","collectionName":"plips","connection":"mongodb://localhost/rusau_blogs"},"users":{"modelName":"user","collectionName":"users","connection":"mongodb://localhost/rusau_blogs"}}}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"articles":[{"id":1,"author":"James Paton","title":"Glaxo to Buy Novartis Consumer Venture Stake for $13 Billion","text":"GlaxoSmithKline Plc, the U.K.s biggest drugmaker, agreed to buy out Novartis AGs stake in their consumer-health joint venture for $13 billion rather than bidding for a Pfizer Inc. unit.","date":"2018-03-26T06:25:00Z"},{"id":2,"author":"Keith Naughton","title":"Just How Safe Is Driverless Car Technology, Really?","text":"Self-driving cars are supposed to be our salvation, drastically reducing the 1.3 million road fatalities worldwide each year by replacing humans with robots who can do precision piloting and never get distracted, drowsy or drunk. So why did a self-driving Ube…","date":"2018-03-27T04:25:00Z"},{"id":3,"author":"Daniel Van Boom","title":"Elon Musk Has Some Literal Rocks to Sell You, Maybe","text":"iPhone manufacturer Foxconn buys Belkin for $866M","date":"2018-03-27T02:35:18Z"},{"id":4,"author":"Adam Levine-Weinberg","title":"The Real Problem With Elon Musks Massive Tesla Pay Package","text":"Shareholders wont complain about Elon Musks massive stock award if he drives a tenfold increase in Teslas stock price. But they wont be happy if he takes foolish risks in an attempt to achieve unrealistic growth targets.","date":"2018-03-27T01:05:00Z"},{"id":5,"author":"Lu Wang, Abhishek Vishnoi","title":"Headspinning Swings for S&P 500 Are Raising Stakes for Traders","text":"First the longs got burned. And then the shorts got squeezed.","date":"2018-03-27T00:40:23Z"},{"id":6,"author":"Jon Southurst","title":"Charlie Lee and Litecoin Foundation Apologize After LitePay Folds","text":"Litecoin founder Charlie Lee and the Litecoin Foundation have both issued apologies over the apparent failure of LitePay. The much-anticipated LTC payment processor ceased operations after the Foundation questioned CEO Kenneth Asare over his past use of its f…","date":"2018-03-27T00:29:42Z"},{"id":7,"author":"Akane Otani","title":"Stocks Rebound as Trade Tensions With China Ease","text":"Cooling trade tensions with China fueled a rush back into U.S. stocks, vaulting the Dow industrials to their largest daily point gain since the financial crisis even as the threat of rising rates continued to vex investors.","date":"2018-03-26T23:39:00Z"},{"id":8,"author":"Mike Snider, Jessica Guynn","title":"Facebooks FTC probe rocked the stock. But will anything rein in Facebook?","text":"Regulators in the U.S. and Europe, state attorneys general, lawmakers, all say Facebook should be held to account for misuse of private information by Cambridge Analytica.","date":"2018-03-26T23:35:19Z"},{"id":9,"author":"David McLaughlin, Erik Larson","title":"Dish Backs US Case Against AT&T, Claims Threat to Sling TV","text":"AT&T Inc.s acquisition of Time Warner Inc. could cost rival Dish Network Corp. subscribers and hurt its new online web-based Sling TV, an executive of the streaming service testified in the U.S. governments antitrust lawsuit seeking to block the takeover.","date":"2018-03-26T23:21:27Z"},{"id":10,"author":"Gene Sloan","title":"First look: The new Boardwalk area on Symphony of the Seas, worlds largest cruise ship","text":"The Boardwalk area on Symphony of the Seas offers new features not found on earlier sister ships.","date":"2018-03-26T18:40:00Z"},{"id":11,"author":"Jordan Novet","title":"Smartsheet IPO filing reveals its paying an exec it poached from Amazon more than its own CEO","text":"In its filing to go public on Monday, Smartsheet revealed that an executive who recently joined from Amazon Web Services is being paid more than the companys own CEO.","date":"2018-03-26T18:29:00Z"},{"id":12,"author":"Michelle Jones","title":"Facebook Stock Bottoms Below $150 After New Data Concerns","text":"It seems like the FTC probe is coming just in time, as we are also hearing that Facebook may have been scraping vast amounts of data from Android users. Facebook stock tanked another 5% right out of the gate on Monday, but analysts continue to advise investor…","date":"2018-03-26T16:45:00Z"},{"id":13,"author":"Gabrielle Coppola","title":"BMW Plans Vehicle-Subscription Pilot in Nashville","text":"BMW AG will begin a car-subscription pilot in Tennessee next week, joining the ranks of automakers experimenting with new ownership models as ride hailing and smartphones upend traditional auto retailing.","date":"2018-03-26T15:05:56Z"}]}

/***/ })
/******/ ]);