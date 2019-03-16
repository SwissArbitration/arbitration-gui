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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./css/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-size: 1.5vw; \n    height: 100%;;\n }\n\n#setup {\n    height: 100%;\n}\n\ninput.nameInput.form-control {\n    flex: 1 5 100px;\n}\n\ninput.addressInput.form-control {\n    flex: 5 1 auto;\n}\n\n#metamask {\n    text-align: center;\n    width: 100%;\n    display: none;\n\n    font-size: calc(12px + 1.25vw);\n    padding: 75px 10px 10px 10px;\n}\n\n#metamask img {\n    width: calc(100px + 40vw);\n}\n\n.setupContainer {\n    margin: 75px 10px 10px 20px;\n    display: none;\n}\n\nspan.fa.fa-check-circle {\n    font-size: 20px;\n}\n\n.setupContainer .spinner-border {\n    width: 1.2rem;\n    height: 1.2rem;\n}\n\n#contractSelection .row {\n    padding: 15px;\n}\n\n#participantsDefinition {\n    display: none;\n}\n\n#contractSetup {\n    display: none;\n}\n\n#navParticipant {\n    display: none;\n}\n\n#navArbitrator {\n    display: none;\n}\n\n.navParticipant {\n    background-color: darkblue;\n}\n\n.navParticipant a {\n    color: #dbdbff;\n}\n\n.statusParticipant {\n    border-left: blue solid 1px;    \n    border-top: blue solid 1px;    \n    border-right: darkblue solid 1px;    \n    border-bottom: darkblue solid 1px;    \n    text-align: center;\n    margin: 20px 0px;\n}\n\n.participantTab.selected {\n    background-color: #dbdbff;\n    color: darkred;\n}\n\n.navArbitrator {\n    background-color: darkred;\n}\n\n.navArbitrator a {\n    color: #ffdbdb;\n}\n\n.table th {\n   font-size: 1.8vw; \n}\n\n.table td {\n    text-align: center;\n    font-size: 1.6vw;\n}\n\n.table th {\n    background-color: darkblue;\n    color: #dbdbff;\n    padding: 2px;\n    text-transform: capitalize;\n    font-weight: normal;\n    text-align: center;\n    border: 1px solid white;\n}\n\n.contact {\n    min-width: 120px !important;\n}\n\n.amount {\n    text-align: right !important;\n}\n\n.description {\n    text-align: left !important;\n}\n\n.about {\n    padding: 20px;\n    width: 100%;\n    text-align: center;\n}\n\n.arbitration th {\n    background-color: darkred !important;\n    color: #ffdbdb;\n}\n\n@media screen and (min-width: 800px) {\n    .table {\n        font-size: 18px; \n     }\n  }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/dispute.js":
/*!************************!*\
  !*** ./src/dispute.js ***!
  \************************/
/*! exports provided: isDisputeOpenBetween, disputeInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisputeOpenBetween", function() { return isDisputeOpenBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disputeInit", function() { return disputeInit; });
/* harmony import */ var _modules_ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ethereum */ "./src/modules/ethereum.js");
/* harmony import */ var _escrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escrow */ "./src/escrow.js");




const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
const EMPTY_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';

let currentParticipant = {
  address: '',
  balance: 0,
  disputes: [],
  history: [],
  isArbitor: false
};

let loadingPromise;
function afterLoading() {
  if(!loadingPromise) {
    disputeInit();
  }
  return loadingPromise;
}

async function loadMetamask() {
  return _modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["metamaskLoading"].then((account) => {
    if(account) {
      currentParticipant.address = account.address;
      document.getElementById("arbitrageAddress").innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(account.address, true);
      let balance = web3.fromWei(account.balance, 'ether');
      currentParticipant.balance = balance.round(3).toString();
    }
  });
}

async function loadArbitrage() {
  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;
  return Promise.all([ new Promise((resolve, reject) => {
    arbitrage.arbitrators(currentParticipant.address, (error, isArbitor) => {
      if(error) {
        console.error(error);
        reject(error);
        return;
      }

      currentParticipant.isArbitor = isArbitor;
      resolve(isArbitor);
    })
  }), new Promise((resolve, reject) => {
    let promises = [];
    let events = arbitrage.allEvents({ fromBlock: 4990000, toBlock: 'latest' });
    events.get(function (error, data) {
      if (data) {
        let history = [];
        let requests = 0;
        let disputeItems = { };
        data.forEach(event => {
          let disputeId = event.args.disputeId;
          let author = (event.args.author) ? event.args.author : event.args.claimant;
          disputeItems[disputeId] = { }
          let item = {
            block: event.blockNumber,
            transactionHash: event.transactionHash,
            event: event.event,
            disputeId: event.args.disputeId,
            author: author,
            claimant: event.args.claimant,
            defendant: event.args.defendant,
            arbitrable: event.args.arbitrable,
            resolutionHash: event.args.resolutionHash,
          };
          history.push(item);
          requests++;
          promises.push(web3.eth.getBlock(item.block, (error, data) => {
            if(data) {
              item.timestamp = data.timestamp * 1000;
            } else  {
              console.error(error);
            }
            requests--;
            if(requests == 0) {
              currentParticipant.history = history;
              createArbitrageHistory();
            }
          }));
        });
      } else {
        console.error(error);
      }
      resolve(data);
    })
  }), new Promise((resolve, reject) => {
    arbitrage.disputesCount((error, disputesCount) => {
      if(disputesCount > 0) {
        let batch = web3.createBatch();
        let activeDisputeIds = [];
        for(var i=0; i < disputesCount; i++) {
          let id = i+1;
          batch.add(arbitrage.disputeStatus.request(id, (err, data) => {
            activeDisputeIds[id-1] = data;
            if(activeDisputeIds.length == disputesCount) {
              resolve(activeDisputeIds);
            }
          }));
        }
        batch.execute();
      } else {
        if(!error) {
          resolve([]);
        } else {
          console.error(error);
          reject(error);
        }
      }
    })
  }).then((activeDisputeIds) => {
    let disputes = [];
    let unresolved = 0;

    return new Promise((resolve, reject) => {
      let batch = web3.createBatch();
      let resolveIfLoaded = ((dispute) => {
        dispute.request--;
        if(dispute.request == 0) {
          unresolved--;
        }
        if(unresolved == 0)  {
          resolve();
        }
      });

      activeDisputeIds.forEach((status, i) => {
        if(status == 0) {
          unresolved++;
          let dispute = {
            id: i+1,
            request: 5
          };
          disputes.push(dispute);
          batch.add(arbitrage.disputeClaimant.request(dispute.id, (err, data) => {
            dispute.claimant = data;
            resolveIfLoaded(dispute);
          }));
          batch.add(arbitrage.disputeArbitrable.request(dispute.id, (err, data) => {
            dispute.arbitrable = data;
            resolveIfLoaded(dispute);
          }));
          batch.add(arbitrage.disputeDefendant.request(dispute.id, (err, data) => {
            dispute.defendant = data;
            resolveIfLoaded(dispute);
          }));
          batch.add(arbitrage.disputeRaisedAt.request(dispute.id, (err, data) => {
            dispute.raisedAt = data;
            resolveIfLoaded(dispute);
          }));
          batch.add(arbitrage.disputeResolutionHash.request(dispute.id, (err, data) => {
            dispute.resolutionHash = data;
            resolveIfLoaded(dispute);
          }));
        }
      });
      if(unresolved > 0) {
        batch.execute();
      } else {
        resolve();  
      }
    }).then(() => {
      currentParticipant.disputes = disputes;
      createArbitraageToDoList();
    })
  }) ]);
}

function createArbitraageToDoList() {
  var tableBody = document.createElement('tbody');

  let promise = Promise.resolve();
  if(currentParticipant.isArbitor) {
    let addresses = [];
    currentParticipant.disputes.forEach(dispute => {
      if(addresses.indexOf(dispute.claimant) == -1) {
        addresses.push(dispute.claimant);
      }
      if(addresses.indexOf(dispute.defendant) == -1) {
        addresses.push(dispute.defendant);
      }
    })
    promise = Object(_escrow__WEBPACK_IMPORTED_MODULE_1__["loadAllLockedDeposits"])(addresses);
  }

  promise.then((allLockedDeposits) => {
    currentParticipant.disputes.forEach((dispute, index) => {
      var row = document.createElement('tr');
  
      // id
      var cellId = document.createElement('td');
      cellId.appendChild(document.createTextNode(dispute.id));
      row.appendChild(cellId);
  
      // Arbitrable
      var cell = document.createElement('td');
      if(dispute.arbitrable != EMPTY_ADDRESS)  {
        cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.arbitrable, true);
        row.appendChild(cell);
      } else {
        cell.innerHTML = 'Not Enforceable';
        row.appendChild(cell);
      }
  
      // Claimmant
      var cell = document.createElement('td');
      cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.claimant, true);
      row.appendChild(cell);
  
      // Defendant
      var cell = document.createElement('td');
      cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.defendant, true);
      row.appendChild(cell);
  
      var cell = document.createElement('td');
      if(currentParticipant.isArbitor || currentParticipant.address == dispute.claimant || currentParticipant.address == dispute.defendant) {
        cell.innerHTML = '<button type="submit" class="btn btn-info" onclick="showDisputeForm(\'suggestResolution\','+index+')"><span class="fa fa-file"></span> Suggest</button>';
      }
  
      if(currentParticipant.isArbitor || currentParticipant.address == dispute.claimant) {
        cell.innerHTML += ' <button type="submit" class="btn btn-danger" onclick="showDisputeForm(\'closeDispute\', '+index+')"><span class="fa fa-times"></span> Close</button>';
      }
      row.appendChild(cell);
      tableBody.appendChild(row);
  
      if(dispute.resolutionHash != EMPTY_HASH) {
        cellId.setAttribute('rowspan', '2');
  
        var row = document.createElement('tr');
  
        var cell = document.createElement('td');
        cell.id = 'recoveredCell';
        cell.setAttribute('colspan', '3');
        Object(_escrow__WEBPACK_IMPORTED_MODULE_1__["recoverResolutionHash"])(allLockedDeposits, dispute, dispute.resolutionHash).then((recovered) => {
          var cell = document.getElementById('recoveredCell');
          if(recovered) {
            let amount = web3.fromWei(recovered.amount, 'ether');
            if(recovered.method == 'release') {
              cell.innerHTML = '<b>Resolution</b> to release ' + amount + ' ETH  to ' + Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(recovered.payee, true);
            } else {
              cell.innerHTML = '<b>Resolution</b> to revert ' + amount + ' ETH back to ' + Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(recovered.payer, true);
            }
          } else {
            cell.innerHTML = 'Resolution Hash ' + Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenHash"])(dispute.resolutionHash);
          }
        });
        row.appendChild(cell);
        
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(dispute.id));
        cell.innerHTML = '<button type="submit" class="btn btn-success" onclick="showDisputeForm(\'resolveDispute\', '+index+')"><span class="fa fa-gavel"></span> Resolve</button>';
        row.appendChild(cell);
      }
  
      tableBody.appendChild(row);
    });
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.setAttribute("colspan", "5");
    cell.innerHTML = '<button type="submit" class="btn btn-primary float-right" onclick="showDisputeForm(\'raiseDispute\', 0)">Raise dispute <span class="fa fa-flag"></span></button>';
    row.appendChild(cell);
    tableBody.appendChild(row);
  
    document.getElementById("arbitrageToDoBody").innerHTML = tableBody.innerHTML;
  });
}

function createArbitrageHistory() {
  var tableBody = document.createElement('tbody');

  currentParticipant.history.forEach(function (event) {
    var row = document.createElement('tr');

    // Date
    var cell = document.createElement('td');
    let date = new Date(event.timestamp).toLocaleDateString();
    cell.appendChild(document.createTextNode(date));
    row.appendChild(cell);

    // Id
    var cell = document.createElement('td');
    cell.appendChild(document.createTextNode(event.disputeId));
    row.appendChild(cell);

    // Event
    var cell = document.createElement('td');
    let eventName = '-';
    let description = '-';
    switch (event.event) {
      case 'DisputeRaised':
        eventName = 'Raised';
        if(event.arbitrable != '0x0000000000000000000000000000000000000000') {
          description = 'on contract '+Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(event.arbitrable, true);
        }
        break;
      case 'DisputeClosed':
        eventName = 'Closed';
        break;
      case 'DisputeResolutionSuggested':
        eventName = 'Suggestion';
        break;
      case 'DisputeResolved':
        eventName = 'Resolution';
        break;
      case 'DisputeInterrupted':
        eventName = 'Interruption';
        break;
      case 'DisputeResumed':
        eventName = 'Resumed';
        break;
    }
    cell.appendChild(document.createTextNode(eventName));
    row.appendChild(cell);

    // Author
    var cell = document.createElement('td');
    if (event.author) {
      cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(event.author, true);
    } else {
      cell.innerHTML = '-';
    }
    row.appendChild(cell);

    // Description
    var cell = document.createElement('td');
    cell.innerHTML = description;
    cell.classList.add('description');
    row.appendChild(cell);

    tableBody.appendChild(row);
  });
  document.getElementById("arbitrageHistoryBody").innerHTML = tableBody.innerHTML;
}


function hideAllDisputeForms() {
  var depositForm = document.getElementById("raiseDisputeForm");
  depositForm.style.display = "none";

  var releaseForm = document.getElementById("closeDisputeForm");
  releaseForm.style.display = "none";

  var disputeForm = document.getElementById("suggestResolutionForm");
  disputeForm.style.display = "none";

  var disputeForm = document.getElementById("resolveDisputeForm");
  disputeForm.style.display = "none";

  var deposits = document.getElementById("activeDisputes");
  deposits.style.display = "block";

  var depositsHistory = document.getElementById("disputeHistory");
  depositsHistory.style.display = "block";

  return false;
}

function showDisputeForm(name, index) {
  currentParticipant.selectedAction = name;
  currentParticipant.selectedDispute = index;

  var activeDisputes = document.getElementById("activeDisputes");
  activeDisputes.style.display = "none";

  var disputeHistory = document.getElementById("disputeHistory");
  disputeHistory.style.display = "none";

  var dispute = currentParticipant.disputes[index];

  switch(name) {
    case "raiseDispute":
      var raiseDisputeForm = document.getElementById("raiseDisputeForm");
      raiseDisputeForm.style.display = "block";
      break;
    case "suggestResolution":
      var suggestDisputeId = document.getElementById("suggestDisputeId");
      suggestDisputeId.innerHTML = dispute.id;

      var suggestResolutionForm = document.getElementById("suggestResolutionForm");
      suggestResolutionForm.style.display = "block";

      var suggestArbitrable = document.getElementById("suggestArbitrable");
      suggestArbitrable.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.arbitrable, true);

      var suggestClaimant = document.getElementById("suggestClaimant");
      suggestClaimant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.claimant, true);

      var suggestDefendant = document.getElementById("suggestDefendant");
      suggestDefendant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.defendant, true);

      var suggestResolutionHash = document.getElementById("suggestResolutionHash");
      if (dispute.resolutionHash.startsWith('0x')) {
        suggestResolutionHash.value = dispute.resolutionHash.substring(2);
      } else {
        suggestResolutionHash.value = dispute.resolutionHash;
      }
      break;
    case "closeDispute":
      var closeDisputeId = document.getElementById("closeDisputeId");
      closeDisputeId.innerHTML = dispute.id;

      var closeArbitrable = document.getElementById("closeArbitrable");
      closeArbitrable.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.arbitrable, true);

      var closeClaimant = document.getElementById("closeClaimant");
      closeClaimant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.claimant, true);

      var closeDefendant = document.getElementById("closeDefendant");
      closeDefendant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.defendant, true);

      var closeDisputeForm = document.getElementById("closeDisputeForm");
      closeDisputeForm.style.display = "block";
      break;
    case "resolveDispute":
      var closeDisputeId = document.getElementById("resolveDisputeId");
      closeDisputeId.innerHTML = dispute.id;

      var resolveArbitrable = document.getElementById("resolveArbitrable");
      resolveArbitrable.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.arbitrable, true);

      var resolveClaimant = document.getElementById("resolveClaimant");
      resolveClaimant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.claimant, true);

      var resolveDefendant = document.getElementById("resolveDefendant");
      resolveDefendant.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(dispute.defendant, true);

      var resolveRsolutionHash = document.getElementById("resolveResolutionHash");
      if (dispute.resolutionHash.startsWith('0x')) {
        resolveRsolutionHash.value = dispute.resolutionHash.substring(2);
      } else {
        resolveRsolutionHash.value = dispute.resolutionHash;
      }

      var resolveDisputeForm = document.getElementById("resolveDisputeForm");
      resolveDisputeForm.style.display = "block";
      break;
  }
  return false;
}

function actionRaiseDispute() {
  let arbitrable = document.getElementById("arbitrable").value;
  let defendant = document.getElementById("defendant").value;
  let reasonHash = document.getElementById("disputeReasonHash").innerHTML;
  let resolutionHash = web3.sha3('');
  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;

  if(arbitrable) {
    if(!arbitrable.startsWith('0x')) {
      arbitrable = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["lookupName"])(arbitrable);
    }
    if(arbitrable.length == 40) {
      arbitrable = '0x' + arbitrable;
    }
  }

  if(defendant) {
    if(!defendant.startsWith('0x')) {
      defendant = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["lookupName"])(defendant);
    }
    if(defendant.length == 40) {
      defendant = '0x' + defendant;
    }
  }

  let arbitrableValid = arbitrable.length == 42 && arbitrable.startsWith('0x');
  let defendantValid = defendant.length == 42 && defendant.startsWith('0x');
  let reasonHashValid = reasonHash.length == 66 && reasonHash.startsWith('0x');

  if (arbitrableValid && defendantValid && reasonHashValid) {
    arbitrage.raiseDispute(arbitrable, defendant, reasonHash, resolutionHash, (err, data) => {
      if (data) {
        console.log(data);
        hideAllDisputeForms();
      } else {
        console.error(err);
      }
    });
  } else  {    
    console.error("Invalid parameters (depositTo="+depositToValid+", amount="+amountValid+")");
  }
  return false;
}

function actionSuggestResolution() {
  var dispute = currentParticipant.disputes[currentParticipant.selectedDispute];
  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;
  
  let resolutionHash = document.getElementById("suggestResolutionHash").value;
  if(resolutionHash) {
    if(!resolutionHash.startsWith('0x')) {
      resolutionHash = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["lookupName"])(resolutionHash);
    }
    if(resolutionHash.length == 64) {
      resolutionHash = '0x' + resolutionHash;
    }
  }

  let resolutionHashValid = resolutionHash.length == 66 && resolutionHash.startsWith('0x');

  if (resolutionHashValid) {
    arbitrage.suggestDisputeResolution(dispute.id, resolutionHash, (err, data) => {
      if(data) {
        console.log(data);
        hideAllDisputeForms();
      } else {
        console.error(err);
      }
    })
  } else {
    console.error("Invalid parameters (resolutionHash: "+resolutionHashValid+")");
  }
  return false;
}

function actionCloseDispute() {
  var dispute = currentParticipant.disputes[currentParticipant.selectedDispute];
  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;

  arbitrage.closeDispute(dispute.id, (err, data) => {
    if(data) {
      console.log(data);
      hideAllDisputeForms();
    } else {
      console.error(err);
    }
  });
  return false;
}

