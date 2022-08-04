/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basic_ibg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/ibg.js */ \"./src/js/basic/ibg.js\");\n/* harmony import */ var _basic_anim_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/anim-scroll.js */ \"./src/js/basic/anim-scroll.js\");\n/* harmony import */ var _modules_fix_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fix-navigation.js */ \"./src/js/modules/fix-navigation.js\");\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_isotope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/isotope.js */ \"./src/js/modules/isotope.js\");\n/* harmony import */ var _modules_isMobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/isMobile.js */ \"./src/js/modules/isMobile.js\");\n/* harmony import */ var _modules_popup_portfolio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup-portfolio.js */ \"./src/js/modules/popup-portfolio.js\");\n/* harmony import */ var _modules_hoverChangeImg_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/hoverChangeImg.js */ \"./src/js/modules/hoverChangeImg.js\");\n/* harmony import */ var _modules_circle_text_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/circle-text.js */ \"./src/js/modules/circle-text.js\");\n/* harmony import */ var _modules_chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/chart.js */ \"./src/js/modules/chart.js\");\n/* harmony import */ var _modules_slowAnchorMove_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slowAnchorMove.js */ \"./src/js/modules/slowAnchorMove.js\");\n/* harmony import */ var _modules_anim_scroll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/anim-scroll.js */ \"./src/js/modules/anim-scroll.js\");\n/* harmony import */ var _modules_fixLinkModal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/fixLinkModal.js */ \"./src/js/modules/fixLinkModal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    const $mainscreen = document.querySelector(\".main\")\r\n\r\n    setTimeout(() => {\r\n        $mainscreen.classList.add(\"_loaded\")\r\n    }, 500)\r\n\r\n    ;(0,_modules_fix_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    ;(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\".menu__burger\", \".menu__body\", \".menu__item a\")\r\n    ;(0,_modules_isMobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\".portfolio__item\")\r\n    ;(0,_modules_popup_portfolio_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n        \".portfolio__item\",\r\n        \".modal-portfolio\",\r\n        \".overlay\",\r\n        \".modal-portfolio__close\"\r\n    )\r\n    ;(0,_modules_hoverChangeImg_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\".portfolio__item\")\r\n    ;(0,_modules_circle_text_js__WEBPACK_IMPORTED_MODULE_8__.circleText)(\".circle__text p\")\r\n    ;(0,_modules_slowAnchorMove_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"[href^='#']\")\r\n})\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/basic/anim-scroll.js":
/*!*************************************!*\
  !*** ./src/js/basic/anim-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst animItems = document.querySelectorAll('._anim-items');\r\n\r\nif (animItems.length > 0) {\r\n\twindow.addEventListener('scroll', animOnScroll);\r\n\r\n\t\tfunction animOnScroll() {\r\n\t\tfor (let index = 0; index < animItems.length; index++) {\r\n\t\t\tconst animItem = animItems[index];\r\n\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\tconst animItemOffset = offset(animItem).top;\r\n\t\t\tconst animStart = 4;\r\n\r\n\r\n\t\t\tlet animItemPoint = window.innerHeight - animItemHeight / animStart;\r\n\t\t\tif (animItemHeight > window.innerHeight) {\r\n\t\t\t\tanimItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n\t\t\t}\r\n\r\n\t\t\tif ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {\r\n\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t} else {\r\n\t\t\t\tif (!animItem.classList.contains('_anim-no-hide')) {\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\r\n\tfunction offset(el) {\r\n\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\treturn { top: rect.top + scrollTop, left: rect.left + scrollLeft }\r\n\t}\r\n\r\n\t\r\n\tsetTimeout(() => {\r\n\t\tanimOnScroll();\r\n\t}, 300);\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/anim-scroll.js?");

/***/ }),

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet isMobile = {\r\n\tAndroid: function() {return navigator.userAgent.match(/Android/i);},\r\n\tBlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},\r\n\tiOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},\r\n\tOpera: function() {return navigator.userAgent.match(/Opera Mini/i);},\r\n\tWindows: function() {return navigator.userAgent.match(/IEMobile/i);},\r\n\tany: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMobile);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/checkMobile.js?");

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction ibg(){\r\n    const ibgs = document.querySelectorAll('.ibg');\r\n    ibgs.forEach(function(value){\r\n        if(value.querySelector('img')){\r\n            value.style.cssText = `background-image: url(${value.querySelector('img').getAttribute('src')})`;\r\n        }\r\n    });\r\n}\r\n\r\nibg();\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/ibg.js?");

