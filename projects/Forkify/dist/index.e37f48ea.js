// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _service = require("./model/service");
var _serviceDefault = parcelHelpers.interopDefault(_service);
var _resultsView = require("./view/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
var _recipeViewJs = require("./view/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchView = require("./view/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _paginationView = require("./view/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
var _bookmarksView = require("./view/bookmarksView");
var _bookmarksViewDefault = parcelHelpers.interopDefault(_bookmarksView);
if (module.hot) module.hot.accept();
///////////////////////////////////////
async function controlSearch() {
    try {
        // 1. Get query
        const key = (0, _searchViewDefault.default).getQuery();
        if (!key) return;
        // 2. Load and render results
        await controlResults(key, 1);
        // 3. Render pagination
        (0, _paginationViewDefault.default).render((0, _serviceDefault.default).hasPrevious, (0, _serviceDefault.default).hasNext, (0, _serviceDefault.default).currentSearchPage);
    } catch (err) {
        console.error(err);
    //resultsView.renderError();
    }
}
async function controlResults(key, pageNum) {
    try {
        (0, _resultsViewDefault.default).renderSpinner();
        await (0, _serviceDefault.default).searchRecipe(key);
        const results = await (0, _serviceDefault.default).recipesOnPage(pageNum);
        (0, _resultsViewDefault.default).render(results);
    } catch (err) {
        throw err;
    }
}
async function controlRecipe() {
    try {
        // 1. Get recipe id
        const id = window.location.hash.slice(1);
        if (!id) return;
        // 2. Render spinner
        (0, _recipeViewJsDefault.default).renderSpinner();
        // 3. Load recipe data and render it
        await (0, _serviceDefault.default).setCurrentRecipe(id);
        (0, _recipeViewJsDefault.default).render((0, _serviceDefault.default).currentRecipe);
    } catch (err) {
        console.error(err);
    //recipeView.renderError();
    }
}
// @direction: can only be "prev" or "next"
async function controlPage(direction) {
    try {
        // 1. Pass change to the app
        (0, _serviceDefault.default).pagination(direction);
        // 2. Render new results and new pagination
        const results = await (0, _serviceDefault.default).recipesOnPage((0, _serviceDefault.default).currentSearchPage);
        (0, _resultsViewDefault.default).render(results);
        (0, _paginationViewDefault.default).render((0, _serviceDefault.default).hasPrevious, (0, _serviceDefault.default).hasNext, (0, _serviceDefault.default).currentSearchPage);
    } catch (err) {
        console.error(err);
    //return;
    }
}
function controlServings(goUp) {
    // 1. Get goup or godown
    // 2. Calculate new ingredient.quantity
    if ((0, _serviceDefault.default).updateServings(goUp)) // 3. Render recipe
    (0, _recipeViewJsDefault.default).update((0, _serviceDefault.default).currentRecipe);
}
function controlBookmark(id) {
    // 1. Get recipe id
    // 2. Pass it back to the server and store it
    (0, _serviceDefault.default).toggleBookmark(id);
    const bookmarks = (0, _serviceDefault.default).bookmarks;
    // 3. Update bookmark view and button view
    (0, _bookmarksViewDefault.default).render(bookmarks);
    (0, _recipeViewJsDefault.default).toggleButton();
}
function controlLocalBookmarks() {
    // Get local storage data and render bookmarks
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    (0, _serviceDefault.default).bookmarks = bookmarks;
    (0, _bookmarksViewDefault.default).render(bookmarks);
}
function init() {
    (0, _bookmarksViewDefault.default).addHandler(controlLocalBookmarks);
    (0, _recipeViewJsDefault.default).addHandler(controlRecipe);
    (0, _recipeViewJsDefault.default).addServingsHandler(controlServings);
    (0, _recipeViewJsDefault.default).addBookmarksHandler(controlBookmark);
    (0, _searchViewDefault.default).addHandler(controlSearch);
    (0, _paginationViewDefault.default).addHandler(controlPage);
}
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./view/recipeView.js":"7Olh7","./view/resultsView":"46Nfk","./view/searchView":"blwqv","./view/paginationView":"9Reww","./view/bookmarksView":"uOrlR","./model/service":"f0uOq"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gSXXb":[function(require,module,exports) {
var global = require("c877dcf7c6516556");
var DESCRIPTORS = require("552374ce9aab72bb");
var defineBuiltInAccessor = require("46b5b2489c7b526c");
var regExpFlags = require("e92156a2c6495f37");
var fails = require("b0a1c26a0ec96c04");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"c877dcf7c6516556":"i8HOC","552374ce9aab72bb":"92ZIi","46b5b2489c7b526c":"592rH","e92156a2c6495f37":"9bz1x","b0a1c26a0ec96c04":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("fe0c504b52198ceb");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"fe0c504b52198ceb":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("4ce086f94e5ce61b");
var defineProperty = require("858df93847d39680");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"4ce086f94e5ce61b":"cTB4k","858df93847d39680":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var uncurryThis = require("c2c4ef5607c89cfc");
var fails = require("2978c1dfa9701cd4");
var isCallable = require("100fb851939568c6");
var hasOwn = require("6bb2a1fc12aae1f8");
var DESCRIPTORS = require("cec56006c8891652");
var CONFIGURABLE_FUNCTION_NAME = require("86a11712b9588e09").CONFIGURABLE;
var inspectSource = require("ee50f1fba0aceb0d");
var InternalStateModule = require("acffbcce33aa422f");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"c2c4ef5607c89cfc":"7GlkT","2978c1dfa9701cd4":"hL6D2","100fb851939568c6":"l3Kyn","6bb2a1fc12aae1f8":"gC2Q5","cec56006c8891652":"92ZIi","86a11712b9588e09":"l6Kgd","ee50f1fba0aceb0d":"9jh7O","acffbcce33aa422f":"7AMlF"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("efedea27f9015a2d");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"efedea27f9015a2d":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("fba26ee0dc84a184");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"fba26ee0dc84a184":"hL6D2"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("f0eeb04870f16ed");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"f0eeb04870f16ed":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("9d5303b82eb6f210");
var toObject = require("d998ef6560ee67a1");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"9d5303b82eb6f210":"7GlkT","d998ef6560ee67a1":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("50241b4e86e02884");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"50241b4e86e02884":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("3e27cae66c16c4c4");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"3e27cae66c16c4c4":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("37bbca125d1594e3");
var hasOwn = require("10d6352b18a3c576");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"37bbca125d1594e3":"92ZIi","10d6352b18a3c576":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("99b1cdbf1b9683d3");
var isCallable = require("92ce2b4b46b9a76f");
var store = require("e1e5c8fe492262e1");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"99b1cdbf1b9683d3":"7GlkT","92ce2b4b46b9a76f":"l3Kyn","e1e5c8fe492262e1":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("8fa13d256305d4c3");
var defineGlobalProperty = require("b2c2f3f294c83633");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"8fa13d256305d4c3":"i8HOC","b2c2f3f294c83633":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("4ec68999bfa9c5bd");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"4ec68999bfa9c5bd":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("ececbbee7d0c4151");
var global = require("70cdbb1ac40a44f9");
var isObject = require("f1d879bf440ba6d1");
var createNonEnumerableProperty = require("6ddb696fb80cee00");
var hasOwn = require("353d3123c9e76725");
var shared = require("4dd1be76c60727f8");
var sharedKey = require("98872bbc6cbf236e");
var hiddenKeys = require("415bca034e63a66f");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"ececbbee7d0c4151":"2PZTl","70cdbb1ac40a44f9":"i8HOC","f1d879bf440ba6d1":"Z0pBo","6ddb696fb80cee00":"8CL42","353d3123c9e76725":"gC2Q5","4dd1be76c60727f8":"l4ncH","98872bbc6cbf236e":"eAjGz","415bca034e63a66f":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("dff6e3aa06ff5c18");
var isCallable = require("9f9aa2ee629dab90");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"dff6e3aa06ff5c18":"i8HOC","9f9aa2ee629dab90":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("7f6e0f5a61fdd70a");
var $documentAll = require("2e46a5559ff6bf5a");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"7f6e0f5a61fdd70a":"l3Kyn","2e46a5559ff6bf5a":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("98bca77241fa9b1a");
var definePropertyModule = require("c464bc7fd89b0a91");
var createPropertyDescriptor = require("3b7eb9fb78357be3");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"98bca77241fa9b1a":"92ZIi","c464bc7fd89b0a91":"iJR4w","3b7eb9fb78357be3":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("b3771fa04fbc8dc2");
var IE8_DOM_DEFINE = require("7d2067ca2cb7c75");
var V8_PROTOTYPE_DEFINE_BUG = require("8208a1dc240fd445");
var anObject = require("98268d5edc53610b");
var toPropertyKey = require("c4c460746b3948f4");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"b3771fa04fbc8dc2":"92ZIi","7d2067ca2cb7c75":"qS9uN","8208a1dc240fd445":"ka1Un","98268d5edc53610b":"4isCr","c4c460746b3948f4":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("89f3b773a8681412");
var fails = require("913c6595c90c3d6");
var createElement = require("27f97aad6ced96b");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"89f3b773a8681412":"92ZIi","913c6595c90c3d6":"hL6D2","27f97aad6ced96b":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("647236dc41f9ddb");
var isObject = require("72fd474af13ae6dc");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"647236dc41f9ddb":"i8HOC","72fd474af13ae6dc":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("4be94e9eb80cda5b");
var fails = require("c5adb9f73ed82a19");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"4be94e9eb80cda5b":"92ZIi","c5adb9f73ed82a19":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("dd0d3606d8844fe4");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"dd0d3606d8844fe4":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("a6f7c0ec413b1cdb");
var isSymbol = require("3f00218b25484689");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"a6f7c0ec413b1cdb":"a2mK1","3f00218b25484689":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("e3715b6d626bf167");
var isObject = require("7e5b433a07bd070b");
var isSymbol = require("512c5cb1065c52de");
var getMethod = require("f77addc6310ee84d");
var ordinaryToPrimitive = require("8ae9175305ccf379");
var wellKnownSymbol = require("7087a5962d3025fe");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"e3715b6d626bf167":"d7JlP","7e5b433a07bd070b":"Z0pBo","512c5cb1065c52de":"4aV4F","f77addc6310ee84d":"9Zfiw","8ae9175305ccf379":"7MME2","7087a5962d3025fe":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("f6838bb89fd24039");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"f6838bb89fd24039":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("f70da23bab180d3");
var isCallable = require("d65960d5f1747a25");
var isPrototypeOf = require("644b53430d512246");
var USE_SYMBOL_AS_UID = require("63744e1ab1d685b8");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"f70da23bab180d3":"6ZUSY","d65960d5f1747a25":"l3Kyn","644b53430d512246":"3jtKQ","63744e1ab1d685b8":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("83b46e7615974175");
var isCallable = require("3898d47b6ec5251");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"83b46e7615974175":"i8HOC","3898d47b6ec5251":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("672e77ed56944591");
module.exports = uncurryThis({}.isPrototypeOf);

},{"672e77ed56944591":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("866b2cb69f1eb8b7");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"866b2cb69f1eb8b7":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("c4dac83c367568d7");
var fails = require("68e09f0f134d24d6");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"c4dac83c367568d7":"bjFlO","68e09f0f134d24d6":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("46d17d554bd08e23");
var userAgent = require("60fa9c6306fba5d4");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"46d17d554bd08e23":"i8HOC","60fa9c6306fba5d4":"73xBt"}],"73xBt":[function(require,module,exports) {
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("5f779fe23ad8d625");
var isNullOrUndefined = require("5f2fddbfa77569fc");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"5f779fe23ad8d625":"gOMir","5f2fddbfa77569fc":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("d4712d11f6f54d47");
var tryToString = require("5068edf5adb4b204");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"d4712d11f6f54d47":"l3Kyn","5068edf5adb4b204":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("62182ba072d5eafa");
var isCallable = require("f2639135d4b9fe1e");
var isObject = require("3c865a94b937faa9");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"62182ba072d5eafa":"d7JlP","f2639135d4b9fe1e":"l3Kyn","3c865a94b937faa9":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("29f24e6bc8da1d96");
var shared = require("d7fce1c321205203");
var hasOwn = require("6ea5e1ae3d427baf");
var uid = require("6b343ce248e79c73");
var NATIVE_SYMBOL = require("250541b5583ce58");
var USE_SYMBOL_AS_UID = require("dee7b36128b5e7a0");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"29f24e6bc8da1d96":"i8HOC","d7fce1c321205203":"i1mHK","6ea5e1ae3d427baf":"gC2Q5","6b343ce248e79c73":"a3SEE","250541b5583ce58":"8KyTD","dee7b36128b5e7a0":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("46f61c7b264cc2cf");
var store = require("55c4a95d23d77ec4");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.30.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"46f61c7b264cc2cf":"5ZsyC","55c4a95d23d77ec4":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("5d2b7619fedfbcca");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5d2b7619fedfbcca":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("772897fe4d6714ef");
var uid = require("17f35123f059dca6");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"772897fe4d6714ef":"i1mHK","17f35123f059dca6":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("a51f55dd1dc6097a");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"a51f55dd1dc6097a":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("3f91d5b050631867");
require("da477ad0bb74b4b3");

},{"3f91d5b050631867":"fOGFr","da477ad0bb74b4b3":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("285adec882d88d62");
var global = require("e699a4136e48135c");
var clearImmediate = require("ef49518bc74f8a68").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"285adec882d88d62":"dIGt4","e699a4136e48135c":"i8HOC","ef49518bc74f8a68":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("df4d43e3b3053a14");
var getOwnPropertyDescriptor = require("409c8936111227fe").f;
var createNonEnumerableProperty = require("19b79662d770f076");
var defineBuiltIn = require("461f403b58714143");
var defineGlobalProperty = require("6344743cf17cbfeb");
var copyConstructorProperties = require("c2f9e09c85af6ed6");
var isForced = require("f85a9e71bb54dc13");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"df4d43e3b3053a14":"i8HOC","409c8936111227fe":"lk5NI","19b79662d770f076":"8CL42","461f403b58714143":"6XwEX","6344743cf17cbfeb":"ggjnO","c2f9e09c85af6ed6":"9Z12i","f85a9e71bb54dc13":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("16c1391b79793a87");
var call = require("b8d66c55f1cbe995");
var propertyIsEnumerableModule = require("b2ebb847c2e73d4e");
var createPropertyDescriptor = require("571a9a7926d8514a");
var toIndexedObject = require("12e552a80bed936b");
var toPropertyKey = require("a5e65f58562d2441");
var hasOwn = require("fced3197a49c37d9");
var IE8_DOM_DEFINE = require("c337d27bba220312");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"16c1391b79793a87":"92ZIi","b8d66c55f1cbe995":"d7JlP","b2ebb847c2e73d4e":"7SuiS","571a9a7926d8514a":"1lpav","12e552a80bed936b":"jLWwQ","a5e65f58562d2441":"5XWKd","fced3197a49c37d9":"gC2Q5","c337d27bba220312":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("75c502067998e28c");
var requireObjectCoercible = require("1591f0dbfbb22f96");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"75c502067998e28c":"kPk5h","1591f0dbfbb22f96":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("b041911e18a47e99");
var fails = require("50206b3a01c64936");
var classof = require("36ce33ffa2c3d09a");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"b041911e18a47e99":"7GlkT","50206b3a01c64936":"hL6D2","36ce33ffa2c3d09a":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("1777b928548c3894");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1777b928548c3894":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("850eaf3228667379");
var definePropertyModule = require("63b1b6458a68cae7");
var makeBuiltIn = require("c5980778ddbe7fa9");
var defineGlobalProperty = require("271a1b44fb5d6f0d");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"850eaf3228667379":"l3Kyn","63b1b6458a68cae7":"iJR4w","c5980778ddbe7fa9":"cTB4k","271a1b44fb5d6f0d":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("fd9a221e0f2aeb5");
var ownKeys = require("2427d0352a695658");
var getOwnPropertyDescriptorModule = require("12c07483d4ccdb95");
var definePropertyModule = require("802576ceca7eaf9");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"fd9a221e0f2aeb5":"gC2Q5","2427d0352a695658":"1CX1A","12c07483d4ccdb95":"lk5NI","802576ceca7eaf9":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("2eb2047ee06852d7");
var uncurryThis = require("38d8d57c45431759");
var getOwnPropertyNamesModule = require("812a299296616791");
var getOwnPropertySymbolsModule = require("2f42798bc4ce4f19");
var anObject = require("7fe75caf44e78d00");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"2eb2047ee06852d7":"6ZUSY","38d8d57c45431759":"7GlkT","812a299296616791":"fjY04","2f42798bc4ce4f19":"4DWO3","7fe75caf44e78d00":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("d03ec5a32b9a278e");
var enumBugKeys = require("bc2c33a6c1a49e6");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"d03ec5a32b9a278e":"hl5T1","bc2c33a6c1a49e6":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("9616a9c98cff8bdc");
var hasOwn = require("65a165710b3a88ad");
var toIndexedObject = require("4ce301ca3df923a7");
var indexOf = require("10e78a317fe0a185").indexOf;
var hiddenKeys = require("fdfcaec164c68a9f");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"9616a9c98cff8bdc":"7GlkT","65a165710b3a88ad":"gC2Q5","4ce301ca3df923a7":"jLWwQ","10e78a317fe0a185":"n5IsC","fdfcaec164c68a9f":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("a3f9e3897b131f6");
var toAbsoluteIndex = require("e77a3874df3c3b1f");
var lengthOfArrayLike = require("4e6e51acc2fd6d6d");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"a3f9e3897b131f6":"jLWwQ","e77a3874df3c3b1f":"5yh27","4e6e51acc2fd6d6d":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("87e16f216380f37");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"87e16f216380f37":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("fa966cba665bb89e");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"fa966cba665bb89e":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("6a8f6d81f0c02c3c");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"6a8f6d81f0c02c3c":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("b02ff83f5343aab6");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"b02ff83f5343aab6":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("edac4311c54ec89d");
var isCallable = require("c017948e30ce7581");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"edac4311c54ec89d":"hL6D2","c017948e30ce7581":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("fa0da434ad0626b1");
var apply = require("aa223f2856b5147c");
var bind = require("ebf6266c3126af50");
var isCallable = require("9374da4c6f3aa51");
var hasOwn = require("87f67f52a13da256");
var fails = require("5b7a1be2a6e17add");
var html = require("ce683a954c3a1002");
var arraySlice = require("39f1b6852ad6ea18");
var createElement = require("823db69857d15597");
var validateArgumentsLength = require("41e51bc9c7d35953");
var IS_IOS = require("71f4069ec2392ee9");
var IS_NODE = require("39d4510c2ed4783f");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"fa0da434ad0626b1":"i8HOC","aa223f2856b5147c":"148ka","ebf6266c3126af50":"7vpmS","9374da4c6f3aa51":"l3Kyn","87f67f52a13da256":"gC2Q5","5b7a1be2a6e17add":"hL6D2","ce683a954c3a1002":"2pze4","39f1b6852ad6ea18":"RsFXo","823db69857d15597":"4bOHl","41e51bc9c7d35953":"b9O3D","71f4069ec2392ee9":"bzGah","39d4510c2ed4783f":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("6425f4ca1df1a892");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"6425f4ca1df1a892":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("f169a9d6f663f45c");
var aCallable = require("ec8f3dd50657aba5");
var NATIVE_BIND = require("14b1083890989cfc");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"f169a9d6f663f45c":"5Hioa","ec8f3dd50657aba5":"gOMir","14b1083890989cfc":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("7c891048f199eb0a");
var uncurryThis = require("c15835d2b71c5bf3");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"7c891048f199eb0a":"bdfmm","c15835d2b71c5bf3":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("ecf5921ebbcc3479");
module.exports = getBuiltIn("document", "documentElement");

},{"ecf5921ebbcc3479":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("a3cabf7353f72d3d");
module.exports = uncurryThis([].slice);

},{"a3cabf7353f72d3d":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("d2e399ff00b00486");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d2e399ff00b00486":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var process = require("d60ef7af1ae5ec3c");
var classof = require("58231d7c680fafea");
module.exports = typeof process != "undefined" && classof(process) == "process";

},{"d60ef7af1ae5ec3c":"d5jf4","58231d7c680fafea":"bdfmm"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"l7FDS":[function(require,module,exports) {
var $ = require("d62ce780180c0cf");
var global = require("64c33bc08ee3dcb0");
var setTask = require("5e80394027da2fc1").set;
var schedulersFix = require("9739231be68af9ec");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"d62ce780180c0cf":"dIGt4","64c33bc08ee3dcb0":"i8HOC","5e80394027da2fc1":"7jDg7","9739231be68af9ec":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("62dfe5fa754e149d");
var apply = require("8d7f78d3af07689b");
var isCallable = require("ac709c60157ccca6");
var ENGINE_IS_BUN = require("2a924998bd6f1e6d");
var USER_AGENT = require("3e12d4e2acd2de9c");
var arraySlice = require("9cab96b6c97bd08e");
var validateArgumentsLength = require("f6c055a13d7e8fc3");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"62dfe5fa754e149d":"i8HOC","8d7f78d3af07689b":"148ka","ac709c60157ccca6":"l3Kyn","2a924998bd6f1e6d":"2BA6V","3e12d4e2acd2de9c":"73xBt","9cab96b6c97bd08e":"RsFXo","f6c055a13d7e8fc3":"b9O3D"}],"2BA6V":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"7Olh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class RecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We couldn't find that recipe. \nPlease try another one :)";
    render(recipe) {
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", this._generateHTML(recipe));
    }
    update(recipe) {
        super.update(this._generateHTML(recipe));
    }
    toggleButton() {
        const button = this._parentElement.querySelector(".btn--round use");
        if (button.href.baseVal.slice(-4) === "fill") button.setAttribute("href", `${(0, _iconsSvgDefault.default)}#icon-bookmark`);
        else button.setAttribute("href", `${(0, _iconsSvgDefault.default)}#icon-bookmark-fill`);
    }
    addHandler(handler) {
        [
            "hashchange",
            "load"
        ].forEach((e)=>window.addEventListener(e, handler));
    }
    addServingsHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            const clicked = e.target.closest(".btn--increase-servings");
            if (!clicked) return;
            const goUp = clicked.dataset.goup === "true";
            handler(goUp);
        });
    }
    addBookmarksHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            const clicked = e.target.closest(".btn--round");
            if (!clicked) return;
            const id = this._parentElement.querySelector(".recipe__details").dataset.id;
            handler(id);
        });
    }
    renderError() {
        super.renderError(this._errorMessage);
    }
    _generateHTML(recipe) {
        return `<figure class="recipe__fig">
      <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
      </figure>

      <div class="recipe__details" data-id="${recipe.id}">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-goup="false">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-goup="true">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">

      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${0, _iconsSvgDefault.default}#icon-bookmark${recipe.isBookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      ${this._createHTMLIngredients(recipe)}
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.url}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`;
    }
    _createHTMLIngredient(ingredient) {
        return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ingredient.quantity ? (0, _fractyDefault.default)(ingredient.quantity) : ""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.description}
      </div>
      </li>`;
    }
    _createHTMLIngredients(recipe) {
        let html = `<ul class="recipe__ingredient-list">`;
        recipe.ingredients.forEach((ingredient)=>{
            html += this._createHTMLIngredient(ingredient);
        });
        html += `</ul>`;
        return html;
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view":"4wVyX","fracty":"hJO4d"}],"loVOp":[function(require,module,exports) {
module.exports = require("db352f825f6ed283").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"db352f825f6ed283":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4wVyX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _parentElement = null;
    _errorMessage = "";
    /**
   * Render the received data to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @returns {undefined}
   * @this {Object} View instance
   * @author Jiayuan Zhang
   */ render(data) {}
    update(markup) {
        const newDOM = document.createRange().createContextualFragment(markup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEle, i)=>{
            const curEle = curElements[i];
            // NOTE: whitespace in html is also a text node!!!!!!!!!!!!!!
            if (!newEle.isEqualNode(curEle) && newEle.firstChild && newEle.firstChild.nodeType === Node.TEXT_NODE && newEle.firstChild.nodeValue.trim() !== "") curEle.textContent = newEle.textContent;
            if (!newEle.isEqualNode(curEle)) Array.from(newEle.attributes).forEach((attr)=>curEle.setAttribute(attr.name, attr.value));
        });
    }
    addHandler(handler) {}
    renderSpinner() {
        const html = `<div class="spinner">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
          </svg>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
    renderError(message) {
        const html = `<div class="error">
            <div>
                <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                </svg>
            </div>
      <p>${message}</p>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
    _generateHTML(data) {}
    _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"46Nfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ResultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query!\nPlease try again :)";
    render(results) {
        this._clear();
        results.forEach((result)=>{
            this._parentElement.append(this._createElementReult(result));
        });
    }
    renderError() {
        super.renderError(this._errorMessage);
    }
    _createElementReult(result) {
        const item = document.createElement("li");
        item.classList.add("preview");
        item.innerHTML = // NOTE: href there will trigger recipeView event handler since it changes the hash
        `<a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
              <img src="${result.imageUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
              <h4 class="preview__title">${result.title}</h4>
              <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>`;
        return item;
    }
}
exports.default = new ResultsView();

},{"./view":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blwqv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SearchView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".search");
    _errorMessage = "";
    addHandler(handler) {
        this._parentElement.addEventListener("submit", (e)=>{
            e.preventDefault();
            handler();
        });
    }
    getQuery() {
        const field = this._parentElement.querySelector(".search__field");
        const query = field.value;
        field.value = "";
        return query;
    }
}
exports.default = new SearchView();

},{"./view":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Reww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class Pagination extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    render(hasPrevious, hasNext, pageNum) {
        this._clear();
        if (hasPrevious) {
            const html = `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${pageNum - 1}</span>
            </button>`;
            this._parentElement.insertAdjacentHTML("afterbegin", html);
        }
        if (hasNext) {
            const html = `<button class="btn--inline pagination__btn--next">
                <span>Page ${pageNum + 1}</span>
                <svg class="search__icon">
                  <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-right"></use>
                </svg>
                </button>`;
            this._parentElement.insertAdjacentHTML("afterbegin", html);
        }
    }
    addHandler(handler) {
        // Event delegation
        this._parentElement.addEventListener("click", (e)=>{
            const clicked = e.target.closest(".btn--inline");
            if (!clicked) return;
            const direction = clicked.classList.item(1).slice(-4);
            handler(direction);
        });
    }
}
exports.default = new Pagination();

},{"./view":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"uOrlR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    render(bookmarks) {
        let html = "";
        if (bookmarks.size === 0) html = `<div class="message">
            <div>
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-smile"></use>
              </svg>
            </div>
            <p>
              No bookmarks yet. Find a nice recipe and bookmark it :)
            </p>
            </div>`;
        else html = this._generateHTML(bookmarks);
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
    addHandler(handler) {
        window.addEventListener("load", handler);
    }
    _generateHTML(bookmarks) {
        let html = "";
        bookmarks.forEach((bm)=>{
            html += `<li class="preview">
            <a class="preview__link" href="#${bm.id}">
              <figure class="preview__fig">
                <img src="${bm.imageUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__name">
                  ${bm.title}
                </h4>
                <p class="preview__publisher">${bm.publisher}</p>
              </div>
            </a>
          </li>`;
        });
        return html;
    }
}
exports.default = new BookmarksView();

},{"./view":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"f0uOq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _recipe = require("./recipe");
var _recipeDefault = parcelHelpers.interopDefault(_recipe);
var _helper = require("../helper");
var _config = require("../config");
class Service {
    #bookmarks = new Set([]);
    #recipes = [];
    #currentRecipe = null;
    #currentSearchPage = 0;
    #hasPrevious = false;
    #hasNext = false;
    constructor(){}
    get bookmarks() {
        return this.#bookmarks;
    }
    get currentRecipe() {
        const { id , title , servings , imageUrl , url , ingredients , publisher , cookingTime , isGeneratedByUser , isBookmarked  } = this.#currentRecipe;
        return {
            id,
            title,
            servings,
            imageUrl,
            url,
            ingredients,
            publisher,
            cookingTime,
            isGeneratedByUser,
            isBookmarked
        };
    }
    get hasPrevious() {
        return this.#hasPrevious;
    }
    get hasNext() {
        return this.#hasNext;
    }
    get currentSearchPage() {
        return this.#currentSearchPage;
    }
    set bookmarks(bms) {
        return this.#bookmarks = new Set(bms);
    }
    async setCurrentRecipe(id) {
        this.#currentRecipe = await this._findRecipeById(id);
        this.#bookmarks.forEach((bm)=>{
            if (bm.id === id) this.#currentRecipe.isBookmarked = true;
        });
    }
    async searchRecipe(str = "") {
        try {
            // Reset the recipes array first whenever a search occurs
            this.#recipes = [];
            const url = `${(0, _config.PATH_FORKIFY)}?search=${str}&key=${(0, _config.KEY_FORKIFY)}`;
            // Fetch data
            const data = await (0, _helper.AJAX)(url);
            const dataRecipes = data.recipes;
            // Initialise app's states
            await this._mapDataToRecipes(dataRecipes);
            this.#currentSearchPage = 1;
            this._hasPreviousOrNext();
        } catch (err) {
            throw err;
        }
    }
    // Generate output data from the recipe objects on current page
    recipesOnPage(pageNum) {
        return new Promise((resolve)=>{
            resolve(this.#recipes.filter((_, i)=>i < pageNum * (0, _config.MAX_RECIPES_ON_SEARCH_PAGE) && i >= (pageNum - 1) * (0, _config.MAX_RECIPES_ON_SEARCH_PAGE)).map((recipe)=>{
                const { id , imageUrl , title , publisher  } = recipe;
                return {
                    id,
                    imageUrl,
                    title,
                    publisher
                };
            }));
        });
    }
    pagination(direction) {
        direction === "prev" ? this.#currentSearchPage-- : this.#currentSearchPage++;
        this._hasPreviousOrNext();
    }
    updateServings(goUp) {
        // check servings
        if (!goUp && this.#currentRecipe.servings === 1) return false;
        this.#currentRecipe.ingredients.forEach((ingredient)=>{
            if (isFinite(ingredient.quantity)) ingredient.quantity *= goUp ? (this.#currentRecipe.servings + 1) / this.#currentRecipe.servings : (this.#currentRecipe.servings - 1) / this.#currentRecipe.servings;
        });
        goUp ? this.#currentRecipe.servings++ : this.#currentRecipe.servings--;
        return true;
    }
    toggleBookmark(id) {
        // Check if already has this bookmark
        let hasThisBookmark = false;
        let bookmark = null;
        this.#bookmarks.forEach((bm)=>{
            if (bm.id === id) {
                hasThisBookmark = true;
                bookmark = bm;
            }
        });
        // Toggle bookmark in the array and local storage
        if (hasThisBookmark) this.#bookmarks.delete(bookmark);
        else this.#bookmarks.add(this.currentRecipe);
        localStorage.setItem("bookmarks", JSON.stringify(Array.from(this.#bookmarks)));
    }
    // Helpers
    // Get detailed recipe by id
    async _findRecipeById(id) {
        const url = `${(0, _config.PATH_FORKIFY)}/${id}?key=${(0, _config.KEY_FORKIFY)}`;
        const data = await (0, _helper.AJAX)(url);
        return new (0, _recipeDefault.default)(data.recipe);
    }
    _mapDataToRecipes(dataRecipes) {
        return new Promise((resolve)=>{
            dataRecipes.forEach((dataRecipe)=>this.#recipes.push(new (0, _recipeDefault.default)(dataRecipe)) // missed fields == undefined
            );
            resolve();
        });
    }
    _hasPreviousOrNext() {
        this.#hasPrevious = this.#currentSearchPage > 1;
        this.#hasNext = this.#currentSearchPage * (0, _config.MAX_RECIPES_ON_SEARCH_PAGE) < this.#recipes.length;
    }
}
const service = new Service();
exports.default = service;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./recipe":"f9UiS","../helper":"lVRAz","../config":"k5Hzs"}],"f9UiS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Recipe {
    #id = null;
    #title = "";
    #url = "";
    #imageUrl = "";
    #publisher = "";
    #cookingTime = 0;
    #servings = 1;
    #ingredients = [];
    #isGeneratedByUser = false;
    #isBookmarked = false;
    constructor(recipe){
        this.#id = recipe.id;
        this.#title = recipe.title;
        this.#url = recipe.source_url;
        this.#imageUrl = recipe.image_url;
        this.#publisher = recipe.publisher;
        this.#cookingTime = recipe.cooking_time;
        this.#servings = recipe.servings;
        this.#ingredients = recipe.ingredients;
    }
    // Getters
    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get url() {
        return this.#url;
    }
    get imageUrl() {
        return this.#imageUrl;
    }
    get publisher() {
        return this.#publisher;
    }
    get cookingTime() {
        return this.#cookingTime;
    }
    get servings() {
        return this.#servings;
    }
    get ingredients() {
        return this.#ingredients;
    }
    get isGeneratedByUser() {
        return this.#isGeneratedByUser;
    }
    get isBookmarked() {
        return this.#isBookmarked;
    }
    set servings(ser) {
        return this.#servings = ser;
    }
    set isBookmarked(isBm) {
        return this.#isBookmarked = isBm;
    }
}
exports.default = Recipe;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Promisify timeout
parcelHelpers.export(exports, "timeout", ()=>timeout);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
function timeout(s) {
    return new Promise(function(_, reject) {
        setTimeout(()=>reject(new Error(`Request took too long! Timeout after ${s} second`)), s * 1000);
    });
}
async function AJAX(url = "") {
    const response = await Promise.race([
        fetch(url),
        timeout((0, _config.TIMEOUT_SEC))
    ]);
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    const data = await response.json();
    // Look at the json file to figure out why it is data.data
    return data.data;
}

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
// Global variables
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY_FORKIFY", ()=>KEY_FORKIFY);
parcelHelpers.export(exports, "PATH_FORKIFY", ()=>PATH_FORKIFY);
parcelHelpers.export(exports, "MAX_RECIPES_ON_SEARCH_PAGE", ()=>MAX_RECIPES_ON_SEARCH_PAGE);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
const KEY_FORKIFY = "98bf29e3-cf72-40ef-b5aa-0dc56cd5bcf7";
const PATH_FORKIFY = "https://forkify-api.herokuapp.com/api/v2/recipes";
const MAX_RECIPES_ON_SEARCH_PAGE = 10;
const TIMEOUT_SEC = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