function actionResolveDispute() {
  var dispute = currentParticipant.disputes[currentParticipant.selectedDispute];
  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;

  let resolutionHash = document.getElementById("resolveResolutionHash").value;
  if(resolutionHash) {
    if(resolutionHash.length == 64) {
      resolutionHash = '0x' + resolutionHash;
    }
  }

  arbitrage.resolveDispute(dispute.id, resolutionHash, (err, data) => {
    if(data) {
      console.log(data);
      hideAllDisputeForms();
    } else {
      console.error(err);
    }
  })
  return false;
}

async function isDisputeOpenBetween(addressA, addressB) {
  return afterLoading().then(() => {
    let result = false;
    currentParticipant.disputes.forEach((dispute) => {
      result = result
        || (dispute.claimant == addressA && dispute.defendant == addressB)
        || (dispute.claimant == addressB && dispute.defendant == addressA);
    });
    return result;
  });
}

function disputeInit() {
  if(window.ethereum && !loadingPromise) {
    loadingPromise = new Promise(async function(resolve, reject) {
      if (document.readyState === "complete") { 
        console.log('loading dispute...');
        await loadMetamask();
        await loadArbitrage();
        resolve();
      } else {
        window.addEventListener('load', async () => {
          console.log('loading dispute...');
          await loadMetamask();
          await loadArbitrage();
          resolve();
        });
      }
    });
  
    loadingPromise.then(() => {
      if(currentParticipant.isArbitor) {
        var navArbitrator = document.getElementById('navArbitrator');
        navArbitrator.style.display = 'block';
    
        var participant = document.getElementById('participant');
        participant.classList.remove('show');
        participant.classList.remove('active');
    
        var arbitrageTab = document.getElementById('arbitrage');
        arbitrageTab.classList.add("show", "active")
      } else {
        var navParticipant = document.getElementById('navParticipant');
        navParticipant.style.display = 'block';
  
        var participant = document.getElementById('participant');
        participant.classList.add("show", "active")
  
        var arbitrageTab = document.getElementById('arbitrage');
        arbitrageTab.classList.remove('show');
        arbitrageTab.classList.remove('active');

        console.log(currentParticipant);
        console.log("arbitrage loading finished!");
      }
    });
  }

  return loadingPromise;
}

window.showDisputeForm = showDisputeForm;
window.hideAllDisputeForms = hideAllDisputeForms;
window.actionRaiseDispute = actionRaiseDispute;
window.actionSuggestResolution = actionSuggestResolution;
window.actionCloseDispute = actionCloseDispute;
window.actionResolveDispute = actionResolveDispute;
window.disputeLoaded = true;




/***/ }),

/***/ "./src/escrow.js":
/*!***********************!*\
  !*** ./src/escrow.js ***!
  \***********************/
/*! exports provided: recoverResolutionHash, loadAllLockedDeposits, escrowInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recoverResolutionHash", function() { return recoverResolutionHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLockedDeposits", function() { return loadAllLockedDeposits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escrowInit", function() { return escrowInit; });
/* harmony import */ var _modules_ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ethereum */ "./src/modules/ethereum.js");
/* harmony import */ var _dispute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispute */ "./src/dispute.js");




const EMPTY_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';

let currentParticipant = {
  address: '', 
  balance: 0,
  withdrawable: 0,
  lockedDeposits: [],
  selectedDeposit: 0,
  selectedAction: '',
  selectedAmount: 0,
  history: [],
};

let loadingPromise;

function loadMetamask() {
  return _modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["metamaskLoading"].then((account) => {
    if(account) {
      currentParticipant.address = account.address;
      document.getElementById("address").innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(account.address, true);
      let balance = web3.fromWei(account.balance, 'ether');
      currentParticipant.balance = balance.round(3).toString();
    }
  });
}

async function loadEscrow() {
  let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;
  return new Promise((resolve, reject) => {
    let events = escrow.allEvents({ fromBlock: 4990000, toBlock: 'latest' });
    let promises = [];
    events.get(function(error, data) {
      if(!error) {
        let lockedAddresses = [];
        let history = [];
        data.forEach(event => {
          let from = event.args.from;
          if(!event.args.from && event.args.by) {
            from = event.args.by;
          }

          let item = {
            block: event.blockNumber,
            transactionHash: event.transactionHash,
            event: event.event,
            from: from,
            to: event.args.payee,
            amount: event.args.weiAmount,
            disputed: false
          };

          if (event.event == 'DepositAdded'
            && lockedAddresses.indexOf(event.args.payee) == -1) {
            lockedAddresses.push(event.args.payee);
          }
          history.push(item);
        });
        currentParticipant.history = history.sort( (a, b) => (b.block - a.block));
        if(lockedAddresses.length > 0) {
          promises.push(loadLockedDeposits(currentParticipant.address, lockedAddresses).then((result) => {
            currentParticipant.lockedDeposits = result;
            let promisesLockedDeposits = [];
            currentParticipant.lockedDeposits.forEach((deposit) => {
              promisesLockedDeposits.push(Object(_dispute__WEBPACK_IMPORTED_MODULE_1__["isDisputeOpenBetween"])(currentParticipant.address, deposit.address).then(result => {
                deposit.disputed = result;
              }));
            });

            return Promise.all(promisesLockedDeposits).then(() => {
              createTodoList();
            });
          }));
        }
        let requests = currentParticipant.history.length;
        currentParticipant.history.forEach((item) => {
          promises.push(web3.eth.getBlock(item.block, (error, data) => {
            if(data) {
              item.timestamp = data.timestamp * 1000;
            } else  {
              console.error(error);
            }
            requests--;
            if(requests == 0) {
              createEscrowHistory();
            }
          }));
        });
      } else {
        console.error(error);
      }
      Promise.all(promises).then(() => {
        resolve(data);
      });
    });
  }).then(() => {
    if(currentParticipant.address) {
      escrow.depositReleased(currentParticipant.address, (err, data) => {
        if (data) {
          currentParticipant.withdrawable = data.toString();
        } else {
          console.error(err);
        }
      });
    }
  });
}

function loadAllLockedDeposits(lockedRecipients) {
  let promises = [];
  lockedRecipients.forEach((address) => {
    let addresses = lockedRecipients.filter(x => x != address);
    promises.push(loadLockedDeposits(address, addresses));
  })
  return Promise.all(promises).then((resultArray) => {
    if(resultArray) {
      resultArray = resultArray.flatMap(result => result);
    }
    return resultArray;
  });
}

function loadLockedDeposits(participantAddress, lockedRecipients) {
  let result = [];
  return new Promise((resolve) => {
    let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;
    var batch = web3.createBatch();
    lockedRecipients.forEach(address => {
      let item = {
        participant: participantAddress, 
        address: address,
        requests: 2
      };
      result.push(item);
      batch.add(escrow.depositLocked.request(participantAddress, address, (err, data) => {
        if(data) {
          item.their = data;
        } else {
          console.error(err);
        }
        item.requests--;
        if(item.requests == 0 && result.length == lockedRecipients.length) {
          resolve(result);
        }
      }));
      batch.add(escrow.depositLocked.request(address, participantAddress, (err, data) => {
        if(data) {
          item.ours = data;
        } else {
          console.error(err);
        }
        item.requests--;
        if(item.requests == 0 && result.length == lockedRecipients.length) {
          resolve(result);
        }
      }));
    });
    batch.execute();
  }).then(() => {
    return result.filter(x => x.their > 0 || x.ours > 0);
  });
}

function createTodoList() {
  var todoListDiv = document.createElement('div');

 if(currentParticipant.withdrawable > 0) {
    let escrowWithdraw = document.getElementById('escrowWithdraw');
    escrowWithdraw.innerHTML = '<p>You currently have '+
      web3.fromWei(currentParticipant.withdrawable, 'ether')+
    ' ETH to '+
    '<a href="javascript:actionWithdraw()" data-toggle="tooltip" title="Withdraw">'+
    'Withdraw <span class="fa fa-arrow-circle-down"></span></a>.</p>';
  }

  let escrowPosition = document.createElement('tbody');
  currentParticipant.lockedDeposits.forEach((item, i) => {
    var row = document.createElement('tr');

    if(item.disputed) {
      row.classList.add('bg-warning');
    }

    var cell = document.createElement('td');
    cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(item.address, true);
    row.appendChild(cell);

    var cell = document.createElement('td');
    let their = web3.fromWei(item.their, 'ether');
    cell.appendChild(document.createTextNode(their + ' ETH'));
    cell.classList.add('amount');
    row.appendChild(cell);

    var cell = document.createElement('td');
    let ours = web3.fromWei(item.ours, 'ether');
    cell.appendChild(document.createTextNode(ours + ' ETH'));
    cell.classList.add('amount');
    row.appendChild(cell);

    var cell = document.createElement('td');
    cell.innerHTML = '';
    if(!item.disputed) {
      if(item.their > 0) {
        cell.innerHTML += '<button type="submit" class="btn btn-warning" onclick="showEscrowForm(\'dispute\', '+i+')"><span class="fa fa-flag"></span> Dispute</button>';
      }
      if(item.ours > 0) {
        if(item.their > 0) {
          cell.innerHTML += '&nbsp;';
        }
        cell.innerHTML += '<button type="submit" class="btn btn-success" onclick="showEscrowForm(\'release\', '+i+')"><span class="fa fa-unlock-alt"></span> Release</button>';
      }
    } else {
      cell.innerHTML = 'Disputed <span class="fa fa-flag"></span>';
    }
    row.appendChild(cell);

    escrowPosition.appendChild(row);
  });

  var row = document.createElement('tr');
  row.innerHTML = '<tr><td colspan="3"></td><td><button type="submit" class="btn btn-primary" onclick="showEscrowForm(\'deposit\', 0)"><span class="fa fa-upload"></span>&nbsp;<span>Deposit</span></button></td></tr>';
  escrowPosition.appendChild(row);
  
  document.getElementById('escrowCurrentPosition').innerHTML = escrowPosition.innerHTML;
}

function createEscrowHistory() {
  var tableBody = document.createElement('tbody');

  currentParticipant.history.forEach(function(event) {
    var row = document.createElement('tr');

    // Date
    var cell = document.createElement('td');
    let date = new Date(event.timestamp).toLocaleDateString();
    cell.appendChild(document.createTextNode(date));
    row.appendChild(cell);

    // Event
    var cell = document.createElement('td');
    let eventName = '-';
    switch(event.event) {
      case 'DepositAdded':
        eventName = 'Deposit';
        break;
      case 'DepositReleased':
        eventName = 'Release';
        break;
      case 'DepositWithdrawn':
        eventName = 'Withdraw';
        break;
      case 'OwnershipTransferred':
        eventName = 'New Owner';
        break;
    }
    cell.appendChild(document.createTextNode(eventName));
    row.appendChild(cell);

    // From
    var cell = document.createElement('td');
    if (event.from) {
      cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(event.from, true);
    } else {
      cell.appendChild(document.createTextNode('-'));
    }
    row.appendChild(cell);

    // To
    var cell = document.createElement('td');
    if (event.to) {
      cell.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(event.to, true);
    } else {
      cell.appendChild(document.createTextNode('-'));
    }
    row.appendChild(cell);

    // Amount
    var cell = document.createElement('td');
    if(event.amount > 0) {
      cell.appendChild(document.createTextNode(web3.fromWei(event.amount, 'ether') + ' ETH'));
      cell.classList.add('amount');  
    } else {
      cell.appendChild(document.createTextNode('-'));
    }
    row.appendChild(cell);

    tableBody.appendChild(row);
  });
  document.getElementById("escrowHistoryBody").innerHTML = tableBody.innerHTML;
}

function actionDeposit() {
  let amount = document.getElementById("depositAmount").value;
  let depositTo = document.getElementById("depositTo").value;

  let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;

  if(depositTo) {
    if(!depositTo.startsWith('0x')) {
      depositTo = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["lookupName"])(depositTo);
    }
    if(depositTo.length == 40) {
      depositTo = '0x' + depositTo;
    }
  }
  let depositToValid = depositTo.length == 42 && depositTo.startsWith('0x');
  let amountValid = currentParticipant.balance >= amount && amount > 0;

  if (depositToValid && amountValid) {
    escrow.addDeposit( depositTo, { from: currentParticipant.address, value: web3.toWei( amount, 'ether') }, (err, data) => {
      if (data) {
        console.log(data);
        hideAllEscrowForms();
      } else {
        console.log(err);
      }
    });
  } else  {    
    console.error("Invalid parameters (depositTo="+depositToValid+", amount="+amountValid+")");
  }
  return false;
}

function actionWithdraw() {
  let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;  
  escrow.withdrawDeposit( currentParticipant.address, { from: currentParticipant.address }, (err, data) => {
    if (data) {
      console.log(data);
    } else {
      console.log(err);
    }
  })
}

function actionRelease() {
  let amount = currentParticipant.selectedAmount;
  let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;  

  var deposit = currentParticipant.lockedDeposits[currentParticipant.selectedDeposit];
  var address = deposit.address;

  var amountValid = amount > 0;

  if(amountValid) {
    escrow.releaseDeposit( address, amount, { from: currentParticipant.address }, (err, data) => {
      if (data) {
        console.log(data);
        hideAllEscrowForms();
      } else {
        console.log(err);
      }
    });
  } else {
    console.error("Invalid data (amountValid="+amountValid+")");
  }
  return false;
}

function actionRaiseEscrowDispute() {
  var deposit = currentParticipant.lockedDeposits[currentParticipant.selectedDeposit];
  let amount = currentParticipant.selectedAmount;

  let arbitrage = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Arbitrage').instance;
  let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;

  var reasonHash = document.getElementById("escrowReasonHash").innerHTML;

  let resolution = '';
  switch(document.getElementById("escrowRequestSelect").value) {
    case 'Release':
      resolution = escrow.forceReleaseDeposit.getData(deposit.address, currentParticipant.address, amount);
      break;
    case 'Revert':
      resolution = escrow.revertDeposit.getData(deposit.address, currentParticipant.address, amount);
      break;
  }

  let resolutionHash = web3.sha3(resolution, { encoding: 'hex'});

  let reasonHashValid = reasonHash.length == 66 && reasonHash.startsWith('0x');
  let resolutionHashValid = resolutionHash.length == 66 && resolutionHash.startsWith('0x');
  if(reasonHashValid && resolutionHashValid) {
    arbitrage.raiseDispute(escrow.address, deposit.address, reasonHash, resolutionHash, (err, data) => {
      if (data) {
        console.log(data);
        hideAllEscrowForms();
      } else {
        console.log(err);
      }
    });
  } else {
    console.error("Invalid parameters (reasonHash: "+reasonHashValid+", resolutionHash: "+resolutionHashValid+"")
  }
  return false;
}

function hideAllEscrowForms() {
  var depositForm = document.getElementById("depositForm");
  depositForm.style.display = "none";

  var releaseForm = document.getElementById("releaseForm");
  releaseForm.style.display = "none";

  var disputeForm = document.getElementById("disputeForm");
  disputeForm.style.display = "none";

  var deposits = document.getElementById("deposits");
  deposits.style.display = "block";

  var depositsHistory = document.getElementById("depositsHistory");
  depositsHistory.style.display = "block";

  return false;
}

function showEscrowForm(name, index) {
  currentParticipant.selectedAction = name;
  currentParticipant.selectedDeposit = index;

  var deposits = document.getElementById("deposits");
  deposits.style.display = "none";

  var depositsHistory = document.getElementById("depositsHistory");
  depositsHistory.style.display = "none";

  switch(name) {
    case "deposit":
      var depositForm = document.getElementById("depositForm");
      depositForm.style.display = "block";
      break;
    case "release":
      var releaseForm = document.getElementById("releaseForm");
      releaseForm.style.display = "block";
      displayETHSlider('releaseSlider', 'releaseAmount');

      var lockedDeposit = currentParticipant.lockedDeposits[currentParticipant.selectedDeposit];
      var recipient = document.getElementById('releaseRecipient');
      recipient.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(lockedDeposit.address, true);
      break;
    case "dispute":
      var disputeForm = document.getElementById("disputeForm");
      disputeForm.style.display = "block";
      displayETHSlider('disputeSlider', 'disputeAmount');
      buildDisputeHash('reasonHashArea', 'escrowReasonHash');

      var lockedDeposit = currentParticipant.lockedDeposits[currentParticipant.selectedDeposit];
      var recipient = document.getElementById('disputeRecipient');
      recipient.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["shortenAddress"])(lockedDeposit.address, true);
      break;
  }
}

function escrowRequestSelection(event) {
  return displayETHSlider('disputeSlider', 'disputeAmount')
}

function displayETHSlider(id, idDisplay) {
  let value = document.getElementById(id).value;

  let lockedDeposit = currentParticipant.lockedDeposits[currentParticipant.selectedDeposit];
  if(lockedDeposit && currentParticipant.selectedAction == 'release') {
    var releaseAmount = document.getElementById(idDisplay);
    var amount = Math.round(value * lockedDeposit.ours / 100);
    currentParticipant.selectedAmount = amount;
    releaseAmount.innerHTML = web3.fromWei(amount, 'ether') + ' ETH';
  }
  if(lockedDeposit && currentParticipant.selectedAction == 'dispute') {
    var selectedAction = document.getElementById('escrowRequestSelect');
    var releaseAmount = document.getElementById(idDisplay);
    var lockedValue = (selectedAction.value == 'Release') ? lockedDeposit.their : lockedDeposit.ours;
    var amount = Math.round(value * lockedValue / 100);
    currentParticipant.selectedAmount = amount;
    releaseAmount.innerHTML = web3.fromWei(amount, 'ether') + ' ETH';
  }
}

function buildDisputeHash(input, label) {
  var reasonHashArea = document.getElementById(input);
  var reasonHash = document.getElementById(label);
  if(reasonHashArea.value) {
    reasonHash.innerHTML = web3.sha3(reasonHashArea.value);
  } else {
    reasonHash.innerHTML = EMPTY_HASH;
  }
}

function goTo(tag) {
  var arbitrageTab = document.getElementById('arbitrage-tab');
  var participantTab = document.getElementById('participant-tab');
  var aboutTab = document.getElementById('about-tab');

  var arbitrage = document.getElementById('arbitrage');
  var participant = document.getElementById('participant');
  var about = document.getElementById('about');
  
  var participant = document.getElementById('participant');
  participant.style.display = 'none';
  participant.style.opacity = 0;
  var arbitrage = document.getElementById('arbitrage');
  arbitrage.style.display = 'none';
  arbitrage.style.opacity = 0;
  var about = document.getElementById('about');
  about.style.display = 'none';
  about.style.opacity = 0;

  participantTab.classList.remove('selected');
  participantTab.classList.remove('active');
  arbitrageTab.classList.remove('selected');
  arbitrageTab.classList.remove('active');
  aboutTab.classList.remove('selected');
  aboutTab.classList.remove('active');
  
  switch(tag) {
    case 'participant':
      var participant = document.getElementById('participant');
      participant.style.display = 'block';
      participant.style.opacity = 1;
      participantTab.classList.add(['selected', 'active']);
      break;
    case 'arbitrage':
      var arbitrage = document.getElementById('arbitrage');
      arbitrage.style.display = 'block';
      arbitrage.style.opacity = 1;
      arbitrageTab.classList.add('selected');
      arbitrageTab.classList.add('active');
      break;
    case 'about':
      var about = document.getElementById('about');
      about.style.display = 'block';
      about.style.opacity = 1;
      aboutTab.classList.add('selected');
      aboutTab.classList.add('active');
      break;
  }
}