/***/ }),

/***/ "./src/js/modules/anim-scroll.js":
/*!***************************************!*\
  !*** ./src/js/modules/anim-scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst animItems = document.querySelectorAll(\"._anim-items\")\r\n\r\nif (animItems.length > 0) {\r\n    window.addEventListener(\"scroll\", animOnScroll)\r\n\r\n    function animOnScroll() {\r\n        for (let index = 0; index < animItems.length; index++) {\r\n            const animItem = animItems[index]\r\n            const animItemHeight = animItem.offsetHeight\r\n            const animItemOffset = offset(animItem).top\r\n            const animStart = 4\r\n\r\n            let animItemPoint = window.innerHeight - animItemHeight / animStart\r\n            if (animItemHeight > window.innerHeight) {\r\n                animItemPoint =\r\n                    window.innerHeight - window.innerHeight / animStart\r\n            }\r\n\r\n            if (\r\n                window.pageYOffset > animItemOffset - animItemPoint &&\r\n                window.pageYOffset < animItemOffset + animItemHeight\r\n            ) {\r\n                animItem.classList.add(\"_active\")\r\n            } else {\r\n                if (!animItem.classList.contains(\"_anim-no-hide\")) {\r\n                    animItem.classList.remove(\"_active\")\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    function offset(el) {\r\n        const rect = el.getBoundingClientRect(),\r\n            scrollLeft =\r\n                window.pageXOffset || document.documentElement.scrollLeft,\r\n            scrollTop = window.pageYOffset || document.documentElement.scrollTop\r\n        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }\r\n    }\r\n\r\n    setTimeout(() => {\r\n        animOnScroll()\r\n    }, 300)\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/anim-scroll.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = (burgerSelector, menuSelector, menuItemSelector) => {\r\n    const burger = document.querySelector(burgerSelector),\r\n        menu = document.querySelector(menuSelector),\r\n        items = document.querySelectorAll(menuItemSelector)\r\n\r\n    burger.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".menu__burger\")) {\r\n            if (\r\n                document\r\n                    .querySelector(\".about__navigation\")\r\n                    .classList.contains(\"_fix\")\r\n            ) {\r\n                document.body.classList.toggle(\"_block\")\r\n            }\r\n            burger.classList.toggle(\"_active\")\r\n            menu.classList.toggle(\"_active\")\r\n        }\r\n    })\r\n\r\n    items.forEach((item) => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            menu.classList.remove(\"_active\")\r\n            burger.classList.remove(\"_active\")\r\n        })\r\n    })\r\n\r\n    window.addEventListener(\"scroll\", () => {\r\n        if (\r\n            burger.classList.contains(\"_active\") &&\r\n            document\r\n                .querySelector(\".about__navigation\")\r\n                .classList.contains(\"_fix\")\r\n        ) {\r\n            document.body.classList.add(\"_block\")\r\n        } else {\r\n            document.body.classList.remove(\"_block\")\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/chart.js":
/*!*********************************!*\
  !*** ./src/js/modules/chart.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst elements = document.querySelectorAll(\".chart .bar\")\r\nconsole.log(elements)\r\nlet options = {\r\n    startAngle: -1.55,\r\n    size: 150,\r\n    value: 0.9,\r\n    fill: { color: \"#e87e04\" },\r\n}\r\n$(\".chart .bar\")\r\n    .circleProgress(options)\r\n    .on(\"circle-animation-progress\", function (event, progress, stepValue) {\r\n        $(this)\r\n            .parent()\r\n            .find(\"span\")\r\n            .text(String(stepValue.toFixed(2).substr(2)) + \"%\")\r\n    })\r\n\r\n$(\".css .bar\").circleProgress({\r\n    value: 0.85,\r\n})\r\n$(\".js .bar\").circleProgress({\r\n    value: 0.8,\r\n})\r\n$(\".react .bar\").circleProgress({\r\n    value: 0.7,\r\n})\r\n$(\".next .bar\").circleProgress({\r\n    value: 0.5,\r\n})\r\n$(\".native .bar\").circleProgress({\r\n    value: 0.4,\r\n})\r\n$(\".ts .bar\").circleProgress({\r\n    value: 0.5,\r\n})\r\n$(\".node .bar\").circleProgress({\r\n    value: 0.5,\r\n})\r\n$(\".express .bar\").circleProgress({\r\n    value: 0.5,\r\n})\r\n$(\".mysql .bar\").circleProgress({\r\n    value: 0.6,\r\n})\r\n$(\".mongo .bar\").circleProgress({\r\n    value: 0.6,\r\n})\r\n$(\".postgre .bar\").circleProgress({\r\n    value: 0.7,\r\n})\r\n$(\".knex .bar\").circleProgress({\r\n    value: 0.4,\r\n})\r\n$(\".graph .bar\").circleProgress({\r\n    value: 0.3,\r\n})\r\n$(\".webs .bar\").circleProgress({\r\n    value: 0.4,\r\n})\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/chart.js?");

/***/ }),