async function recoverResolutionHash(lockedDeposits, dispute, resolutionHash) {
  return loadingPromise.then(() => {
    let deposits = (lockedDeposits) ? lockedDeposits : currentParticipant.lockedDeposits;

    let escrow = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_0__["contract"])('Escrow').instance;
  
    let deposit;
    let addresses = [ dispute.claimant, dispute.defendant ];
    deposits.forEach((item) => {
      if(addresses.indexOf(item.participant) != -1
        && addresses.indexOf(item.address) != -1) {
          deposit = item;
          return;
      }
    });

    if(!deposit) {
      return null;
    }

    let recovered = null;
    let checkHash = function(address, participant, amount) {
      var hash = web3.sha3(escrow.forceReleaseDeposit.getData(address, participant, amount), { encoding: 'hex'});
      if(resolutionHash == hash) {
        recovered = {
          method: 'Release',
          payee: address,
          payer: participant,
          amount: amount
        }
      }
      var hash = web3.sha3(escrow.revertDeposit.getData(address, participant, amount), { encoding: 'hex'});
      if(resolutionHash == hash) {
        recovered = {
          method: 'Revert',
          payee: address,
          payer: participant,
          amount: amount
        }
      }
    };

    [.25, .5, .75, 1].forEach(x => {
      var ours = deposit.ours * x;
      var their = deposit.their * x;

      if(!recovered) {
        checkHash(deposit.address, deposit.participant, their);
        checkHash(deposit.participant, deposit.address, ours);  
      }
    });
    return recovered;
  });
}

function escrowInit() {
  if (window.ethereum && !loadingPromise) {
    loadingPromise = new Promise(async function (resolve, reject) {
      console.log('loading escrow...');
      if (document.readyState === "complete") { 
        await loadMetamask();
        await loadEscrow();
        console.log(currentParticipant);
        resolve();
      } else {
        window.addEventListener('load', async () => {
          await loadMetamask();
          await loadEscrow();
          console.log(currentParticipant);
          resolve();
        });
      }
    });
    
    loadingPromise.then(() => {
      new Slider('#releaseSlider', {
        formatter: function (value) {
          displayETHSlider('releaseSlider', 'releaseAmount');
        }
      });
      new Slider('#disputeSlider', {
        formatter: function (value) {
          displayETHSlider('disputeSlider', 'disputeAmount');
        }
      });

      var arbitrageTab = document.getElementById('arbitrage-tab');
      var participantTab = document.getElementById('participant-tab');
      var aboutTab = document.getElementById('about-tab');

      participantTab.addEventListener('click', async () => {
        goTo('participant');
      });

      arbitrageTab.addEventListener('click', async () => {
        goTo('arbitrage');
      });

      aboutTab.addEventListener('click', async () => {
        goTo('about');
      });

      var escrowRequestSelect = document.getElementById('escrowRequestSelect');
      escrowRequestSelect.addEventListener('change', escrowRequestSelection);

      console.log('escrow loading finished!');
    });
  }
  return loadingPromise;
}

window.showEscrowForm = showEscrowForm;
window.hideAllEscrowForms = hideAllEscrowForms;
window.actionDeposit = actionDeposit;
window.actionWithdraw = actionWithdraw;
window.actionRelease = actionRelease;
window.actionRaiseEscrowDispute = actionRaiseEscrowDispute;
window.buildDisputeHash = buildDisputeHash;



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ethereum */ "./src/modules/ethereum.js");
/* harmony import */ var _escrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escrow */ "./src/escrow.js");
/* harmony import */ var _dispute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispute */ "./src/dispute.js");






//const ROPSTEN_ESCROW_ADDRESS = '0x78afbee6f1693d16d1b61bA9425b736F19706858';
//const ROPSTEN_ARBITRAGE_ADDRESS = '0xCEe80ff1B8DB005C2DC93bE318c3152462799544';

// https://en.wikipedia.org/wiki/Alice_and_Bob
const PARTICIPANTS = [ 'Alice', 'Bob', 'Charlie', 'Eve', 'Mallory', 'Olivia' ];

let escrowAddress;

function loadAllContracts() {
  var escrowAddress = '0x' + document.getElementById("escrowAddressInput").value;
  return loadAllContractsInternal(escrowAddress);
}

function loadAllContractsInternal(escrowAddress) {
  Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["loadContract"])('Escrow', escrowAddress).then((escrow) => {
    return new Promise((resolve, reject) => {
      escrow.instance.owner.call((err, data) => {
        if(data) {
          resolve(data);
        } else {
          console.error(err);
          reject(err);
        }
      });
    }).then((arbitrageAddress) => {
      return Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["loadContract"])('Arbitrage', arbitrageAddress);
    });
  }).then(() => {
    return Promise.all([Object(_escrow__WEBPACK_IMPORTED_MODULE_2__["escrowInit"])(), Object(_dispute__WEBPACK_IMPORTED_MODULE_3__["disputeInit"])()]);
  }).then(() => {
    var contractSelection = document.getElementById("contractSelection");
    contractSelection.style.display = 'none';

    var setup = document.getElementById("setup");
    setup.style.display = 'none';

    var app = document.getElementById("app");
    app.style.display = 'block';
  });
  return false;
}

function welcome() {
  var contractSelection = document.getElementById("contractSelection");
  contractSelection.style.display = 'block';

  var participantsDefinition = document.getElementById("participantsDefinition");
  participantsDefinition.style.display = 'none';

  return false;
}

function setupParticipants() {
  var contractSelection = document.getElementById("contractSelection");
  contractSelection.style.display = 'none';

  var participantsDefinition = document.getElementById("participantsDefinition");
  participantsDefinition.style.display = 'block';

  return false;
}

function createNewContracts() {
  var participantsDefinition = document.getElementById("participantsDefinition");
  participantsDefinition.style.display = 'none';

  var contractSetup = document.getElementById("contractSetup");
  contractSetup.style.display = 'block';

  var steps = [];
  [1, 2, 3, 4].forEach((i) => {
    let step = {
      loading: document.getElementById('loadingStep'+i),
      spinner: document.getElementById('spinnerStep'+i),
      success: document.getElementById('successStep'+i),
    }
    steps.push(step);
    
    step.loading.style.display = '';
    step.spinner.style.display = 'none';
    step.success.style.display = 'none';
  });

  var endSetup = document.getElementById("endSetup");
  endSetup.style.display = 'none';

  var arbiters = [];
  [1, 2, 3].forEach(i => {
    var setupArbiterAddress = document.getElementById('setupArbiterAddress'+i);
    if(setupArbiterAddress.value && setupArbiterAddress.value.length == 40) {
      arbiters.push('0x'+setupArbiterAddress.value);
    }
  });

  steps[0].spinner.style.display = '';

  let escrow, arbitrage;
  Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["newContract"])('Escrow', []).then((contract) => {
    escrow = contract;
    escrowAddress = contract.address;

    steps[0].spinner.style.display = 'none';
    steps[0].success.style.display = '';

    var escrowAddressSetup = document.getElementById("escrowAddressSetup");
    escrowAddressSetup.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["shortenAddress"])(contract.address, true);
  }).then(() => {
    steps[1].spinner.style.display = '';

    return Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["newContract"])('Arbitrage', []);
  }).then((contract) => {
    arbitrage = contract;
    steps[1].spinner.style.display = 'none';
    steps[1].success.style.display = '';

    var arbitrageAddressSetup = document.getElementById("arbitrageAddressSetup");
    arbitrageAddressSetup.innerHTML = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["shortenAddress"])(contract.address, true);
  }).then(() => {
    steps[2].spinner.style.display = '';
    return new Promise((resolve, reject) => {
      escrow.transferOwnership(arbitrage.address, (error, data) => {
        if(data) {
          resolve(data);
        } else {
          console.error(error);
          reject(error);
        }
      });
    }).then((hash) => {
      return Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["waitForReceipt"])(hash).then((data) => {
        console.log('Ownership transferred');
        console.log(data);
        return data;
      });
    });
  }).then(() => {
    steps[2].spinner.style.display = 'none';
    steps[2].success.style.display = '';
  }).then(() => {
    steps[3].spinner.style.display = '';
    return new Promise((resolve, reject) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      arbitrage.addArbitrators(arbiters, (error, data) => {
        if(data) {
          resolve(data);
        } else {
          console.error(error);
          reject(error);
        }
      });
    }).then((hash) => {
      return Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["waitForReceipt"])(hash).then((data) => {
        console.log('Arbitrators added');
        console.log(data);
        return data;
      });
    });
  }).then(() => {
    steps[3].spinner.style.display = 'none';
    steps[3].success.style.display = '';
    endSetup.style.display = '';
  });

  return false;
}

function endSetup() {
  var contractSelection = document.getElementById("contractSelection");
  contractSelection.style.display = 'none';

  var setup = document.getElementById("setup");
  setup.style.display = 'none';

  var app = document.getElementById("app");
  app.style.display = 'block';

  if(!escrowAddress) {
    escrowAddress = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["lookupName"])('Escrow');
  }

  return loadAllContractsInternal(escrowAddress);
}

var setup = document.getElementById("setup");
setup.style.display = 'block';

if(!window.ethereum) {
  var metamask = document.getElementById("metamask");
  metamask.style.display = 'block';
} else {
  window.ethereum.on('accountsChanged', function (accounts) {
    // Time to reload your interface with accounts[0]!
    console.log('new accounts: ' + accounts[0]);
    location.reload(false);
  });

  _modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["metamaskLoading"].then(account => {
    var setupOwnerAddress = document.getElementById("setupOwnerAddress");
    setupOwnerAddress.value = account.address.substr(2);
  })

  //var app = document.getElementById("app");
  //app.style.display = 'block';

  let search = window.location.search;
  let escrowAddress = search.replace(/.*contract=0x(\w+)&?/, '0x$1');

  if(!escrowAddress) {
    Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["registryPromise"])().then(() => {
      var escrowAddressInput = document.getElementById("escrowAddressInput");
      escrowAddress = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["lookupName"])('Escrow');
      escrowAddressInput.value = escrowAddress.substr(2);
  
      PARTICIPANTS.forEach((participant, i) => {
        let index = i+1;
        var setupParticipantName = document.getElementById("setupParticipantName"+index);
        setupParticipantName.value = participant;
      
        var setupParticipantAddress = document.getElementById("setupParticipantAddress"+index);
        let participantAddress = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["lookupName"])(participant);
        if(participantAddress != participant) {
          setupParticipantAddress.value = participantAddress.substr(2);
        } else {
          setupParticipantAddress.placeholder = participant+'\'s address';
        }
      });
      [ 'Arbiter1' ].forEach((arbiter, i) => {
        let index = i+1;
        var setupArbiterName = document.getElementById("setupArbiterName"+index);
        setupArbiterName.value = arbiter;
      
        var setupArbiterAddress = document.getElementById("setupArbiterAddress"+index);
        let arbiterAddress = Object(_modules_ethereum__WEBPACK_IMPORTED_MODULE_1__["lookupName"])(arbiter);
        if(setupArbiterAddress != arbiter) {
          setupArbiterAddress.value = arbiterAddress.substr(2);
        } else {
          setupArbiterAddress.placeholder = arbiter+'\'s address';
        }
      });
    });
  } else {
    loadAllContractsInternal(escrowAddress);
  }
  var contractSelection = document.getElementById("contractSelection");
  contractSelection.style.display = 'block';
}

window.welcome = welcome;
window.loadAllContracts = loadAllContracts;
window.setupParticipants = setupParticipants;
window.createNewContracts = createNewContracts;
window.endSetup = endSetup;


/***/ }),

/***/ "./src/modules/ethereum.js":
/*!*********************************!*\
  !*** ./src/modules/ethereum.js ***!
  \*********************************/
/*! exports provided: loadABI, registryPromise, lookupName, lookupAddress, shortenHash, shortenAddress, loadContract, contract, metamaskLoading, newContract, waitForReceipt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadABI", function() { return loadABI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registryPromise", function() { return registryPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupName", function() { return lookupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupAddress", function() { return lookupAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenHash", function() { return shortenHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenAddress", function() { return shortenAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContract", function() { return loadContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contract", function() { return contract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metamaskLoading", function() { return metamaskLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newContract", function() { return newContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForReceipt", function() { return waitForReceipt; });
const ROPSTEN_ETHERSCAN_URL= 'http://ropsten.etherscan.io';

let contracts = {};
let currentAccount = {};

let registry = {};
function registryPromise() {
  return loadJSON('./registry.json').then((data) => {
    if(data) {
      registry = data;
    } else {
      console.error("Unable to load registry");
    }
  });
}
registryPromise();

function loadABI(filename) {
  return loadJSON(filename);
}
  
function loadJSON(filename) {
  var request = new XMLHttpRequest();
  request.open('GET', '../assets/' + filename, true);
  request.send(null);
  return new Promise((resolve, reject) => {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (type.indexOf("text") !== 1) {
            resolve(JSON.parse(request.responseText));
            return;
          } else {
            console.error(request);
            reject("Unable to load file '" + filename + "'");
          }
        }
      }
    }
  });
}

function lookupAddress(address) {
  let result = address;
  if(registry[address]) {
    result = registry[address];
  };
  return result;
}

function lookupName(name) {
  let result = name;
  Object.keys(registry).forEach(key => {
    if(registry[key] == name) {
      result = key;
    }
  });

  return result;
}

function shortenHash(hash) {
  return hash.substring(0, 6) + '...' + hash.substring(hash.length-4, hash.length);
}

function shortenAddress(address, format) {
  let result = address;
  if(address && address.length == 42 && address.startsWith('0x')) {
    if(registry[address]) {
      result = registry[address];
    } else {
      result = address.substring(0, 6) + '...' + address.substring(42-4, 42);
    }

    if(format) {
      result = '<a href="'+ROPSTEN_ETHERSCAN_URL+'/address/'+address+'">' + result + '</a>';
    }
  }
  return result;
}

function loadContract(name, address) {
  return loadABI(name+'.json').then((contractABI) => {
    let contract = web3.eth.contract(contractABI.abi);
    let instance = contract.at(address);
    contracts[name] = {
      address: address,
      contract: contract,
      instance: instance
    };
    return contracts[name];
  });
}

function contract(name) {
  return contracts[name];
}

function newContract(name, parameters) {
  return loadABI(name+'.json').then((contractABI) => {
    console.log(contractABI);
    let contract = web3.eth.contract(contractABI.abi);
    console.log(contract);
    return new Promise((resolve, reject) => {
       contract.new(parameters, { data: contractABI.bytecode }, (error, data) => {
        if(data) {
          console.log(name+' creation...');
          console.log(data);
          if(data.address) {
            resolve(data);
          }
        } else {
          console.error(error);
          reject(error);
        }
      });
    });
  });
}

function waitForReceipt(hash) {
  return new Promise(function(resolve, reject) {
    let interval = 1000;
    let timeout = 100000;
    let timer = window.setInterval(() => {
      console.log('checking for tx '+hash);
      web3.eth.getTransactionReceipt(hash, function (error, receipt) {
        console.log('Receipt ' + receipt);
        if (error) {
          console.error(error);
          reject(error);
        }
        if (receipt !== null) {
          console.log('tx mined !');
          // Transaction went through
          window.clearInterval(timer);
          resolve(receipt);
        } else {
          timeout -= interval;
          if(timeout <= 0) {
            console.log('Timeout reached!');
            // timeout
            window.clearInterval(timer);
            reject(hash);
          }
        }
      });
    }, interval);
  });
}

let metamaskLoading = new Promise((resolve, reject) => {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      web3.eth.getAccounts((error, accounts) => {
        if (accounts && accounts.length > 0) {
          currentAccount.address = accounts[0];
          web3.eth.getBalance(accounts[0], (error, data) => {
            if (data) {
              currentAccount.balance = data;
              resolve(currentAccount);
            } else {
              console.error(error);
              reject(error);
            }
          });
        } else {
          console.info("Metamask is not yet enabled!");
          ethereum.enable().then((err, data) => {
            if(data) {
              console.log(data);
              resolve(data);
            } else {
              console.error(err);
              reject(data);
            }
          })
        }
      });
    }
    else {
      console.error('You need to install MetaMask!');
      reject();
    }
});




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uY3NzPzhiMGIiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3B1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzY3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ldGhlcmV1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNB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RTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7QUNoUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFaUsiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjV2dzsgXFxuICAgIGhlaWdodDogMTAwJTs7XFxuIH1cXG5cXG4jc2V0dXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmlucHV0Lm5hbWVJbnB1dC5mb3JtLWNvbnRyb2wge1xcbiAgICBmbGV4OiAxIDUgMTAwcHg7XFxufVxcblxcbmlucHV0LmFkZHJlc3NJbnB1dC5mb3JtLWNvbnRyb2wge1xcbiAgICBmbGV4OiA1IDEgYXV0bztcXG59XFxuXFxuI21ldGFtYXNrIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjI1dncpO1xcbiAgICBwYWRkaW5nOiA3NXB4IDEwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4jbWV0YW1hc2sgaW1nIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwcHggKyA0MHZ3KTtcXG59XFxuXFxuLnNldHVwQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA3NXB4IDEwcHggMTBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zcGFuLmZhLmZhLWNoZWNrLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNldHVwQ29udGFpbmVyIC5zcGlubmVyLWJvcmRlciB7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4jY29udHJhY3RTZWxlY3Rpb24gLnJvdyB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiNwYXJ0aWNpcGFudHNEZWZpbml0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRyYWN0U2V0dXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmF2UGFydGljaXBhbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmF2QXJiaXRyYXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXZQYXJ0aWNpcGFudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4ubmF2UGFydGljaXBhbnQgYSB7XFxuICAgIGNvbG9yOiAjZGJkYmZmO1xcbn1cXG5cXG4uc3RhdHVzUGFydGljaXBhbnQge1xcbiAgICBib3JkZXItbGVmdDogYmx1ZSBzb2xpZCAxcHg7ICAgIFxcbiAgICBib3JkZXItdG9wOiBibHVlIHNvbGlkIDFweDsgICAgXFxuICAgIGJvcmRlci1yaWdodDogZGFya2JsdWUgc29saWQgMXB4OyAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFya2JsdWUgc29saWQgMXB4OyAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ucGFydGljaXBhbnRUYWIuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmZmO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuLm5hdkFyYml0cmF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4ubmF2QXJiaXRyYXRvciBhIHtcXG4gICAgY29sb3I6ICNmZmRiZGI7XFxufVxcblxcbi50YWJsZSB0aCB7XFxuICAgZm9udC1zaXplOiAxLjh2dzsgXFxufVxcblxcbi50YWJsZSB0ZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZ2dztcXG59XFxuXFxuLnRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiAjZGJkYmZmO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmFtb3VudCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFyYml0cmF0aW9uIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZGJkYjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgLnRhYmxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgXFxuICAgICB9XFxuICB9XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxyXG5pbXBvcnQgeyBzaG9ydGVuQWRkcmVzcywgbG9hZFJlZ2lzdHJ5LCBsb29rdXBOYW1lLCBzaG9ydGVuSGFzaCwgY29udHJhY3QsIG1ldGFtYXNrTG9hZGluZyB9IGZyb20gJy4vbW9kdWxlcy9ldGhlcmV1bSc7XHJcbmltcG9ydCB7IHJlY292ZXJSZXNvbHV0aW9uSGFzaCwgbG9hZEFsbExvY2tlZERlcG9zaXRzIH0gZnJvbSAnLi9lc2Nyb3cnO1xyXG5cclxuY29uc3QgRU1QVFlfQUREUkVTUyA9ICcweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnO1xyXG5jb25zdCBFTVBUWV9IQVNIID0gJzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCc7XHJcblxyXG5sZXQgY3VycmVudFBhcnRpY2lwYW50ID0ge1xyXG4gIGFkZHJlc3M6ICcnLFxyXG4gIGJhbGFuY2U6IDAsXHJcbiAgZGlzcHV0ZXM6IFtdLFxyXG4gIGhpc3Rvcnk6IFtdLFxyXG4gIGlzQXJiaXRvcjogZmFsc2VcclxufTtcclxuXHJcbmxldCBsb2FkaW5nUHJvbWlzZTtcclxuZnVuY3Rpb24gYWZ0ZXJMb2FkaW5nKCkge1xyXG4gIGlmKCFsb2FkaW5nUHJvbWlzZSkge1xyXG4gICAgZGlzcHV0ZUluaXQoKTtcclxuICB9XHJcbiAgcmV0dXJuIGxvYWRpbmdQcm9taXNlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkTWV0YW1hc2soKSB7XHJcbiAgcmV0dXJuIG1ldGFtYXNrTG9hZGluZy50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICBpZihhY2NvdW50KSB7XHJcbiAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyYml0cmFnZUFkZHJlc3NcIikuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoYWNjb3VudC5hZGRyZXNzLCB0cnVlKTtcclxuICAgICAgbGV0IGJhbGFuY2UgPSB3ZWIzLmZyb21XZWkoYWNjb3VudC5iYWxhbmNlLCAnZXRoZXInKTtcclxuICAgICAgY3VycmVudFBhcnRpY2lwYW50LmJhbGFuY2UgPSBiYWxhbmNlLnJvdW5kKDMpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBcmJpdHJhZ2UoKSB7XHJcbiAgbGV0IGFyYml0cmFnZSA9IGNvbnRyYWN0KCdBcmJpdHJhZ2UnKS5pbnN0YW5jZTtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoWyBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBhcmJpdHJhZ2UuYXJiaXRyYXRvcnMoY3VycmVudFBhcnRpY2lwYW50LmFkZHJlc3MsIChlcnJvciwgaXNBcmJpdG9yKSA9PiB7XHJcbiAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5pc0FyYml0b3IgPSBpc0FyYml0b3I7XHJcbiAgICAgIHJlc29sdmUoaXNBcmJpdG9yKTtcclxuICAgIH0pXHJcbiAgfSksIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgbGV0IGV2ZW50cyA9IGFyYml0cmFnZS5hbGxFdmVudHMoeyBmcm9tQmxvY2s6IDQ5OTAwMDAsIHRvQmxvY2s6ICdsYXRlc3QnIH0pO1xyXG4gICAgZXZlbnRzLmdldChmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xyXG4gICAgICAgIGxldCByZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgbGV0IGRpc3B1dGVJdGVtcyA9IHsgfTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgbGV0IGRpc3B1dGVJZCA9IGV2ZW50LmFyZ3MuZGlzcHV0ZUlkO1xyXG4gICAgICAgICAgbGV0IGF1dGhvciA9IChldmVudC5hcmdzLmF1dGhvcikgPyBldmVudC5hcmdzLmF1dGhvciA6IGV2ZW50LmFyZ3MuY2xhaW1hbnQ7XHJcbiAgICAgICAgICBkaXNwdXRlSXRlbXNbZGlzcHV0ZUlkXSA9IHsgfVxyXG4gICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGJsb2NrOiBldmVudC5ibG9ja051bWJlcixcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25IYXNoOiBldmVudC50cmFuc2FjdGlvbkhhc2gsXHJcbiAgICAgICAgICAgIGV2ZW50OiBldmVudC5ldmVudCxcclxuICAgICAgICAgICAgZGlzcHV0ZUlkOiBldmVudC5hcmdzLmRpc3B1dGVJZCxcclxuICAgICAgICAgICAgYXV0aG9yOiBhdXRob3IsXHJcbiAgICAgICAgICAgIGNsYWltYW50OiBldmVudC5hcmdzLmNsYWltYW50LFxyXG4gICAgICAgICAgICBkZWZlbmRhbnQ6IGV2ZW50LmFyZ3MuZGVmZW5kYW50LFxyXG4gICAgICAgICAgICBhcmJpdHJhYmxlOiBldmVudC5hcmdzLmFyYml0cmFibGUsXHJcbiAgICAgICAgICAgIHJlc29sdXRpb25IYXNoOiBldmVudC5hcmdzLnJlc29sdXRpb25IYXNoLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGhpc3RvcnkucHVzaChpdGVtKTtcclxuICAgICAgICAgIHJlcXVlc3RzKys7XHJcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHdlYjMuZXRoLmdldEJsb2NrKGl0ZW0uYmxvY2ssIChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgaXRlbS50aW1lc3RhbXAgPSBkYXRhLnRpbWVzdGFtcCAqIDEwMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3RzLS07XHJcbiAgICAgICAgICAgIGlmKHJlcXVlc3RzID09IDApIHtcclxuICAgICAgICAgICAgICBjdXJyZW50UGFydGljaXBhbnQuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICAgICAgY3JlYXRlQXJiaXRyYWdlSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgIH0pXHJcbiAgfSksIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGFyYml0cmFnZS5kaXNwdXRlc0NvdW50KChlcnJvciwgZGlzcHV0ZXNDb3VudCkgPT4ge1xyXG4gICAgICBpZihkaXNwdXRlc0NvdW50ID4gMCkge1xyXG4gICAgICAgIGxldCBiYXRjaCA9IHdlYjMuY3JlYXRlQmF0Y2goKTtcclxuICAgICAgICBsZXQgYWN0aXZlRGlzcHV0ZUlkcyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGlzcHV0ZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgaWQgPSBpKzE7XHJcbiAgICAgICAgICBiYXRjaC5hZGQoYXJiaXRyYWdlLmRpc3B1dGVTdGF0dXMucmVxdWVzdChpZCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmVEaXNwdXRlSWRzW2lkLTFdID0gZGF0YTtcclxuICAgICAgICAgICAgaWYoYWN0aXZlRGlzcHV0ZUlkcy5sZW5ndGggPT0gZGlzcHV0ZXNDb3VudCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoYWN0aXZlRGlzcHV0ZUlkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmF0Y2guZXhlY3V0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmKCFlcnJvcikge1xyXG4gICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSkudGhlbigoYWN0aXZlRGlzcHV0ZUlkcykgPT4ge1xyXG4gICAgbGV0IGRpc3B1dGVzID0gW107XHJcbiAgICBsZXQgdW5yZXNvbHZlZCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGJhdGNoID0gd2ViMy5jcmVhdGVCYXRjaCgpO1xyXG4gICAgICBsZXQgcmVzb2x2ZUlmTG9hZGVkID0gKChkaXNwdXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcHV0ZS5yZXF1ZXN0LS07XHJcbiAgICAgICAgaWYoZGlzcHV0ZS5yZXF1ZXN0ID09IDApIHtcclxuICAgICAgICAgIHVucmVzb2x2ZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodW5yZXNvbHZlZCA9PSAwKSAge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhY3RpdmVEaXNwdXRlSWRzLmZvckVhY2goKHN0YXR1cywgaSkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICB1bnJlc29sdmVkKys7XHJcbiAgICAgICAgICBsZXQgZGlzcHV0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IGkrMSxcclxuICAgICAgICAgICAgcmVxdWVzdDogNVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGRpc3B1dGVzLnB1c2goZGlzcHV0ZSk7XHJcbiAgICAgICAgICBiYXRjaC5hZGQoYXJiaXRyYWdlLmRpc3B1dGVDbGFpbWFudC5yZXF1ZXN0KGRpc3B1dGUuaWQsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGlzcHV0ZS5jbGFpbWFudCA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJlc29sdmVJZkxvYWRlZChkaXNwdXRlKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIGJhdGNoLmFkZChhcmJpdHJhZ2UuZGlzcHV0ZUFyYml0cmFibGUucmVxdWVzdChkaXNwdXRlLmlkLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3B1dGUuYXJiaXRyYWJsZSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJlc29sdmVJZkxvYWRlZChkaXNwdXRlKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIGJhdGNoLmFkZChhcmJpdHJhZ2UuZGlzcHV0ZURlZmVuZGFudC5yZXF1ZXN0KGRpc3B1dGUuaWQsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGlzcHV0ZS5kZWZlbmRhbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICByZXNvbHZlSWZMb2FkZWQoZGlzcHV0ZSk7XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBiYXRjaC5hZGQoYXJiaXRyYWdlLmRpc3B1dGVSYWlzZWRBdC5yZXF1ZXN0KGRpc3B1dGUuaWQsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGlzcHV0ZS5yYWlzZWRBdCA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJlc29sdmVJZkxvYWRlZChkaXNwdXRlKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIGJhdGNoLmFkZChhcmJpdHJhZ2UuZGlzcHV0ZVJlc29sdXRpb25IYXNoLnJlcXVlc3QoZGlzcHV0ZS5pZCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwdXRlLnJlc29sdXRpb25IYXNoID0gZGF0YTtcclxuICAgICAgICAgICAgcmVzb2x2ZUlmTG9hZGVkKGRpc3B1dGUpO1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmKHVucmVzb2x2ZWQgPiAwKSB7XHJcbiAgICAgICAgYmF0Y2guZXhlY3V0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUoKTsgIFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY3VycmVudFBhcnRpY2lwYW50LmRpc3B1dGVzID0gZGlzcHV0ZXM7XHJcbiAgICAgIGNyZWF0ZUFyYml0cmFhZ2VUb0RvTGlzdCgpO1xyXG4gICAgfSlcclxuICB9KSBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXJiaXRyYWFnZVRvRG9MaXN0KCkge1xyXG4gIHZhciB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG5cclxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIGlmKGN1cnJlbnRQYXJ0aWNpcGFudC5pc0FyYml0b3IpIHtcclxuICAgIGxldCBhZGRyZXNzZXMgPSBbXTtcclxuICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5kaXNwdXRlcy5mb3JFYWNoKGRpc3B1dGUgPT4ge1xyXG4gICAgICBpZihhZGRyZXNzZXMuaW5kZXhPZihkaXNwdXRlLmNsYWltYW50KSA9PSAtMSkge1xyXG4gICAgICAgIGFkZHJlc3Nlcy5wdXNoKGRpc3B1dGUuY2xhaW1hbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGFkZHJlc3Nlcy5pbmRleE9mKGRpc3B1dGUuZGVmZW5kYW50KSA9PSAtMSkge1xyXG4gICAgICAgIGFkZHJlc3Nlcy5wdXNoKGRpc3B1dGUuZGVmZW5kYW50KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHByb21pc2UgPSBsb2FkQWxsTG9ja2VkRGVwb3NpdHMoYWRkcmVzc2VzKTtcclxuICB9XHJcblxyXG4gIHByb21pc2UudGhlbigoYWxsTG9ja2VkRGVwb3NpdHMpID0+IHtcclxuICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5kaXNwdXRlcy5mb3JFYWNoKChkaXNwdXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICBcclxuICAgICAgLy8gaWRcclxuICAgICAgdmFyIGNlbGxJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIGNlbGxJZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkaXNwdXRlLmlkKSk7XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsSWQpO1xyXG4gIFxyXG4gICAgICAvLyBBcmJpdHJhYmxlXHJcbiAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgaWYoZGlzcHV0ZS5hcmJpdHJhYmxlICE9IEVNUFRZX0FERFJFU1MpICB7XHJcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmFyYml0cmFibGUsIHRydWUpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICdOb3QgRW5mb3JjZWFibGUnO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBDbGFpbW1hbnRcclxuICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjZWxsLmlubmVySFRNTCA9IHNob3J0ZW5BZGRyZXNzKGRpc3B1dGUuY2xhaW1hbnQsIHRydWUpO1xyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgXHJcbiAgICAgIC8vIERlZmVuZGFudFxyXG4gICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoZGlzcHV0ZS5kZWZlbmRhbnQsIHRydWUpO1xyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgXHJcbiAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgaWYoY3VycmVudFBhcnRpY2lwYW50LmlzQXJiaXRvciB8fCBjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcyA9PSBkaXNwdXRlLmNsYWltYW50IHx8IGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzID09IGRpc3B1dGUuZGVmZW5kYW50KSB7XHJcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIiBvbmNsaWNrPVwic2hvd0Rpc3B1dGVGb3JtKFxcJ3N1Z2dlc3RSZXNvbHV0aW9uXFwnLCcraW5kZXgrJylcIj48c3BhbiBjbGFzcz1cImZhIGZhLWZpbGVcIj48L3NwYW4+IFN1Z2dlc3Q8L2J1dHRvbj4nO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKGN1cnJlbnRQYXJ0aWNpcGFudC5pc0FyYml0b3IgfHwgY3VycmVudFBhcnRpY2lwYW50LmFkZHJlc3MgPT0gZGlzcHV0ZS5jbGFpbWFudCkge1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MICs9ICcgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIG9uY2xpY2s9XCJzaG93RGlzcHV0ZUZvcm0oXFwnY2xvc2VEaXNwdXRlXFwnLCAnK2luZGV4KycpXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvc3Bhbj4gQ2xvc2U8L2J1dHRvbj4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgXHJcbiAgICAgIGlmKGRpc3B1dGUucmVzb2x1dGlvbkhhc2ggIT0gRU1QVFlfSEFTSCkge1xyXG4gICAgICAgIGNlbGxJZC5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG4gIFxyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gIFxyXG4gICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsLmlkID0gJ3JlY292ZXJlZENlbGwnO1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcclxuICAgICAgICByZWNvdmVyUmVzb2x1dGlvbkhhc2goYWxsTG9ja2VkRGVwb3NpdHMsIGRpc3B1dGUsIGRpc3B1dGUucmVzb2x1dGlvbkhhc2gpLnRoZW4oKHJlY292ZXJlZCkgPT4ge1xyXG4gICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb3ZlcmVkQ2VsbCcpO1xyXG4gICAgICAgICAgaWYocmVjb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSB3ZWIzLmZyb21XZWkocmVjb3ZlcmVkLmFtb3VudCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgICAgIGlmKHJlY292ZXJlZC5tZXRob2QgPT0gJ3JlbGVhc2UnKSB7XHJcbiAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnPGI+UmVzb2x1dGlvbjwvYj4gdG8gcmVsZWFzZSAnICsgYW1vdW50ICsgJyBFVEggIHRvICcgKyBzaG9ydGVuQWRkcmVzcyhyZWNvdmVyZWQucGF5ZWUsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJzxiPlJlc29sdXRpb248L2I+IHRvIHJldmVydCAnICsgYW1vdW50ICsgJyBFVEggYmFjayB0byAnICsgc2hvcnRlbkFkZHJlc3MocmVjb3ZlcmVkLnBheWVyLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnUmVzb2x1dGlvbiBIYXNoICcgKyBzaG9ydGVuSGFzaChkaXNwdXRlLnJlc29sdXRpb25IYXNoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGlzcHV0ZS5pZCkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25jbGljaz1cInNob3dEaXNwdXRlRm9ybShcXCdyZXNvbHZlRGlzcHV0ZVxcJywgJytpbmRleCsnKVwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZ2F2ZWxcIj48L3NwYW4+IFJlc29sdmU8L2J1dHRvbj4nO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCI1XCIpO1xyXG4gICAgY2VsbC5pbm5lckhUTUwgPSAnPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiBvbmNsaWNrPVwic2hvd0Rpc3B1dGVGb3JtKFxcJ3JhaXNlRGlzcHV0ZVxcJywgMClcIj5SYWlzZSBkaXNwdXRlIDxzcGFuIGNsYXNzPVwiZmEgZmEtZmxhZ1wiPjwvc3Bhbj48L2J1dHRvbj4nO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyYml0cmFnZVRvRG9Cb2R5XCIpLmlubmVySFRNTCA9IHRhYmxlQm9keS5pbm5lckhUTUw7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFyYml0cmFnZUhpc3RvcnkoKSB7XHJcbiAgdmFyIHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcblxyXG4gIGN1cnJlbnRQYXJ0aWNpcGFudC5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICAvLyBEYXRlXHJcbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnRpbWVzdGFtcCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGUpKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuXHJcbiAgICAvLyBJZFxyXG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShldmVudC5kaXNwdXRlSWQpKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuXHJcbiAgICAvLyBFdmVudFxyXG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgbGV0IGV2ZW50TmFtZSA9ICctJztcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9ICctJztcclxuICAgIHN3aXRjaCAoZXZlbnQuZXZlbnQpIHtcclxuICAgICAgY2FzZSAnRGlzcHV0ZVJhaXNlZCc6XHJcbiAgICAgICAgZXZlbnROYW1lID0gJ1JhaXNlZCc7XHJcbiAgICAgICAgaWYoZXZlbnQuYXJiaXRyYWJsZSAhPSAnMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJykge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSAnb24gY29udHJhY3QgJytzaG9ydGVuQWRkcmVzcyhldmVudC5hcmJpdHJhYmxlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Rpc3B1dGVDbG9zZWQnOlxyXG4gICAgICAgIGV2ZW50TmFtZSA9ICdDbG9zZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdEaXNwdXRlUmVzb2x1dGlvblN1Z2dlc3RlZCc6XHJcbiAgICAgICAgZXZlbnROYW1lID0gJ1N1Z2dlc3Rpb24nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdEaXNwdXRlUmVzb2x2ZWQnOlxyXG4gICAgICAgIGV2ZW50TmFtZSA9ICdSZXNvbHV0aW9uJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlzcHV0ZUludGVycnVwdGVkJzpcclxuICAgICAgICBldmVudE5hbWUgPSAnSW50ZXJydXB0aW9uJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlzcHV0ZVJlc3VtZWQnOlxyXG4gICAgICAgIGV2ZW50TmFtZSA9ICdSZXN1bWVkJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXZlbnROYW1lKSk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcblxyXG4gICAgLy8gQXV0aG9yXHJcbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBpZiAoZXZlbnQuYXV0aG9yKSB7XHJcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoZXZlbnQuYXV0aG9yLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gJy0nO1xyXG4gICAgfVxyXG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cclxuICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cclxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJiaXRyYWdlSGlzdG9yeUJvZHlcIikuaW5uZXJIVE1MID0gdGFibGVCb2R5LmlubmVySFRNTDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVBbGxEaXNwdXRlRm9ybXMoKSB7XHJcbiAgdmFyIGRlcG9zaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWlzZURpc3B1dGVGb3JtXCIpO1xyXG4gIGRlcG9zaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgdmFyIHJlbGVhc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZURpc3B1dGVGb3JtXCIpO1xyXG4gIHJlbGVhc2VGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgdmFyIGRpc3B1dGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWdnZXN0UmVzb2x1dGlvbkZvcm1cIik7XHJcbiAgZGlzcHV0ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICB2YXIgZGlzcHV0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc29sdmVEaXNwdXRlRm9ybVwiKTtcclxuICBkaXNwdXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gIHZhciBkZXBvc2l0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlRGlzcHV0ZXNcIik7XHJcbiAgZGVwb3NpdHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgdmFyIGRlcG9zaXRzSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcHV0ZUhpc3RvcnlcIik7XHJcbiAgZGVwb3NpdHNIaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Rpc3B1dGVGb3JtKG5hbWUsIGluZGV4KSB7XHJcbiAgY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkQWN0aW9uID0gbmFtZTtcclxuICBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWREaXNwdXRlID0gaW5kZXg7XHJcblxyXG4gIHZhciBhY3RpdmVEaXNwdXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlRGlzcHV0ZXNcIik7XHJcbiAgYWN0aXZlRGlzcHV0ZXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICB2YXIgZGlzcHV0ZUhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3B1dGVIaXN0b3J5XCIpO1xyXG4gIGRpc3B1dGVIaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgdmFyIGRpc3B1dGUgPSBjdXJyZW50UGFydGljaXBhbnQuZGlzcHV0ZXNbaW5kZXhdO1xyXG5cclxuICBzd2l0Y2gobmFtZSkge1xyXG4gICAgY2FzZSBcInJhaXNlRGlzcHV0ZVwiOlxyXG4gICAgICB2YXIgcmFpc2VEaXNwdXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFpc2VEaXNwdXRlRm9ybVwiKTtcclxuICAgICAgcmFpc2VEaXNwdXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJzdWdnZXN0UmVzb2x1dGlvblwiOlxyXG4gICAgICB2YXIgc3VnZ2VzdERpc3B1dGVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VnZ2VzdERpc3B1dGVJZFwiKTtcclxuICAgICAgc3VnZ2VzdERpc3B1dGVJZC5pbm5lckhUTUwgPSBkaXNwdXRlLmlkO1xyXG5cclxuICAgICAgdmFyIHN1Z2dlc3RSZXNvbHV0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VnZ2VzdFJlc29sdXRpb25Gb3JtXCIpO1xyXG4gICAgICBzdWdnZXN0UmVzb2x1dGlvbkZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIHZhciBzdWdnZXN0QXJiaXRyYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VnZ2VzdEFyYml0cmFibGVcIik7XHJcbiAgICAgIHN1Z2dlc3RBcmJpdHJhYmxlLmlubmVySFRNTCA9IHNob3J0ZW5BZGRyZXNzKGRpc3B1dGUuYXJiaXRyYWJsZSwgdHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgc3VnZ2VzdENsYWltYW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWdnZXN0Q2xhaW1hbnRcIik7XHJcbiAgICAgIHN1Z2dlc3RDbGFpbWFudC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmNsYWltYW50LCB0cnVlKTtcclxuXHJcbiAgICAgIHZhciBzdWdnZXN0RGVmZW5kYW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWdnZXN0RGVmZW5kYW50XCIpO1xyXG4gICAgICBzdWdnZXN0RGVmZW5kYW50LmlubmVySFRNTCA9IHNob3J0ZW5BZGRyZXNzKGRpc3B1dGUuZGVmZW5kYW50LCB0cnVlKTtcclxuXHJcbiAgICAgIHZhciBzdWdnZXN0UmVzb2x1dGlvbkhhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Z2dlc3RSZXNvbHV0aW9uSGFzaFwiKTtcclxuICAgICAgaWYgKGRpc3B1dGUucmVzb2x1dGlvbkhhc2guc3RhcnRzV2l0aCgnMHgnKSkge1xyXG4gICAgICAgIHN1Z2dlc3RSZXNvbHV0aW9uSGFzaC52YWx1ZSA9IGRpc3B1dGUucmVzb2x1dGlvbkhhc2guc3Vic3RyaW5nKDIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1Z2dlc3RSZXNvbHV0aW9uSGFzaC52YWx1ZSA9IGRpc3B1dGUucmVzb2x1dGlvbkhhc2g7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY2xvc2VEaXNwdXRlXCI6XHJcbiAgICAgIHZhciBjbG9zZURpc3B1dGVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VEaXNwdXRlSWRcIik7XHJcbiAgICAgIGNsb3NlRGlzcHV0ZUlkLmlubmVySFRNTCA9IGRpc3B1dGUuaWQ7XHJcblxyXG4gICAgICB2YXIgY2xvc2VBcmJpdHJhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZUFyYml0cmFibGVcIik7XHJcbiAgICAgIGNsb3NlQXJiaXRyYWJsZS5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmFyYml0cmFibGUsIHRydWUpO1xyXG5cclxuICAgICAgdmFyIGNsb3NlQ2xhaW1hbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlQ2xhaW1hbnRcIik7XHJcbiAgICAgIGNsb3NlQ2xhaW1hbnQuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoZGlzcHV0ZS5jbGFpbWFudCwgdHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgY2xvc2VEZWZlbmRhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRGVmZW5kYW50XCIpO1xyXG4gICAgICBjbG9zZURlZmVuZGFudC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmRlZmVuZGFudCwgdHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgY2xvc2VEaXNwdXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VEaXNwdXRlRm9ybVwiKTtcclxuICAgICAgY2xvc2VEaXNwdXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJyZXNvbHZlRGlzcHV0ZVwiOlxyXG4gICAgICB2YXIgY2xvc2VEaXNwdXRlSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc29sdmVEaXNwdXRlSWRcIik7XHJcbiAgICAgIGNsb3NlRGlzcHV0ZUlkLmlubmVySFRNTCA9IGRpc3B1dGUuaWQ7XHJcblxyXG4gICAgICB2YXIgcmVzb2x2ZUFyYml0cmFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc29sdmVBcmJpdHJhYmxlXCIpO1xyXG4gICAgICByZXNvbHZlQXJiaXRyYWJsZS5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmFyYml0cmFibGUsIHRydWUpO1xyXG5cclxuICAgICAgdmFyIHJlc29sdmVDbGFpbWFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzb2x2ZUNsYWltYW50XCIpO1xyXG4gICAgICByZXNvbHZlQ2xhaW1hbnQuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoZGlzcHV0ZS5jbGFpbWFudCwgdHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgcmVzb2x2ZURlZmVuZGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzb2x2ZURlZmVuZGFudFwiKTtcclxuICAgICAgcmVzb2x2ZURlZmVuZGFudC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhkaXNwdXRlLmRlZmVuZGFudCwgdHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgcmVzb2x2ZVJzb2x1dGlvbkhhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc29sdmVSZXNvbHV0aW9uSGFzaFwiKTtcclxuICAgICAgaWYgKGRpc3B1dGUucmVzb2x1dGlvbkhhc2guc3RhcnRzV2l0aCgnMHgnKSkge1xyXG4gICAgICAgIHJlc29sdmVSc29sdXRpb25IYXNoLnZhbHVlID0gZGlzcHV0ZS5yZXNvbHV0aW9uSGFzaC5zdWJzdHJpbmcoMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZVJzb2x1dGlvbkhhc2gudmFsdWUgPSBkaXNwdXRlLnJlc29sdXRpb25IYXNoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcmVzb2x2ZURpc3B1dGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNvbHZlRGlzcHV0ZUZvcm1cIik7XHJcbiAgICAgIHJlc29sdmVEaXNwdXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3Rpb25SYWlzZURpc3B1dGUoKSB7XHJcbiAgbGV0IGFyYml0cmFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFyYml0cmFibGVcIikudmFsdWU7XHJcbiAgbGV0IGRlZmVuZGFudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmZW5kYW50XCIpLnZhbHVlO1xyXG4gIGxldCByZWFzb25IYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwdXRlUmVhc29uSGFzaFwiKS5pbm5lckhUTUw7XHJcbiAgbGV0IHJlc29sdXRpb25IYXNoID0gd2ViMy5zaGEzKCcnKTtcclxuICBsZXQgYXJiaXRyYWdlID0gY29udHJhY3QoJ0FyYml0cmFnZScpLmluc3RhbmNlO1xyXG5cclxuICBpZihhcmJpdHJhYmxlKSB7XHJcbiAgICBpZighYXJiaXRyYWJsZS5zdGFydHNXaXRoKCcweCcpKSB7XHJcbiAgICAgIGFyYml0cmFibGUgPSBsb29rdXBOYW1lKGFyYml0cmFibGUpO1xyXG4gICAgfVxyXG4gICAgaWYoYXJiaXRyYWJsZS5sZW5ndGggPT0gNDApIHtcclxuICAgICAgYXJiaXRyYWJsZSA9ICcweCcgKyBhcmJpdHJhYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoZGVmZW5kYW50KSB7XHJcbiAgICBpZighZGVmZW5kYW50LnN0YXJ0c1dpdGgoJzB4JykpIHtcclxuICAgICAgZGVmZW5kYW50ID0gbG9va3VwTmFtZShkZWZlbmRhbnQpO1xyXG4gICAgfVxyXG4gICAgaWYoZGVmZW5kYW50Lmxlbmd0aCA9PSA0MCkge1xyXG4gICAgICBkZWZlbmRhbnQgPSAnMHgnICsgZGVmZW5kYW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGFyYml0cmFibGVWYWxpZCA9IGFyYml0cmFibGUubGVuZ3RoID09IDQyICYmIGFyYml0cmFibGUuc3RhcnRzV2l0aCgnMHgnKTtcclxuICBsZXQgZGVmZW5kYW50VmFsaWQgPSBkZWZlbmRhbnQubGVuZ3RoID09IDQyICYmIGRlZmVuZGFudC5zdGFydHNXaXRoKCcweCcpO1xyXG4gIGxldCByZWFzb25IYXNoVmFsaWQgPSByZWFzb25IYXNoLmxlbmd0aCA9PSA2NiAmJiByZWFzb25IYXNoLnN0YXJ0c1dpdGgoJzB4Jyk7XHJcblxyXG4gIGlmIChhcmJpdHJhYmxlVmFsaWQgJiYgZGVmZW5kYW50VmFsaWQgJiYgcmVhc29uSGFzaFZhbGlkKSB7XHJcbiAgICBhcmJpdHJhZ2UucmFpc2VEaXNwdXRlKGFyYml0cmFibGUsIGRlZmVuZGFudCwgcmVhc29uSGFzaCwgcmVzb2x1dGlvbkhhc2gsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBoaWRlQWxsRGlzcHV0ZUZvcm1zKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2UgIHsgICAgXHJcbiAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIChkZXBvc2l0VG89XCIrZGVwb3NpdFRvVmFsaWQrXCIsIGFtb3VudD1cIithbW91bnRWYWxpZCtcIilcIik7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aW9uU3VnZ2VzdFJlc29sdXRpb24oKSB7XHJcbiAgdmFyIGRpc3B1dGUgPSBjdXJyZW50UGFydGljaXBhbnQuZGlzcHV0ZXNbY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkRGlzcHV0ZV07XHJcbiAgbGV0IGFyYml0cmFnZSA9IGNvbnRyYWN0KCdBcmJpdHJhZ2UnKS5pbnN0YW5jZTtcclxuICBcclxuICBsZXQgcmVzb2x1dGlvbkhhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Z2dlc3RSZXNvbHV0aW9uSGFzaFwiKS52YWx1ZTtcclxuICBpZihyZXNvbHV0aW9uSGFzaCkge1xyXG4gICAgaWYoIXJlc29sdXRpb25IYXNoLnN0YXJ0c1dpdGgoJzB4JykpIHtcclxuICAgICAgcmVzb2x1dGlvbkhhc2ggPSBsb29rdXBOYW1lKHJlc29sdXRpb25IYXNoKTtcclxuICAgIH1cclxuICAgIGlmKHJlc29sdXRpb25IYXNoLmxlbmd0aCA9PSA2NCkge1xyXG4gICAgICByZXNvbHV0aW9uSGFzaCA9ICcweCcgKyByZXNvbHV0aW9uSGFzaDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCByZXNvbHV0aW9uSGFzaFZhbGlkID0gcmVzb2x1dGlvbkhhc2gubGVuZ3RoID09IDY2ICYmIHJlc29sdXRpb25IYXNoLnN0YXJ0c1dpdGgoJzB4Jyk7XHJcblxyXG4gIGlmIChyZXNvbHV0aW9uSGFzaFZhbGlkKSB7XHJcbiAgICBhcmJpdHJhZ2Uuc3VnZ2VzdERpc3B1dGVSZXNvbHV0aW9uKGRpc3B1dGUuaWQsIHJlc29sdXRpb25IYXNoLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgIGlmKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBoaWRlQWxsRGlzcHV0ZUZvcm1zKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJzIChyZXNvbHV0aW9uSGFzaDogXCIrcmVzb2x1dGlvbkhhc2hWYWxpZCtcIilcIik7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aW9uQ2xvc2VEaXNwdXRlKCkge1xyXG4gIHZhciBkaXNwdXRlID0gY3VycmVudFBhcnRpY2lwYW50LmRpc3B1dGVzW2N1cnJlbnRQYXJ0aWNpcGFudC5zZWxlY3RlZERpc3B1dGVdO1xyXG4gIGxldCBhcmJpdHJhZ2UgPSBjb250cmFjdCgnQXJiaXRyYWdlJykuaW5zdGFuY2U7XHJcblxyXG4gIGFyYml0cmFnZS5jbG9zZURpc3B1dGUoZGlzcHV0ZS5pZCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgaWYoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaGlkZUFsbERpc3B1dGVGb3JtcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aW9uUmVzb2x2ZURpc3B1dGUoKSB7XHJcbiAgdmFyIGRpc3B1dGUgPSBjdXJyZW50UGFydGljaXBhbnQuZGlzcHV0ZXNbY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkRGlzcHV0ZV07XHJcbiAgbGV0IGFyYml0cmFnZSA9IGNvbnRyYWN0KCdBcmJpdHJhZ2UnKS5pbnN0YW5jZTtcclxuXHJcbiAgbGV0IHJlc29sdXRpb25IYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNvbHZlUmVzb2x1dGlvbkhhc2hcIikudmFsdWU7XHJcbiAgaWYocmVzb2x1dGlvbkhhc2gpIHtcclxuICAgIGlmKHJlc29sdXRpb25IYXNoLmxlbmd0aCA9PSA2NCkge1xyXG4gICAgICByZXNvbHV0aW9uSGFzaCA9ICcweCcgKyByZXNvbHV0aW9uSGFzaDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFyYml0cmFnZS5yZXNvbHZlRGlzcHV0ZShkaXNwdXRlLmlkLCByZXNvbHV0aW9uSGFzaCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgaWYoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaGlkZUFsbERpc3B1dGVGb3JtcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpc0Rpc3B1dGVPcGVuQmV0d2VlbihhZGRyZXNzQSwgYWRkcmVzc0IpIHtcclxuICByZXR1cm4gYWZ0ZXJMb2FkaW5nKCkudGhlbigoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBjdXJyZW50UGFydGljaXBhbnQuZGlzcHV0ZXMuZm9yRWFjaCgoZGlzcHV0ZSkgPT4ge1xyXG4gICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICB8fCAoZGlzcHV0ZS5jbGFpbWFudCA9PSBhZGRyZXNzQSAmJiBkaXNwdXRlLmRlZmVuZGFudCA9PSBhZGRyZXNzQilcclxuICAgICAgICB8fCAoZGlzcHV0ZS5jbGFpbWFudCA9PSBhZGRyZXNzQiAmJiBkaXNwdXRlLmRlZmVuZGFudCA9PSBhZGRyZXNzQSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3B1dGVJbml0KCkge1xyXG4gIGlmKHdpbmRvdy5ldGhlcmV1bSAmJiAhbG9hZGluZ1Byb21pc2UpIHtcclxuICAgIGxvYWRpbmdQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgZGlzcHV0ZS4uLicpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRNZXRhbWFzaygpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRBcmJpdHJhZ2UoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBkaXNwdXRlLi4uJyk7XHJcbiAgICAgICAgICBhd2FpdCBsb2FkTWV0YW1hc2soKTtcclxuICAgICAgICAgIGF3YWl0IGxvYWRBcmJpdHJhZ2UoKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBsb2FkaW5nUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgaWYoY3VycmVudFBhcnRpY2lwYW50LmlzQXJiaXRvcikge1xyXG4gICAgICAgIHZhciBuYXZBcmJpdHJhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkFyYml0cmF0b3InKTtcclxuICAgICAgICBuYXZBcmJpdHJhdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIHBhcnRpY2lwYW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcnRpY2lwYW50Jyk7XHJcbiAgICAgICAgcGFydGljaXBhbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIHBhcnRpY2lwYW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIGFyYml0cmFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcmJpdHJhZ2UnKTtcclxuICAgICAgICBhcmJpdHJhZ2VUYWIuY2xhc3NMaXN0LmFkZChcInNob3dcIiwgXCJhY3RpdmVcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgbmF2UGFydGljaXBhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2UGFydGljaXBhbnQnKTtcclxuICAgICAgICBuYXZQYXJ0aWNpcGFudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBcclxuICAgICAgICB2YXIgcGFydGljaXBhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnQnKTtcclxuICAgICAgICBwYXJ0aWNpcGFudC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiLCBcImFjdGl2ZVwiKVxyXG4gIFxyXG4gICAgICAgIHZhciBhcmJpdHJhZ2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJiaXRyYWdlJyk7XHJcbiAgICAgICAgYXJiaXRyYWdlVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBhcmJpdHJhZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYXJ0aWNpcGFudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcmJpdHJhZ2UgbG9hZGluZyBmaW5pc2hlZCFcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxvYWRpbmdQcm9taXNlO1xyXG59XHJcblxyXG53aW5kb3cuc2hvd0Rpc3B1dGVGb3JtID0gc2hvd0Rpc3B1dGVGb3JtO1xyXG53aW5kb3cuaGlkZUFsbERpc3B1dGVGb3JtcyA9IGhpZGVBbGxEaXNwdXRlRm9ybXM7XHJcbndpbmRvdy5hY3Rpb25SYWlzZURpc3B1dGUgPSBhY3Rpb25SYWlzZURpc3B1dGU7XHJcbndpbmRvdy5hY3Rpb25TdWdnZXN0UmVzb2x1dGlvbiA9IGFjdGlvblN1Z2dlc3RSZXNvbHV0aW9uO1xyXG53aW5kb3cuYWN0aW9uQ2xvc2VEaXNwdXRlID0gYWN0aW9uQ2xvc2VEaXNwdXRlO1xyXG53aW5kb3cuYWN0aW9uUmVzb2x2ZURpc3B1dGUgPSBhY3Rpb25SZXNvbHZlRGlzcHV0ZTtcclxud2luZG93LmRpc3B1dGVMb2FkZWQgPSB0cnVlO1xyXG5cclxuZXhwb3J0IHsgaXNEaXNwdXRlT3BlbkJldHdlZW4sIGRpc3B1dGVJbml0IH07XHJcbiIsIlxuaW1wb3J0IHsgbG9hZFJlZ2lzdHJ5LCBsb29rdXBOYW1lLCBzaG9ydGVuQWRkcmVzcywgY29udHJhY3QsIG1ldGFtYXNrTG9hZGluZyB9IGZyb20gJy4vbW9kdWxlcy9ldGhlcmV1bSc7XG5pbXBvcnQgeyBpc0Rpc3B1dGVPcGVuQmV0d2VlbiB9IGZyb20gJy4vZGlzcHV0ZSc7XG5cbmNvbnN0IEVNUFRZX0hBU0ggPSAnMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJztcblxubGV0IGN1cnJlbnRQYXJ0aWNpcGFudCA9IHtcbiAgYWRkcmVzczogJycsIFxuICBiYWxhbmNlOiAwLFxuICB3aXRoZHJhd2FibGU6IDAsXG4gIGxvY2tlZERlcG9zaXRzOiBbXSxcbiAgc2VsZWN0ZWREZXBvc2l0OiAwLFxuICBzZWxlY3RlZEFjdGlvbjogJycsXG4gIHNlbGVjdGVkQW1vdW50OiAwLFxuICBoaXN0b3J5OiBbXSxcbn07XG5cbmxldCBsb2FkaW5nUHJvbWlzZTtcblxuZnVuY3Rpb24gbG9hZE1ldGFtYXNrKCkge1xuICByZXR1cm4gbWV0YW1hc2tMb2FkaW5nLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICBpZihhY2NvdW50KSB7XG4gICAgICBjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcyA9IGFjY291bnQuYWRkcmVzcztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzc1wiKS5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhhY2NvdW50LmFkZHJlc3MsIHRydWUpO1xuICAgICAgbGV0IGJhbGFuY2UgPSB3ZWIzLmZyb21XZWkoYWNjb3VudC5iYWxhbmNlLCAnZXRoZXInKTtcbiAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5iYWxhbmNlID0gYmFsYW5jZS5yb3VuZCgzKS50b1N0cmluZygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRFc2Nyb3coKSB7XG4gIGxldCBlc2Nyb3cgPSBjb250cmFjdCgnRXNjcm93JykuaW5zdGFuY2U7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGV2ZW50cyA9IGVzY3Jvdy5hbGxFdmVudHMoeyBmcm9tQmxvY2s6IDQ5OTAwMDAsIHRvQmxvY2s6ICdsYXRlc3QnIH0pO1xuICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgIGV2ZW50cy5nZXQoZnVuY3Rpb24oZXJyb3IsIGRhdGEpIHtcbiAgICAgIGlmKCFlcnJvcikge1xuICAgICAgICBsZXQgbG9ja2VkQWRkcmVzc2VzID0gW107XG4gICAgICAgIGxldCBoaXN0b3J5ID0gW107XG4gICAgICAgIGRhdGEuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgbGV0IGZyb20gPSBldmVudC5hcmdzLmZyb207XG4gICAgICAgICAgaWYoIWV2ZW50LmFyZ3MuZnJvbSAmJiBldmVudC5hcmdzLmJ5KSB7XG4gICAgICAgICAgICBmcm9tID0gZXZlbnQuYXJncy5ieTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgIGJsb2NrOiBldmVudC5ibG9ja051bWJlcixcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSGFzaDogZXZlbnQudHJhbnNhY3Rpb25IYXNoLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LmV2ZW50LFxuICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIHRvOiBldmVudC5hcmdzLnBheWVlLFxuICAgICAgICAgICAgYW1vdW50OiBldmVudC5hcmdzLndlaUFtb3VudCxcbiAgICAgICAgICAgIGRpc3B1dGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQgPT0gJ0RlcG9zaXRBZGRlZCdcbiAgICAgICAgICAgICYmIGxvY2tlZEFkZHJlc3Nlcy5pbmRleE9mKGV2ZW50LmFyZ3MucGF5ZWUpID09IC0xKSB7XG4gICAgICAgICAgICBsb2NrZWRBZGRyZXNzZXMucHVzaChldmVudC5hcmdzLnBheWVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFBhcnRpY2lwYW50Lmhpc3RvcnkgPSBoaXN0b3J5LnNvcnQoIChhLCBiKSA9PiAoYi5ibG9jayAtIGEuYmxvY2spKTtcbiAgICAgICAgaWYobG9ja2VkQWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKGxvYWRMb2NrZWREZXBvc2l0cyhjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcywgbG9ja2VkQWRkcmVzc2VzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudC5sb2NrZWREZXBvc2l0cyA9IHJlc3VsdDtcbiAgICAgICAgICAgIGxldCBwcm9taXNlc0xvY2tlZERlcG9zaXRzID0gW107XG4gICAgICAgICAgICBjdXJyZW50UGFydGljaXBhbnQubG9ja2VkRGVwb3NpdHMuZm9yRWFjaCgoZGVwb3NpdCkgPT4ge1xuICAgICAgICAgICAgICBwcm9taXNlc0xvY2tlZERlcG9zaXRzLnB1c2goaXNEaXNwdXRlT3BlbkJldHdlZW4oY3VycmVudFBhcnRpY2lwYW50LmFkZHJlc3MsIGRlcG9zaXQuYWRkcmVzcykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGRlcG9zaXQuZGlzcHV0ZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXNMb2NrZWREZXBvc2l0cykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNyZWF0ZVRvZG9MaXN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcXVlc3RzID0gY3VycmVudFBhcnRpY2lwYW50Lmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICBjdXJyZW50UGFydGljaXBhbnQuaGlzdG9yeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh3ZWIzLmV0aC5nZXRCbG9jayhpdGVtLmJsb2NrLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgICAgaXRlbS50aW1lc3RhbXAgPSBkYXRhLnRpbWVzdGFtcCAqIDEwMDA7XG4gICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0cy0tO1xuICAgICAgICAgICAgaWYocmVxdWVzdHMgPT0gMCkge1xuICAgICAgICAgICAgICBjcmVhdGVFc2Nyb3dIaXN0b3J5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGlmKGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzKSB7XG4gICAgICBlc2Nyb3cuZGVwb3NpdFJlbGVhc2VkKGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY3VycmVudFBhcnRpY2lwYW50LndpdGhkcmF3YWJsZSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxMb2NrZWREZXBvc2l0cyhsb2NrZWRSZWNpcGllbnRzKSB7XG4gIGxldCBwcm9taXNlcyA9IFtdO1xuICBsb2NrZWRSZWNpcGllbnRzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICBsZXQgYWRkcmVzc2VzID0gbG9ja2VkUmVjaXBpZW50cy5maWx0ZXIoeCA9PiB4ICE9IGFkZHJlc3MpO1xuICAgIHByb21pc2VzLnB1c2gobG9hZExvY2tlZERlcG9zaXRzKGFkZHJlc3MsIGFkZHJlc3NlcykpO1xuICB9KVxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJlc3VsdEFycmF5KSA9PiB7XG4gICAgaWYocmVzdWx0QXJyYXkpIHtcbiAgICAgIHJlc3VsdEFycmF5ID0gcmVzdWx0QXJyYXkuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdEFycmF5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZExvY2tlZERlcG9zaXRzKHBhcnRpY2lwYW50QWRkcmVzcywgbG9ja2VkUmVjaXBpZW50cykge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGxldCBlc2Nyb3cgPSBjb250cmFjdCgnRXNjcm93JykuaW5zdGFuY2U7XG4gICAgdmFyIGJhdGNoID0gd2ViMy5jcmVhdGVCYXRjaCgpO1xuICAgIGxvY2tlZFJlY2lwaWVudHMuZm9yRWFjaChhZGRyZXNzID0+IHtcbiAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICBwYXJ0aWNpcGFudDogcGFydGljaXBhbnRBZGRyZXNzLCBcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgcmVxdWVzdHM6IDJcbiAgICAgIH07XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgIGJhdGNoLmFkZChlc2Nyb3cuZGVwb3NpdExvY2tlZC5yZXF1ZXN0KHBhcnRpY2lwYW50QWRkcmVzcywgYWRkcmVzcywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgaXRlbS50aGVpciA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0ucmVxdWVzdHMtLTtcbiAgICAgICAgaWYoaXRlbS5yZXF1ZXN0cyA9PSAwICYmIHJlc3VsdC5sZW5ndGggPT0gbG9ja2VkUmVjaXBpZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGJhdGNoLmFkZChlc2Nyb3cuZGVwb3NpdExvY2tlZC5yZXF1ZXN0KGFkZHJlc3MsIHBhcnRpY2lwYW50QWRkcmVzcywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgaXRlbS5vdXJzID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5yZXF1ZXN0cy0tO1xuICAgICAgICBpZihpdGVtLnJlcXVlc3RzID09IDAgJiYgcmVzdWx0Lmxlbmd0aCA9PSBsb2NrZWRSZWNpcGllbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGJhdGNoLmV4ZWN1dGUoKTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoeCA9PiB4LnRoZWlyID4gMCB8fCB4Lm91cnMgPiAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0KCkge1xuICB2YXIgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuIGlmKGN1cnJlbnRQYXJ0aWNpcGFudC53aXRoZHJhd2FibGUgPiAwKSB7XG4gICAgbGV0IGVzY3Jvd1dpdGhkcmF3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VzY3Jvd1dpdGhkcmF3Jyk7XG4gICAgZXNjcm93V2l0aGRyYXcuaW5uZXJIVE1MID0gJzxwPllvdSBjdXJyZW50bHkgaGF2ZSAnK1xuICAgICAgd2ViMy5mcm9tV2VpKGN1cnJlbnRQYXJ0aWNpcGFudC53aXRoZHJhd2FibGUsICdldGhlcicpK1xuICAgICcgRVRIIHRvICcrXG4gICAgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OmFjdGlvbldpdGhkcmF3KClcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIldpdGhkcmF3XCI+JytcbiAgICAnV2l0aGRyYXcgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1jaXJjbGUtZG93blwiPjwvc3Bhbj48L2E+LjwvcD4nO1xuICB9XG5cbiAgbGV0IGVzY3Jvd1Bvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgY3VycmVudFBhcnRpY2lwYW50LmxvY2tlZERlcG9zaXRzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIGlmKGl0ZW0uZGlzcHV0ZWQpIHtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdiZy13YXJuaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNlbGwuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoaXRlbS5hZGRyZXNzLCB0cnVlKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbGV0IHRoZWlyID0gd2ViMy5mcm9tV2VpKGl0ZW0udGhlaXIsICdldGhlcicpO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhlaXIgKyAnIEVUSCcpKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Ftb3VudCcpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsZXQgb3VycyA9IHdlYjMuZnJvbVdlaShpdGVtLm91cnMsICdldGhlcicpO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3VycyArICcgRVRIJykpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYW1vdW50Jyk7XG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYoIWl0ZW0uZGlzcHV0ZWQpIHtcbiAgICAgIGlmKGl0ZW0udGhlaXIgPiAwKSB7XG4gICAgICAgIGNlbGwuaW5uZXJIVE1MICs9ICc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIG9uY2xpY2s9XCJzaG93RXNjcm93Rm9ybShcXCdkaXNwdXRlXFwnLCAnK2krJylcIj48c3BhbiBjbGFzcz1cImZhIGZhLWZsYWdcIj48L3NwYW4+IERpc3B1dGU8L2J1dHRvbj4nO1xuICAgICAgfVxuICAgICAgaWYoaXRlbS5vdXJzID4gMCkge1xuICAgICAgICBpZihpdGVtLnRoZWlyID4gMCkge1xuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MICs9ICcmbmJzcDsnO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuaW5uZXJIVE1MICs9ICc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIG9uY2xpY2s9XCJzaG93RXNjcm93Rm9ybShcXCdyZWxlYXNlXFwnLCAnK2krJylcIj48c3BhbiBjbGFzcz1cImZhIGZhLXVubG9jay1hbHRcIj48L3NwYW4+IFJlbGVhc2U8L2J1dHRvbj4nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9ICdEaXNwdXRlZCA8c3BhbiBjbGFzcz1cImZhIGZhLWZsYWdcIj48L3NwYW4+JztcbiAgICB9XG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgZXNjcm93UG9zaXRpb24uYXBwZW5kQ2hpbGQocm93KTtcbiAgfSk7XG5cbiAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIHJvdy5pbm5lckhUTUwgPSAnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPjwvdGQ+PHRkPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25jbGljaz1cInNob3dFc2Nyb3dGb3JtKFxcJ2RlcG9zaXRcXCcsIDApXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L3NwYW4+Jm5ic3A7PHNwYW4+RGVwb3NpdDwvc3Bhbj48L2J1dHRvbj48L3RkPjwvdHI+JztcbiAgZXNjcm93UG9zaXRpb24uYXBwZW5kQ2hpbGQocm93KTtcbiAgXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlc2Nyb3dDdXJyZW50UG9zaXRpb24nKS5pbm5lckhUTUwgPSBlc2Nyb3dQb3NpdGlvbi5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVzY3Jvd0hpc3RvcnkoKSB7XG4gIHZhciB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gIGN1cnJlbnRQYXJ0aWNpcGFudC5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIC8vIERhdGVcbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShldmVudC50aW1lc3RhbXApLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0ZSkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIC8vIEV2ZW50XG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxldCBldmVudE5hbWUgPSAnLSc7XG4gICAgc3dpdGNoKGV2ZW50LmV2ZW50KSB7XG4gICAgICBjYXNlICdEZXBvc2l0QWRkZWQnOlxuICAgICAgICBldmVudE5hbWUgPSAnRGVwb3NpdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRGVwb3NpdFJlbGVhc2VkJzpcbiAgICAgICAgZXZlbnROYW1lID0gJ1JlbGVhc2UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0RlcG9zaXRXaXRoZHJhd24nOlxuICAgICAgICBldmVudE5hbWUgPSAnV2l0aGRyYXcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ093bmVyc2hpcFRyYW5zZmVycmVkJzpcbiAgICAgICAgZXZlbnROYW1lID0gJ05ldyBPd25lcic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjZWxsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGV2ZW50TmFtZSkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIC8vIEZyb21cbiAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgaWYgKGV2ZW50LmZyb20pIHtcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gc2hvcnRlbkFkZHJlc3MoZXZlbnQuZnJvbSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy0nKSk7XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIC8vIFRvXG4gICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGlmIChldmVudC50bykge1xuICAgICAgY2VsbC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhldmVudC50bywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy0nKSk7XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIC8vIEFtb3VudFxuICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBpZihldmVudC5hbW91bnQgPiAwKSB7XG4gICAgICBjZWxsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdlYjMuZnJvbVdlaShldmVudC5hbW91bnQsICdldGhlcicpICsgJyBFVEgnKSk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Ftb3VudCcpOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy0nKSk7XG4gICAgfVxuICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc2Nyb3dIaXN0b3J5Qm9keVwiKS5pbm5lckhUTUwgPSB0YWJsZUJvZHkuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiBhY3Rpb25EZXBvc2l0KCkge1xuICBsZXQgYW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXBvc2l0QW1vdW50XCIpLnZhbHVlO1xuICBsZXQgZGVwb3NpdFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXBvc2l0VG9cIikudmFsdWU7XG5cbiAgbGV0IGVzY3JvdyA9IGNvbnRyYWN0KCdFc2Nyb3cnKS5pbnN0YW5jZTtcblxuICBpZihkZXBvc2l0VG8pIHtcbiAgICBpZighZGVwb3NpdFRvLnN0YXJ0c1dpdGgoJzB4JykpIHtcbiAgICAgIGRlcG9zaXRUbyA9IGxvb2t1cE5hbWUoZGVwb3NpdFRvKTtcbiAgICB9XG4gICAgaWYoZGVwb3NpdFRvLmxlbmd0aCA9PSA0MCkge1xuICAgICAgZGVwb3NpdFRvID0gJzB4JyArIGRlcG9zaXRUbztcbiAgICB9XG4gIH1cbiAgbGV0IGRlcG9zaXRUb1ZhbGlkID0gZGVwb3NpdFRvLmxlbmd0aCA9PSA0MiAmJiBkZXBvc2l0VG8uc3RhcnRzV2l0aCgnMHgnKTtcbiAgbGV0IGFtb3VudFZhbGlkID0gY3VycmVudFBhcnRpY2lwYW50LmJhbGFuY2UgPj0gYW1vdW50ICYmIGFtb3VudCA+IDA7XG5cbiAgaWYgKGRlcG9zaXRUb1ZhbGlkICYmIGFtb3VudFZhbGlkKSB7XG4gICAgZXNjcm93LmFkZERlcG9zaXQoIGRlcG9zaXRUbywgeyBmcm9tOiBjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcywgdmFsdWU6IHdlYjMudG9XZWkoIGFtb3VudCwgJ2V0aGVyJykgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGhpZGVBbGxFc2Nyb3dGb3JtcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlICB7ICAgIFxuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcnMgKGRlcG9zaXRUbz1cIitkZXBvc2l0VG9WYWxpZCtcIiwgYW1vdW50PVwiK2Ftb3VudFZhbGlkK1wiKVwiKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFjdGlvbldpdGhkcmF3KCkge1xuICBsZXQgZXNjcm93ID0gY29udHJhY3QoJ0VzY3JvdycpLmluc3RhbmNlOyAgXG4gIGVzY3Jvdy53aXRoZHJhd0RlcG9zaXQoIGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzLCB7IGZyb206IGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBhY3Rpb25SZWxlYXNlKCkge1xuICBsZXQgYW1vdW50ID0gY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkQW1vdW50O1xuICBsZXQgZXNjcm93ID0gY29udHJhY3QoJ0VzY3JvdycpLmluc3RhbmNlOyAgXG5cbiAgdmFyIGRlcG9zaXQgPSBjdXJyZW50UGFydGljaXBhbnQubG9ja2VkRGVwb3NpdHNbY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkRGVwb3NpdF07XG4gIHZhciBhZGRyZXNzID0gZGVwb3NpdC5hZGRyZXNzO1xuXG4gIHZhciBhbW91bnRWYWxpZCA9IGFtb3VudCA+IDA7XG5cbiAgaWYoYW1vdW50VmFsaWQpIHtcbiAgICBlc2Nyb3cucmVsZWFzZURlcG9zaXQoIGFkZHJlc3MsIGFtb3VudCwgeyBmcm9tOiBjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcyB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgaGlkZUFsbEVzY3Jvd0Zvcm1zKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGRhdGEgKGFtb3VudFZhbGlkPVwiK2Ftb3VudFZhbGlkK1wiKVwiKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFjdGlvblJhaXNlRXNjcm93RGlzcHV0ZSgpIHtcbiAgdmFyIGRlcG9zaXQgPSBjdXJyZW50UGFydGljaXBhbnQubG9ja2VkRGVwb3NpdHNbY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkRGVwb3NpdF07XG4gIGxldCBhbW91bnQgPSBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWRBbW91bnQ7XG5cbiAgbGV0IGFyYml0cmFnZSA9IGNvbnRyYWN0KCdBcmJpdHJhZ2UnKS5pbnN0YW5jZTtcbiAgbGV0IGVzY3JvdyA9IGNvbnRyYWN0KCdFc2Nyb3cnKS5pbnN0YW5jZTtcblxuICB2YXIgcmVhc29uSGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXNjcm93UmVhc29uSGFzaFwiKS5pbm5lckhUTUw7XG5cbiAgbGV0IHJlc29sdXRpb24gPSAnJztcbiAgc3dpdGNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXNjcm93UmVxdWVzdFNlbGVjdFwiKS52YWx1ZSkge1xuICAgIGNhc2UgJ1JlbGVhc2UnOlxuICAgICAgcmVzb2x1dGlvbiA9IGVzY3Jvdy5mb3JjZVJlbGVhc2VEZXBvc2l0LmdldERhdGEoZGVwb3NpdC5hZGRyZXNzLCBjdXJyZW50UGFydGljaXBhbnQuYWRkcmVzcywgYW1vdW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JldmVydCc6XG4gICAgICByZXNvbHV0aW9uID0gZXNjcm93LnJldmVydERlcG9zaXQuZ2V0RGF0YShkZXBvc2l0LmFkZHJlc3MsIGN1cnJlbnRQYXJ0aWNpcGFudC5hZGRyZXNzLCBhbW91bnQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBsZXQgcmVzb2x1dGlvbkhhc2ggPSB3ZWIzLnNoYTMocmVzb2x1dGlvbiwgeyBlbmNvZGluZzogJ2hleCd9KTtcblxuICBsZXQgcmVhc29uSGFzaFZhbGlkID0gcmVhc29uSGFzaC5sZW5ndGggPT0gNjYgJiYgcmVhc29uSGFzaC5zdGFydHNXaXRoKCcweCcpO1xuICBsZXQgcmVzb2x1dGlvbkhhc2hWYWxpZCA9IHJlc29sdXRpb25IYXNoLmxlbmd0aCA9PSA2NiAmJiByZXNvbHV0aW9uSGFzaC5zdGFydHNXaXRoKCcweCcpO1xuICBpZihyZWFzb25IYXNoVmFsaWQgJiYgcmVzb2x1dGlvbkhhc2hWYWxpZCkge1xuICAgIGFyYml0cmFnZS5yYWlzZURpc3B1dGUoZXNjcm93LmFkZHJlc3MsIGRlcG9zaXQuYWRkcmVzcywgcmVhc29uSGFzaCwgcmVzb2x1dGlvbkhhc2gsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBoaWRlQWxsRXNjcm93Rm9ybXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcGFyYW1ldGVycyAocmVhc29uSGFzaDogXCIrcmVhc29uSGFzaFZhbGlkK1wiLCByZXNvbHV0aW9uSGFzaDogXCIrcmVzb2x1dGlvbkhhc2hWYWxpZCtcIlwiKVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGlkZUFsbEVzY3Jvd0Zvcm1zKCkge1xuICB2YXIgZGVwb3NpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9zaXRGb3JtXCIpO1xuICBkZXBvc2l0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgdmFyIHJlbGVhc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWxlYXNlRm9ybVwiKTtcbiAgcmVsZWFzZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIHZhciBkaXNwdXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcHV0ZUZvcm1cIik7XG4gIGRpc3B1dGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICB2YXIgZGVwb3NpdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9zaXRzXCIpO1xuICBkZXBvc2l0cy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHZhciBkZXBvc2l0c0hpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9zaXRzSGlzdG9yeVwiKTtcbiAgZGVwb3NpdHNIaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93RXNjcm93Rm9ybShuYW1lLCBpbmRleCkge1xuICBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWRBY3Rpb24gPSBuYW1lO1xuICBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWREZXBvc2l0ID0gaW5kZXg7XG5cbiAgdmFyIGRlcG9zaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXBvc2l0c1wiKTtcbiAgZGVwb3NpdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIHZhciBkZXBvc2l0c0hpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9zaXRzSGlzdG9yeVwiKTtcbiAgZGVwb3NpdHNIaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBzd2l0Y2gobmFtZSkge1xuICAgIGNhc2UgXCJkZXBvc2l0XCI6XG4gICAgICB2YXIgZGVwb3NpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9zaXRGb3JtXCIpO1xuICAgICAgZGVwb3NpdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyZWxlYXNlXCI6XG4gICAgICB2YXIgcmVsZWFzZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbGVhc2VGb3JtXCIpO1xuICAgICAgcmVsZWFzZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGRpc3BsYXlFVEhTbGlkZXIoJ3JlbGVhc2VTbGlkZXInLCAncmVsZWFzZUFtb3VudCcpO1xuXG4gICAgICB2YXIgbG9ja2VkRGVwb3NpdCA9IGN1cnJlbnRQYXJ0aWNpcGFudC5sb2NrZWREZXBvc2l0c1tjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWREZXBvc2l0XTtcbiAgICAgIHZhciByZWNpcGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZVJlY2lwaWVudCcpO1xuICAgICAgcmVjaXBpZW50LmlubmVySFRNTCA9IHNob3J0ZW5BZGRyZXNzKGxvY2tlZERlcG9zaXQuYWRkcmVzcywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGlzcHV0ZVwiOlxuICAgICAgdmFyIGRpc3B1dGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwdXRlRm9ybVwiKTtcbiAgICAgIGRpc3B1dGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBkaXNwbGF5RVRIU2xpZGVyKCdkaXNwdXRlU2xpZGVyJywgJ2Rpc3B1dGVBbW91bnQnKTtcbiAgICAgIGJ1aWxkRGlzcHV0ZUhhc2goJ3JlYXNvbkhhc2hBcmVhJywgJ2VzY3Jvd1JlYXNvbkhhc2gnKTtcblxuICAgICAgdmFyIGxvY2tlZERlcG9zaXQgPSBjdXJyZW50UGFydGljaXBhbnQubG9ja2VkRGVwb3NpdHNbY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkRGVwb3NpdF07XG4gICAgICB2YXIgcmVjaXBpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3B1dGVSZWNpcGllbnQnKTtcbiAgICAgIHJlY2lwaWVudC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhsb2NrZWREZXBvc2l0LmFkZHJlc3MsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXNjcm93UmVxdWVzdFNlbGVjdGlvbihldmVudCkge1xuICByZXR1cm4gZGlzcGxheUVUSFNsaWRlcignZGlzcHV0ZVNsaWRlcicsICdkaXNwdXRlQW1vdW50Jylcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVUSFNsaWRlcihpZCwgaWREaXNwbGF5KSB7XG4gIGxldCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZTtcblxuICBsZXQgbG9ja2VkRGVwb3NpdCA9IGN1cnJlbnRQYXJ0aWNpcGFudC5sb2NrZWREZXBvc2l0c1tjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWREZXBvc2l0XTtcbiAgaWYobG9ja2VkRGVwb3NpdCAmJiBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWRBY3Rpb24gPT0gJ3JlbGVhc2UnKSB7XG4gICAgdmFyIHJlbGVhc2VBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZERpc3BsYXkpO1xuICAgIHZhciBhbW91bnQgPSBNYXRoLnJvdW5kKHZhbHVlICogbG9ja2VkRGVwb3NpdC5vdXJzIC8gMTAwKTtcbiAgICBjdXJyZW50UGFydGljaXBhbnQuc2VsZWN0ZWRBbW91bnQgPSBhbW91bnQ7XG4gICAgcmVsZWFzZUFtb3VudC5pbm5lckhUTUwgPSB3ZWIzLmZyb21XZWkoYW1vdW50LCAnZXRoZXInKSArICcgRVRIJztcbiAgfVxuICBpZihsb2NrZWREZXBvc2l0ICYmIGN1cnJlbnRQYXJ0aWNpcGFudC5zZWxlY3RlZEFjdGlvbiA9PSAnZGlzcHV0ZScpIHtcbiAgICB2YXIgc2VsZWN0ZWRBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXNjcm93UmVxdWVzdFNlbGVjdCcpO1xuICAgIHZhciByZWxlYXNlQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXNwbGF5KTtcbiAgICB2YXIgbG9ja2VkVmFsdWUgPSAoc2VsZWN0ZWRBY3Rpb24udmFsdWUgPT0gJ1JlbGVhc2UnKSA/IGxvY2tlZERlcG9zaXQudGhlaXIgOiBsb2NrZWREZXBvc2l0Lm91cnM7XG4gICAgdmFyIGFtb3VudCA9IE1hdGgucm91bmQodmFsdWUgKiBsb2NrZWRWYWx1ZSAvIDEwMCk7XG4gICAgY3VycmVudFBhcnRpY2lwYW50LnNlbGVjdGVkQW1vdW50ID0gYW1vdW50O1xuICAgIHJlbGVhc2VBbW91bnQuaW5uZXJIVE1MID0gd2ViMy5mcm9tV2VpKGFtb3VudCwgJ2V0aGVyJykgKyAnIEVUSCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGREaXNwdXRlSGFzaChpbnB1dCwgbGFiZWwpIHtcbiAgdmFyIHJlYXNvbkhhc2hBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpO1xuICB2YXIgcmVhc29uSGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsKTtcbiAgaWYocmVhc29uSGFzaEFyZWEudmFsdWUpIHtcbiAgICByZWFzb25IYXNoLmlubmVySFRNTCA9IHdlYjMuc2hhMyhyZWFzb25IYXNoQXJlYS52YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVhc29uSGFzaC5pbm5lckhUTUwgPSBFTVBUWV9IQVNIO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdvVG8odGFnKSB7XG4gIHZhciBhcmJpdHJhZ2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJiaXRyYWdlLXRhYicpO1xuICB2YXIgcGFydGljaXBhbnRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnQtdGFiJyk7XG4gIHZhciBhYm91dFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC10YWInKTtcblxuICB2YXIgYXJiaXRyYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyYml0cmFnZScpO1xuICB2YXIgcGFydGljaXBhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnQnKTtcbiAgdmFyIGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIFxuICB2YXIgcGFydGljaXBhbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnQnKTtcbiAgcGFydGljaXBhbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcGFydGljaXBhbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gIHZhciBhcmJpdHJhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJiaXRyYWdlJyk7XG4gIGFyYml0cmFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhcmJpdHJhZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gIHZhciBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhYm91dC5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICBwYXJ0aWNpcGFudFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICBwYXJ0aWNpcGFudFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYXJiaXRyYWdlVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIGFyYml0cmFnZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIFxuICBzd2l0Y2godGFnKSB7XG4gICAgY2FzZSAncGFydGljaXBhbnQnOlxuICAgICAgdmFyIHBhcnRpY2lwYW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcnRpY2lwYW50Jyk7XG4gICAgICBwYXJ0aWNpcGFudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHBhcnRpY2lwYW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgcGFydGljaXBhbnRUYWIuY2xhc3NMaXN0LmFkZChbJ3NlbGVjdGVkJywgJ2FjdGl2ZSddKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FyYml0cmFnZSc6XG4gICAgICB2YXIgYXJiaXRyYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyYml0cmFnZScpO1xuICAgICAgYXJiaXRyYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYXJiaXRyYWdlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgYXJiaXRyYWdlVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBhcmJpdHJhZ2VUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhYm91dCc6XG4gICAgICB2YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYWJvdXQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWNvdmVyUmVzb2x1dGlvbkhhc2gobG9ja2VkRGVwb3NpdHMsIGRpc3B1dGUsIHJlc29sdXRpb25IYXNoKSB7XG4gIHJldHVybiBsb2FkaW5nUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBsZXQgZGVwb3NpdHMgPSAobG9ja2VkRGVwb3NpdHMpID8gbG9ja2VkRGVwb3NpdHMgOiBjdXJyZW50UGFydGljaXBhbnQubG9ja2VkRGVwb3NpdHM7XG5cbiAgICBsZXQgZXNjcm93ID0gY29udHJhY3QoJ0VzY3JvdycpLmluc3RhbmNlO1xuICBcbiAgICBsZXQgZGVwb3NpdDtcbiAgICBsZXQgYWRkcmVzc2VzID0gWyBkaXNwdXRlLmNsYWltYW50LCBkaXNwdXRlLmRlZmVuZGFudCBdO1xuICAgIGRlcG9zaXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKGFkZHJlc3Nlcy5pbmRleE9mKGl0ZW0ucGFydGljaXBhbnQpICE9IC0xXG4gICAgICAgICYmIGFkZHJlc3Nlcy5pbmRleE9mKGl0ZW0uYWRkcmVzcykgIT0gLTEpIHtcbiAgICAgICAgICBkZXBvc2l0ID0gaXRlbTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZighZGVwb3NpdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlY292ZXJlZCA9IG51bGw7XG4gICAgbGV0IGNoZWNrSGFzaCA9IGZ1bmN0aW9uKGFkZHJlc3MsIHBhcnRpY2lwYW50LCBhbW91bnQpIHtcbiAgICAgIHZhciBoYXNoID0gd2ViMy5zaGEzKGVzY3Jvdy5mb3JjZVJlbGVhc2VEZXBvc2l0LmdldERhdGEoYWRkcmVzcywgcGFydGljaXBhbnQsIGFtb3VudCksIHsgZW5jb2Rpbmc6ICdoZXgnfSk7XG4gICAgICBpZihyZXNvbHV0aW9uSGFzaCA9PSBoYXNoKSB7XG4gICAgICAgIHJlY292ZXJlZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdSZWxlYXNlJyxcbiAgICAgICAgICBwYXllZTogYWRkcmVzcyxcbiAgICAgICAgICBwYXllcjogcGFydGljaXBhbnQsXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGhhc2ggPSB3ZWIzLnNoYTMoZXNjcm93LnJldmVydERlcG9zaXQuZ2V0RGF0YShhZGRyZXNzLCBwYXJ0aWNpcGFudCwgYW1vdW50KSwgeyBlbmNvZGluZzogJ2hleCd9KTtcbiAgICAgIGlmKHJlc29sdXRpb25IYXNoID09IGhhc2gpIHtcbiAgICAgICAgcmVjb3ZlcmVkID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1JldmVydCcsXG4gICAgICAgICAgcGF5ZWU6IGFkZHJlc3MsXG4gICAgICAgICAgcGF5ZXI6IHBhcnRpY2lwYW50LFxuICAgICAgICAgIGFtb3VudDogYW1vdW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWy4yNSwgLjUsIC43NSwgMV0uZm9yRWFjaCh4ID0+IHtcbiAgICAgIHZhciBvdXJzID0gZGVwb3NpdC5vdXJzICogeDtcbiAgICAgIHZhciB0aGVpciA9IGRlcG9zaXQudGhlaXIgKiB4O1xuXG4gICAgICBpZighcmVjb3ZlcmVkKSB7XG4gICAgICAgIGNoZWNrSGFzaChkZXBvc2l0LmFkZHJlc3MsIGRlcG9zaXQucGFydGljaXBhbnQsIHRoZWlyKTtcbiAgICAgICAgY2hlY2tIYXNoKGRlcG9zaXQucGFydGljaXBhbnQsIGRlcG9zaXQuYWRkcmVzcywgb3Vycyk7ICBcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVjb3ZlcmVkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXNjcm93SW5pdCgpIHtcbiAgaWYgKHdpbmRvdy5ldGhlcmV1bSAmJiAhbG9hZGluZ1Byb21pc2UpIHtcbiAgICBsb2FkaW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGVzY3Jvdy4uLicpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikgeyBcbiAgICAgICAgYXdhaXQgbG9hZE1ldGFtYXNrKCk7XG4gICAgICAgIGF3YWl0IGxvYWRFc2Nyb3coKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFBhcnRpY2lwYW50KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgbG9hZE1ldGFtYXNrKCk7XG4gICAgICAgICAgYXdhaXQgbG9hZEVzY3JvdygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYXJ0aWNpcGFudCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBsb2FkaW5nUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIG5ldyBTbGlkZXIoJyNyZWxlYXNlU2xpZGVyJywge1xuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGRpc3BsYXlFVEhTbGlkZXIoJ3JlbGVhc2VTbGlkZXInLCAncmVsZWFzZUFtb3VudCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG5ldyBTbGlkZXIoJyNkaXNwdXRlU2xpZGVyJywge1xuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGRpc3BsYXlFVEhTbGlkZXIoJ2Rpc3B1dGVTbGlkZXInLCAnZGlzcHV0ZUFtb3VudCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIGFyYml0cmFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcmJpdHJhZ2UtdGFiJyk7XG4gICAgICB2YXIgcGFydGljaXBhbnRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnQtdGFiJyk7XG4gICAgICB2YXIgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdGFiJyk7XG5cbiAgICAgIHBhcnRpY2lwYW50VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBnb1RvKCdwYXJ0aWNpcGFudCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGFyYml0cmFnZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgZ29UbygnYXJiaXRyYWdlJyk7XG4gICAgICB9KTtcblxuICAgICAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGdvVG8oJ2Fib3V0Jyk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGVzY3Jvd1JlcXVlc3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXNjcm93UmVxdWVzdFNlbGVjdCcpO1xuICAgICAgZXNjcm93UmVxdWVzdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlc2Nyb3dSZXF1ZXN0U2VsZWN0aW9uKTtcblxuICAgICAgY29uc29sZS5sb2coJ2VzY3JvdyBsb2FkaW5nIGZpbmlzaGVkIScpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBsb2FkaW5nUHJvbWlzZTtcbn1cblxud2luZG93LnNob3dFc2Nyb3dGb3JtID0gc2hvd0VzY3Jvd0Zvcm07XG53aW5kb3cuaGlkZUFsbEVzY3Jvd0Zvcm1zID0gaGlkZUFsbEVzY3Jvd0Zvcm1zO1xud2luZG93LmFjdGlvbkRlcG9zaXQgPSBhY3Rpb25EZXBvc2l0O1xud2luZG93LmFjdGlvbldpdGhkcmF3ID0gYWN0aW9uV2l0aGRyYXc7XG53aW5kb3cuYWN0aW9uUmVsZWFzZSA9IGFjdGlvblJlbGVhc2U7XG53aW5kb3cuYWN0aW9uUmFpc2VFc2Nyb3dEaXNwdXRlID0gYWN0aW9uUmFpc2VFc2Nyb3dEaXNwdXRlO1xud2luZG93LmJ1aWxkRGlzcHV0ZUhhc2ggPSBidWlsZERpc3B1dGVIYXNoO1xuXG5leHBvcnQgeyByZWNvdmVyUmVzb2x1dGlvbkhhc2gsIGxvYWRBbGxMb2NrZWREZXBvc2l0cywgZXNjcm93SW5pdCB9OyIsImltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2V0aGVyZXVtJztcbmltcG9ydCB7IGVzY3Jvd0luaXQgfSBmcm9tICcuL2VzY3Jvdyc7XG5pbXBvcnQgeyBkaXNwdXRlSW5pdCB9IGZyb20gJy4vZGlzcHV0ZSc7XG5pbXBvcnQgeyBsb2FkQ29udHJhY3QsIG1ldGFtYXNrTG9hZGluZywgbG9va3VwTmFtZSwgcmVnaXN0cnlQcm9taXNlLCBuZXdDb250cmFjdCwgc2hvcnRlbkFkZHJlc3MsIHdhaXRGb3JSZWNlaXB0IH0gZnJvbSAnLi9tb2R1bGVzL2V0aGVyZXVtJztcblxuLy9jb25zdCBST1BTVEVOX0VTQ1JPV19BRERSRVNTID0gJzB4NzhhZmJlZTZmMTY5M2QxNmQxYjYxYkE5NDI1YjczNkYxOTcwNjg1OCc7XG4vL2NvbnN0IFJPUFNURU5fQVJCSVRSQUdFX0FERFJFU1MgPSAnMHhDRWU4MGZmMUI4REIwMDVDMkRDOTNiRTMxOGMzMTUyNDYyNzk5NTQ0JztcblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQWxpY2VfYW5kX0JvYlxuY29uc3QgUEFSVElDSVBBTlRTID0gWyAnQWxpY2UnLCAnQm9iJywgJ0NoYXJsaWUnLCAnRXZlJywgJ01hbGxvcnknLCAnT2xpdmlhJyBdO1xuXG5sZXQgZXNjcm93QWRkcmVzcztcblxuZnVuY3Rpb24gbG9hZEFsbENvbnRyYWN0cygpIHtcbiAgdmFyIGVzY3Jvd0FkZHJlc3MgPSAnMHgnICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc2Nyb3dBZGRyZXNzSW5wdXRcIikudmFsdWU7XG4gIHJldHVybiBsb2FkQWxsQ29udHJhY3RzSW50ZXJuYWwoZXNjcm93QWRkcmVzcyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxDb250cmFjdHNJbnRlcm5hbChlc2Nyb3dBZGRyZXNzKSB7XG4gIGxvYWRDb250cmFjdCgnRXNjcm93JywgZXNjcm93QWRkcmVzcykudGhlbigoZXNjcm93KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGVzY3Jvdy5pbnN0YW5jZS5vd25lci5jYWxsKChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChhcmJpdHJhZ2VBZGRyZXNzKSA9PiB7XG4gICAgICByZXR1cm4gbG9hZENvbnRyYWN0KCdBcmJpdHJhZ2UnLCBhcmJpdHJhZ2VBZGRyZXNzKTtcbiAgICB9KTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtlc2Nyb3dJbml0KCksIGRpc3B1dGVJbml0KCldKTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgdmFyIGNvbnRyYWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFjdFNlbGVjdGlvblwiKTtcbiAgICBjb250cmFjdFNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgdmFyIHNldHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cFwiKTtcbiAgICBzZXR1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgdmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICAgIGFwcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gd2VsY29tZSgpIHtcbiAgdmFyIGNvbnRyYWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFjdFNlbGVjdGlvblwiKTtcbiAgY29udHJhY3RTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgdmFyIHBhcnRpY2lwYW50c0RlZmluaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcnRpY2lwYW50c0RlZmluaXRpb25cIik7XG4gIHBhcnRpY2lwYW50c0RlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFydGljaXBhbnRzKCkge1xuICB2YXIgY29udHJhY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYWN0U2VsZWN0aW9uXCIpO1xuICBjb250cmFjdFNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHZhciBwYXJ0aWNpcGFudHNEZWZpbml0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJ0aWNpcGFudHNEZWZpbml0aW9uXCIpO1xuICBwYXJ0aWNpcGFudHNEZWZpbml0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3Q29udHJhY3RzKCkge1xuICB2YXIgcGFydGljaXBhbnRzRGVmaW5pdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFydGljaXBhbnRzRGVmaW5pdGlvblwiKTtcbiAgcGFydGljaXBhbnRzRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHZhciBjb250cmFjdFNldHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFjdFNldHVwXCIpO1xuICBjb250cmFjdFNldHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHZhciBzdGVwcyA9IFtdO1xuICBbMSwgMiwgMywgNF0uZm9yRWFjaCgoaSkgPT4ge1xuICAgIGxldCBzdGVwID0ge1xuICAgICAgbG9hZGluZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmdTdGVwJytpKSxcbiAgICAgIHNwaW5uZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyU3RlcCcraSksXG4gICAgICBzdWNjZXNzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc1N0ZXAnK2kpLFxuICAgIH1cbiAgICBzdGVwcy5wdXNoKHN0ZXApO1xuICAgIFxuICAgIHN0ZXAubG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgc3RlcC5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RlcC5zdWNjZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIHZhciBlbmRTZXR1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kU2V0dXBcIik7XG4gIGVuZFNldHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgdmFyIGFyYml0ZXJzID0gW107XG4gIFsxLCAyLCAzXS5mb3JFYWNoKGkgPT4ge1xuICAgIHZhciBzZXR1cEFyYml0ZXJBZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHVwQXJiaXRlckFkZHJlc3MnK2kpO1xuICAgIGlmKHNldHVwQXJiaXRlckFkZHJlc3MudmFsdWUgJiYgc2V0dXBBcmJpdGVyQWRkcmVzcy52YWx1ZS5sZW5ndGggPT0gNDApIHtcbiAgICAgIGFyYml0ZXJzLnB1c2goJzB4JytzZXR1cEFyYml0ZXJBZGRyZXNzLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHN0ZXBzWzBdLnNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gIGxldCBlc2Nyb3csIGFyYml0cmFnZTtcbiAgbmV3Q29udHJhY3QoJ0VzY3JvdycsIFtdKS50aGVuKChjb250cmFjdCkgPT4ge1xuICAgIGVzY3JvdyA9IGNvbnRyYWN0O1xuICAgIGVzY3Jvd0FkZHJlc3MgPSBjb250cmFjdC5hZGRyZXNzO1xuXG4gICAgc3RlcHNbMF0uc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN0ZXBzWzBdLnN1Y2Nlc3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgdmFyIGVzY3Jvd0FkZHJlc3NTZXR1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXNjcm93QWRkcmVzc1NldHVwXCIpO1xuICAgIGVzY3Jvd0FkZHJlc3NTZXR1cC5pbm5lckhUTUwgPSBzaG9ydGVuQWRkcmVzcyhjb250cmFjdC5hZGRyZXNzLCB0cnVlKTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgc3RlcHNbMV0uc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICByZXR1cm4gbmV3Q29udHJhY3QoJ0FyYml0cmFnZScsIFtdKTtcbiAgfSkudGhlbigoY29udHJhY3QpID0+IHtcbiAgICBhcmJpdHJhZ2UgPSBjb250cmFjdDtcbiAgICBzdGVwc1sxXS5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RlcHNbMV0uc3VjY2Vzcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICB2YXIgYXJiaXRyYWdlQWRkcmVzc1NldHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcmJpdHJhZ2VBZGRyZXNzU2V0dXBcIik7XG4gICAgYXJiaXRyYWdlQWRkcmVzc1NldHVwLmlubmVySFRNTCA9IHNob3J0ZW5BZGRyZXNzKGNvbnRyYWN0LmFkZHJlc3MsIHRydWUpO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICBzdGVwc1syXS5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZXNjcm93LnRyYW5zZmVyT3duZXJzaGlwKGFyYml0cmFnZS5hZGRyZXNzLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkudGhlbigoaGFzaCkgPT4ge1xuICAgICAgcmV0dXJuIHdhaXRGb3JSZWNlaXB0KGhhc2gpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ093bmVyc2hpcCB0cmFuc2ZlcnJlZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgc3RlcHNbMl0uc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN0ZXBzWzJdLnN1Y2Nlc3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICBzdGVwc1szXS5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBhcmJpdHJhZ2UuYWRkQXJiaXRyYXRvcnMoYXJiaXRlcnMsIChlcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChoYXNoKSA9PiB7XG4gICAgICByZXR1cm4gd2FpdEZvclJlY2VpcHQoaGFzaCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQXJiaXRyYXRvcnMgYWRkZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIHN0ZXBzWzNdLnNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzdGVwc1szXS5zdWNjZXNzLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICBlbmRTZXR1cC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH0pO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZW5kU2V0dXAoKSB7XG4gIHZhciBjb250cmFjdFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhY3RTZWxlY3Rpb25cIik7XG4gIGNvbnRyYWN0U2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgdmFyIHNldHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cFwiKTtcbiAgc2V0dXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICB2YXIgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGFwcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBpZighZXNjcm93QWRkcmVzcykge1xuICAgIGVzY3Jvd0FkZHJlc3MgPSBsb29rdXBOYW1lKCdFc2Nyb3cnKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkQWxsQ29udHJhY3RzSW50ZXJuYWwoZXNjcm93QWRkcmVzcyk7XG59XG5cbnZhciBzZXR1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dXBcIik7XG5zZXR1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuaWYoIXdpbmRvdy5ldGhlcmV1bSkge1xuICB2YXIgbWV0YW1hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1ldGFtYXNrXCIpO1xuICBtZXRhbWFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0gZWxzZSB7XG4gIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZnVuY3Rpb24gKGFjY291bnRzKSB7XG4gICAgLy8gVGltZSB0byByZWxvYWQgeW91ciBpbnRlcmZhY2Ugd2l0aCBhY2NvdW50c1swXSFcbiAgICBjb25zb2xlLmxvZygnbmV3IGFjY291bnRzOiAnICsgYWNjb3VudHNbMF0pO1xuICAgIGxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XG4gIH0pO1xuXG4gIG1ldGFtYXNrTG9hZGluZy50aGVuKGFjY291bnQgPT4ge1xuICAgIHZhciBzZXR1cE93bmVyQWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dXBPd25lckFkZHJlc3NcIik7XG4gICAgc2V0dXBPd25lckFkZHJlc3MudmFsdWUgPSBhY2NvdW50LmFkZHJlc3Muc3Vic3RyKDIpO1xuICB9KVxuXG4gIC8vdmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICAvL2FwcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBsZXQgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgbGV0IGVzY3Jvd0FkZHJlc3MgPSBzZWFyY2gucmVwbGFjZSgvLipjb250cmFjdD0weChcXHcrKSY/LywgJzB4JDEnKTtcblxuICBpZighZXNjcm93QWRkcmVzcykge1xuICAgIHJlZ2lzdHJ5UHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdmFyIGVzY3Jvd0FkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXNjcm93QWRkcmVzc0lucHV0XCIpO1xuICAgICAgZXNjcm93QWRkcmVzcyA9IGxvb2t1cE5hbWUoJ0VzY3JvdycpO1xuICAgICAgZXNjcm93QWRkcmVzc0lucHV0LnZhbHVlID0gZXNjcm93QWRkcmVzcy5zdWJzdHIoMik7XG4gIFxuICAgICAgUEFSVElDSVBBTlRTLmZvckVhY2goKHBhcnRpY2lwYW50LCBpKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGkrMTtcbiAgICAgICAgdmFyIHNldHVwUGFydGljaXBhbnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR1cFBhcnRpY2lwYW50TmFtZVwiK2luZGV4KTtcbiAgICAgICAgc2V0dXBQYXJ0aWNpcGFudE5hbWUudmFsdWUgPSBwYXJ0aWNpcGFudDtcbiAgICAgIFxuICAgICAgICB2YXIgc2V0dXBQYXJ0aWNpcGFudEFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHVwUGFydGljaXBhbnRBZGRyZXNzXCIraW5kZXgpO1xuICAgICAgICBsZXQgcGFydGljaXBhbnRBZGRyZXNzID0gbG9va3VwTmFtZShwYXJ0aWNpcGFudCk7XG4gICAgICAgIGlmKHBhcnRpY2lwYW50QWRkcmVzcyAhPSBwYXJ0aWNpcGFudCkge1xuICAgICAgICAgIHNldHVwUGFydGljaXBhbnRBZGRyZXNzLnZhbHVlID0gcGFydGljaXBhbnRBZGRyZXNzLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR1cFBhcnRpY2lwYW50QWRkcmVzcy5wbGFjZWhvbGRlciA9IHBhcnRpY2lwYW50KydcXCdzIGFkZHJlc3MnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFsgJ0FyYml0ZXIxJyBdLmZvckVhY2goKGFyYml0ZXIsIGkpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gaSsxO1xuICAgICAgICB2YXIgc2V0dXBBcmJpdGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dXBBcmJpdGVyTmFtZVwiK2luZGV4KTtcbiAgICAgICAgc2V0dXBBcmJpdGVyTmFtZS52YWx1ZSA9IGFyYml0ZXI7XG4gICAgICBcbiAgICAgICAgdmFyIHNldHVwQXJiaXRlckFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHVwQXJiaXRlckFkZHJlc3NcIitpbmRleCk7XG4gICAgICAgIGxldCBhcmJpdGVyQWRkcmVzcyA9IGxvb2t1cE5hbWUoYXJiaXRlcik7XG4gICAgICAgIGlmKHNldHVwQXJiaXRlckFkZHJlc3MgIT0gYXJiaXRlcikge1xuICAgICAgICAgIHNldHVwQXJiaXRlckFkZHJlc3MudmFsdWUgPSBhcmJpdGVyQWRkcmVzcy5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dXBBcmJpdGVyQWRkcmVzcy5wbGFjZWhvbGRlciA9IGFyYml0ZXIrJ1xcJ3MgYWRkcmVzcyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxvYWRBbGxDb250cmFjdHNJbnRlcm5hbChlc2Nyb3dBZGRyZXNzKTtcbiAgfVxuICB2YXIgY29udHJhY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYWN0U2VsZWN0aW9uXCIpO1xuICBjb250cmFjdFNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxud2luZG93LndlbGNvbWUgPSB3ZWxjb21lO1xud2luZG93LmxvYWRBbGxDb250cmFjdHMgPSBsb2FkQWxsQ29udHJhY3RzO1xud2luZG93LnNldHVwUGFydGljaXBhbnRzID0gc2V0dXBQYXJ0aWNpcGFudHM7XG53aW5kb3cuY3JlYXRlTmV3Q29udHJhY3RzID0gY3JlYXRlTmV3Q29udHJhY3RzO1xud2luZG93LmVuZFNldHVwID0gZW5kU2V0dXA7XG4iLCJjb25zdCBST1BTVEVOX0VUSEVSU0NBTl9VUkw9ICdodHRwOi8vcm9wc3Rlbi5ldGhlcnNjYW4uaW8nO1xuXG5sZXQgY29udHJhY3RzID0ge307XG5sZXQgY3VycmVudEFjY291bnQgPSB7fTtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5mdW5jdGlvbiByZWdpc3RyeVByb21pc2UoKSB7XG4gIHJldHVybiBsb2FkSlNPTignLi9yZWdpc3RyeS5qc29uJykudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmKGRhdGEpIHtcbiAgICAgIHJlZ2lzdHJ5ID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBsb2FkIHJlZ2lzdHJ5XCIpO1xuICAgIH1cbiAgfSk7XG59XG5yZWdpc3RyeVByb21pc2UoKTtcblxuZnVuY3Rpb24gbG9hZEFCSShmaWxlbmFtZSkge1xuICByZXR1cm4gbG9hZEpTT04oZmlsZW5hbWUpO1xufVxuICBcbmZ1bmN0aW9uIGxvYWRKU09OKGZpbGVuYW1lKSB7XG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHJlcXVlc3Qub3BlbignR0VUJywgJy4uL2Fzc2V0cy8nICsgZmlsZW5hbWUsIHRydWUpO1xuICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSByZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICBpZiAodHlwZS5pbmRleE9mKFwidGV4dFwiKSAhPT0gMSkge1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVxdWVzdCk7XG4gICAgICAgICAgICByZWplY3QoXCJVbmFibGUgdG8gbG9hZCBmaWxlICdcIiArIGZpbGVuYW1lICsgXCInXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvb2t1cEFkZHJlc3MoYWRkcmVzcykge1xuICBsZXQgcmVzdWx0ID0gYWRkcmVzcztcbiAgaWYocmVnaXN0cnlbYWRkcmVzc10pIHtcbiAgICByZXN1bHQgPSByZWdpc3RyeVthZGRyZXNzXTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbG9va3VwTmFtZShuYW1lKSB7XG4gIGxldCByZXN1bHQgPSBuYW1lO1xuICBPYmplY3Qua2V5cyhyZWdpc3RyeSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmKHJlZ2lzdHJ5W2tleV0gPT0gbmFtZSkge1xuICAgICAgcmVzdWx0ID0ga2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2hvcnRlbkhhc2goaGFzaCkge1xuICByZXR1cm4gaGFzaC5zdWJzdHJpbmcoMCwgNikgKyAnLi4uJyArIGhhc2guc3Vic3RyaW5nKGhhc2gubGVuZ3RoLTQsIGhhc2gubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gc2hvcnRlbkFkZHJlc3MoYWRkcmVzcywgZm9ybWF0KSB7XG4gIGxldCByZXN1bHQgPSBhZGRyZXNzO1xuICBpZihhZGRyZXNzICYmIGFkZHJlc3MubGVuZ3RoID09IDQyICYmIGFkZHJlc3Muc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgIGlmKHJlZ2lzdHJ5W2FkZHJlc3NdKSB7XG4gICAgICByZXN1bHQgPSByZWdpc3RyeVthZGRyZXNzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYWRkcmVzcy5zdWJzdHJpbmcoMCwgNikgKyAnLi4uJyArIGFkZHJlc3Muc3Vic3RyaW5nKDQyLTQsIDQyKTtcbiAgICB9XG5cbiAgICBpZihmb3JtYXQpIHtcbiAgICAgIHJlc3VsdCA9ICc8YSBocmVmPVwiJytST1BTVEVOX0VUSEVSU0NBTl9VUkwrJy9hZGRyZXNzLycrYWRkcmVzcysnXCI+JyArIHJlc3VsdCArICc8L2E+JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRyYWN0KG5hbWUsIGFkZHJlc3MpIHtcbiAgcmV0dXJuIGxvYWRBQkkobmFtZSsnLmpzb24nKS50aGVuKChjb250cmFjdEFCSSkgPT4ge1xuICAgIGxldCBjb250cmFjdCA9IHdlYjMuZXRoLmNvbnRyYWN0KGNvbnRyYWN0QUJJLmFiaSk7XG4gICAgbGV0IGluc3RhbmNlID0gY29udHJhY3QuYXQoYWRkcmVzcyk7XG4gICAgY29udHJhY3RzW25hbWVdID0ge1xuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNvbnRyYWN0OiBjb250cmFjdCxcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgIH07XG4gICAgcmV0dXJuIGNvbnRyYWN0c1tuYW1lXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRyYWN0KG5hbWUpIHtcbiAgcmV0dXJuIGNvbnRyYWN0c1tuYW1lXTtcbn1cblxuZnVuY3Rpb24gbmV3Q29udHJhY3QobmFtZSwgcGFyYW1ldGVycykge1xuICByZXR1cm4gbG9hZEFCSShuYW1lKycuanNvbicpLnRoZW4oKGNvbnRyYWN0QUJJKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29udHJhY3RBQkkpO1xuICAgIGxldCBjb250cmFjdCA9IHdlYjMuZXRoLmNvbnRyYWN0KGNvbnRyYWN0QUJJLmFiaSk7XG4gICAgY29uc29sZS5sb2coY29udHJhY3QpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgY29udHJhY3QubmV3KHBhcmFtZXRlcnMsIHsgZGF0YTogY29udHJhY3RBQkkuYnl0ZWNvZGUgfSwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lKycgY3JlYXRpb24uLi4nKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvclJlY2VpcHQoaGFzaCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IGludGVydmFsID0gMTAwMDtcbiAgICBsZXQgdGltZW91dCA9IDEwMDAwMDtcbiAgICBsZXQgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nIGZvciB0eCAnK2hhc2gpO1xuICAgICAgd2ViMy5ldGguZ2V0VHJhbnNhY3Rpb25SZWNlaXB0KGhhc2gsIGZ1bmN0aW9uIChlcnJvciwgcmVjZWlwdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVjZWlwdCAnICsgcmVjZWlwdCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY2VpcHQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHggbWluZWQgIScpO1xuICAgICAgICAgIC8vIFRyYW5zYWN0aW9uIHdlbnQgdGhyb3VnaFxuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICByZXNvbHZlKHJlY2VpcHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVvdXQgLT0gaW50ZXJ2YWw7XG4gICAgICAgICAgaWYodGltZW91dCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZW91dCByZWFjaGVkIScpO1xuICAgICAgICAgICAgLy8gdGltZW91dFxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgcmVqZWN0KGhhc2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgaW50ZXJ2YWwpO1xuICB9KTtcbn1cblxubGV0IG1ldGFtYXNrTG9hZGluZyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgIHdlYjMuZXRoLmdldEFjY291bnRzKChlcnJvciwgYWNjb3VudHMpID0+IHtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjdXJyZW50QWNjb3VudC5hZGRyZXNzID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgd2ViMy5ldGguZ2V0QmFsYW5jZShhY2NvdW50c1swXSwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudC5iYWxhbmNlID0gZGF0YTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50QWNjb3VudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oXCJNZXRhbWFzayBpcyBub3QgeWV0IGVuYWJsZWQhXCIpO1xuICAgICAgICAgIGV0aGVyZXVtLmVuYWJsZSgpLnRoZW4oKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBuZWVkIHRvIGluc3RhbGwgTWV0YU1hc2shJyk7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbG9hZEFCSSwgcmVnaXN0cnlQcm9taXNlLCBsb29rdXBOYW1lLCBsb29rdXBBZGRyZXNzLCBzaG9ydGVuSGFzaCwgc2hvcnRlbkFkZHJlc3MsIGxvYWRDb250cmFjdCwgY29udHJhY3QsIG1ldGFtYXNrTG9hZGluZywgbmV3Q29udHJhY3QsIHdhaXRGb3JSZWNlaXB0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9