/***/ "./src/js/modules/circle-text.js":
/*!***************************************!*\
  !*** ./src/js/modules/circle-text.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"circleText\": () => (/* binding */ circleText)\n/* harmony export */ });\nconst circleText = (text) => {\r\n    const $text = document.querySelector(text)\r\n    $text.innerHTML = $text.innerText\r\n        .split(\"\")\r\n        .map(\r\n            (cher, i) =>\r\n                `<span style=\"transform: rotate(${i * 9}deg)\">${cher}</span>`\r\n        )\r\n        .join(\"\")\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/circle-text.js?");

/***/ }),

/***/ "./src/js/modules/fix-navigation.js":
/*!******************************************!*\
  !*** ./src/js/modules/fix-navigation.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navPosition = () => {\r\n\tlistenScroll();\r\n  window.addEventListener('orientationchange', () => {\r\n\t\tlistenScroll();\r\n\t});\r\n};\r\n\tfunction listenScroll(){\r\n\t\tconst navigation = document.querySelector('.about__navigation');\r\n\t\twindow.addEventListener('scroll', () => {\r\n\t\t\tconst mainSectionHeight = document.querySelector('.main').getBoundingClientRect().height;\r\n\t\t\tif(window.pageYOffset >= mainSectionHeight){\r\n\t\t\t\tnavigation.classList.add('_fix');\r\n\t\t\t\tnavigation.classList.remove('_static');\r\n\t\t\t} else {\r\n\t\t\t\tnavigation.classList.remove('_fix');\r\n\t\t\t\tnavigation.classList.add('_static');\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navPosition);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/fix-navigation.js?");

/***/ }),

/***/ "./src/js/modules/fixLinkModal.js":
/*!****************************************!*\
  !*** ./src/js/modules/fixLinkModal.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nlet bubu = document.querySelectorAll(\".bubu\")\r\n\r\nfor (let i = 0; i < bubu.length; i++) {\r\n    bubu[i].onclick = function (e) {\r\n        e.preventDefault() // Блокирует переход по ссылке\r\n        this.onclick = null\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/fixLinkModal.js?");

/***/ }),

/***/ "./src/js/modules/getModalData.js":
/*!****************************************!*\
  !*** ./src/js/modules/getModalData.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDataModal = (getSelector) => {\r\n    const title = getSelector.querySelector(\".hover__title\").textContent,\r\n        categories =\r\n            getSelector.querySelector(\".hover__categories\").textContent,\r\n        view = getSelector.querySelector(\".hover__view\").getAttribute(\"href\"),\r\n        src = getSelector\r\n            .querySelector(\".portfolio__img\")\r\n            .getAttribute(\"data-src\")\r\n    let code = null\r\n    if (getSelector.querySelector(\".hover__code\")) {\r\n        code = getSelector.querySelector(\".hover__code\").getAttribute(\"href\")\r\n    }\r\n    let by = null\r\n    if (getSelector.querySelector(\".hover__by\")) {\r\n        by = getSelector.querySelector(\".hover__by\").textContent\r\n    }\r\n    return {\r\n        title: title,\r\n        categories: categories,\r\n        view: view,\r\n        code: code,\r\n        src: src,\r\n        by,\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataModal);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/getModalData.js?");

/***/ }),

/***/ "./src/js/modules/hoverChangeImg.js":
/*!******************************************!*\
  !*** ./src/js/modules/hoverChangeImg.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile.js */ \"./src/js/basic/checkMobile.js\");\n// import ibg from '../basic/ibg';\r\n\r\n\r\nconst hoverImg = (hoverSelector) => {\r\n    if (!_basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].any()) {\r\n        const hoverSelectors = document.querySelectorAll(hoverSelector)\r\n\r\n        for (let item of hoverSelectors) {\r\n            const hover = item.querySelector(\".portfolio__img.hovering\")\r\n            const unhover = item.querySelector(\".portfolio__img.unhovering\")\r\n            item.addEventListener(\"mouseenter\", () => {\r\n                changeImg(hover, unhover)\r\n            })\r\n            item.addEventListener(\"mouseleave\", () => {\r\n                unchangeImg(hover, unhover)\r\n            })\r\n        }\r\n        function changeImg(hover, unhover) {\r\n            hover.classList.add(\"active\")\r\n            unhover.classList.add(\"active\")\r\n        }\r\n        function unchangeImg(hover, unhover) {\r\n            hover.classList.remove(\"active\")\r\n            unhover.classList.remove(\"active\")\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hoverImg);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/hoverChangeImg.js?");

/***/ }),

/***/ "./src/js/modules/isMobile.js":
/*!************************************!*\
  !*** ./src/js/modules/isMobile.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile.js */ \"./src/js/basic/checkMobile.js\");\n\r\n\r\nconst isMobile = (selector) => {\r\n    const elements = document.querySelectorAll(selector)\r\n    if (_basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].any()) {\r\n        elements.forEach((element) => {\r\n            element.classList.add(\"mobile\")\r\n        })\r\n    } else {\r\n        elements.forEach((element) => {\r\n            element.classList.remove(\"mobile\")\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMobile);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/isMobile.js?");

/***/ }),

/***/ "./src/js/modules/isotope.js":
/*!***********************************!*\
  !*** ./src/js/modules/isotope.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ninit();\r\n\r\nfunction init(){\r\n  let items = document.querySelector('.portfolio__items');\r\n  let iso = new Isotope( items, {\r\n    itemSelector: '.portfolio__item-wrapper',\r\n    masonry: {\r\n      columnWidth: '.portfolio-sizer'\r\n    },\r\n    layoutMode: 'fitRows',\r\n    transitionDuration: '0.4s'\r\n  });\r\n\r\n  let filterBtn = document.querySelectorAll('.portfolio__categories .categories__item a');\r\n  filterBtn.forEach(filter => {\r\n    filter.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      removerActive();\r\n      e.target.classList.add('active');\r\n      let filterData = e.target.getAttribute('data-filter');\r\n      iso.arrange({\r\n        filter: filterData\r\n      });\r\n    });\r\n  });\r\n\r\n  function removerActive() {\r\n    filterBtn.forEach(a => {\r\n      a.classList.remove('active');\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/isotope.js?");

/***/ }),

/***/ "./src/js/modules/popup-portfolio.js":
/*!*******************************************!*\
  !*** ./src/js/modules/popup-portfolio.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getModalData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getModalData.js */ \"./src/js/modules/getModalData.js\");\n/* harmony import */ var _setDatModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDatModal.js */ \"./src/js/modules/setDatModal.js\");\n\r\n\r\nconst popup = (\r\n    triggerSelector,\r\n    modalSelector,\r\n    overlaySelector,\r\n    closeSelector\r\n) => {\r\n    const triggers = document.querySelectorAll(triggerSelector),\r\n        modal = document.querySelector(modalSelector),\r\n        overlay = document.querySelector(overlaySelector),\r\n        closes = document.querySelectorAll(closeSelector)\r\n\r\n    for (let trigger of triggers) {\r\n        trigger.addEventListener(\"click\", (e) => {\r\n            if (\r\n                e.target.closest(\".mobile\") ||\r\n                e.target.querySelector(\".mobile\")\r\n            ) {\r\n                visibleModal()\r\n                ;(0,_setDatModal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n                    modal,\r\n                    (0,_getModalData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.closest(\".portfolio__item\"))\r\n                )\r\n            }\r\n        })\r\n    }\r\n    for (let close of closes) {\r\n        close.addEventListener(\"click\", (e) => {\r\n            unvisibleModal()\r\n        })\r\n    }\r\n    overlay.addEventListener(\"click\", (e) => {\r\n        if (!e.target.closest(\".modal\")) {\r\n            unvisibleModal()\r\n        }\r\n    })\r\n    function visibleModal() {\r\n        modal.classList.add(\"_visible\")\r\n        overlay.classList.add(\"_visible\")\r\n        document.body.style.overflow = \"hidden\"\r\n    }\r\n    function unvisibleModal() {\r\n        modal.classList.remove(\"_visible\")\r\n        overlay.classList.remove(\"_visible\")\r\n        document.body.style.overflow = \"\"\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/popup-portfolio.js?");

/***/ }),

/***/ "./src/js/modules/setDatModal.js":
/*!***************************************!*\
  !*** ./src/js/modules/setDatModal.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setData = (modal, { title, categories, view, code, src, by }) => {\r\n    modal.querySelector(\".modal-portfolio__title span\").textContent = title\r\n    modal.querySelector(\".modal-portfolio__categories span\").textContent =\r\n        categories\r\n    modal\r\n        .querySelector(\".modal-portfolio__view\")\r\n        .setAttribute(\"href\", `${view}`)\r\n    if (code) {\r\n        modal.querySelector(\".modal-portfolio__code\").classList.remove(\"_hide\")\r\n        modal.querySelector(\".modal-portfolio__code\").href = code\r\n    } else {\r\n        modal.querySelector(\".modal-portfolio__code\").classList.add(\"_hide\")\r\n        modal.querySelector(\".modal-portfolio__code\").href = \"#\"\r\n    }\r\n    if (by) {\r\n        modal.querySelector(\".modal-portfolio__by\").classList.remove(\"_hide\")\r\n        modal.querySelector(\".modal-portfolio__by\").innerHTML = by\r\n    } else {\r\n        modal.querySelector(\".modal-portfolio__by\").classList.add(\"_hide\")\r\n        modal.querySelector(\".modal-portfolio__by\").innerHTML = \"\"\r\n    }\r\n    modal.querySelector(\".modal-portfolio__bg\").setAttribute(\"src\", `${src}`)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setData);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/setDatModal.js?");

/***/ }),

/***/ "./src/js/modules/slowAnchorMove.js":
/*!******************************************!*\
  !*** ./src/js/modules/slowAnchorMove.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slowmotion = (link) => {\r\n    const links = document.querySelectorAll(link)\r\n\r\n    for (let anchor of links) {\r\n        anchor.addEventListener(\"click\", (e) => {\r\n            e.preventDefault()\r\n            const blockID = anchor.getAttribute(\"href\").substr(1)\r\n\r\n            document.getElementById(blockID).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\",\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slowmotion);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/slowAnchorMove.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;