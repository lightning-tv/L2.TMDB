/*
 App version: 0.0.1
 SDK version: 4.8.1
 CLI version: 2.14.2

 gmtDate: Tue, 27 Aug 2024 01:54:47 GMT
*/
var APP_com_metrological_app_TheMovieDb = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/deepmerge/dist/cjs.js"(exports, module) {
      "use strict";
      var isMergeableObject = function isMergeableObject2(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }
      var canUseSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
      }
      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }
      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
          return target.propertyIsEnumerable(symbol);
        }) : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_) {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
      }
      function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
          });
        }
        getKeys(source).forEach(function(key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }
          if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
          }
        });
        return destination;
      }
      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject;
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }
      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }
        return array.reduce(function(prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };
      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
    }
  });

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // node_modules/@lightningjs/sdk/src/Settings/index.js
  var settings = {};
  var subscribers = {};
  var initSettings = (appSettings, platformSettings) => {
    settings["app"] = appSettings;
    settings["platform"] = platformSettings;
    settings["user"] = {};
  };
  var publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach((subscriber) => subscriber(value));
  };
  var dotGrab = function() {
    let obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : void 0;
    if (obj === null)
      return void 0;
    const keys = key.split(".");
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== void 0 ? obj[keys[i]] : {};
    }
    return typeof obj === "object" && obj !== null ? Object.keys(obj).length ? obj : void 0 : obj;
  };
  var Settings_default = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      const val = dotGrab(settings[type], key);
      return val !== void 0 ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings["user"][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex((cb) => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    }
  };

  // node_modules/@lightningjs/sdk/src/Log/index.js
  var prepLog = (type, args) => {
    const colors2 = {
      Info: "green",
      Debug: "gray",
      Warn: "orange",
      Error: "red"
    };
    args = Array.from(args);
    return ["%c" + (args.length > 1 && typeof args[0] === "string" ? args.shift() : type), "background-color: " + colors2[type] + "; color: white; padding: 2px 4px; border-radius: 2px", args];
  };
  var Log_default = {
    info() {
      Settings_default.get("platform", "log") && console.log.apply(console, prepLog("Info", arguments));
    },
    debug() {
      Settings_default.get("platform", "log") && console.debug.apply(console, prepLog("Debug", arguments));
    },
    error() {
      Settings_default.get("platform", "log") && console.error.apply(console, prepLog("Error", arguments));
    },
    warn() {
      Settings_default.get("platform", "log") && console.warn.apply(console, prepLog("Warn", arguments));
    }
  };

  // node_modules/@michieljs/execute-as-promise/src/execute-as-promise.js
  var execute_as_promise_default = function(method) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    let result;
    if (method && typeof method === "function") {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    if (result !== null && typeof result === "object" && result.then && typeof result.then === "function") {
      return result;
    } else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  };

  // node_modules/@lightningjs/sdk/src/Metrics/index.js
  var sendMetric = (type, event, params) => {
    Log_default.info("Sending metric", type, event, params);
  };
  var initMetrics = (config) => {
    sendMetric = config.sendMetric;
  };
  var metrics = {
    app: ["launch", "loaded", "ready", "close"],
    page: ["view", "leave"],
    user: ["click", "input"],
    media: [
      "abort",
      "canplay",
      "ended",
      "pause",
      "play",
      // with some videos there occur almost constant suspend events ... should investigate
      // 'suspend',
      "volumechange",
      "waiting",
      "seeking",
      "seeked"
    ]
  };
  var errorMetric = function(type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, "error", params);
  };
  var Metric = function(type, events2) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return events2.reduce((obj, event) => {
      obj[event] = function(name) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        params = {
          ...options,
          ...name ? {
            name
          } : {},
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  var Metrics = (types) => {
    return Object.keys(types).reduce((obj, type) => {
      type === "media" ? obj[type] = (url) => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics_default = Metrics(metrics);

  // node_modules/@lightningjs/sdk/src/VideoPlayer/events.js
  var events_default = {
    abort: "Abort",
    canplay: "CanPlay",
    canplaythrough: "CanPlayThrough",
    durationchange: "DurationChange",
    emptied: "Emptied",
    encrypted: "Encrypted",
    ended: "Ended",
    error: "Error",
    interruptbegin: "InterruptBegin",
    interruptend: "InterruptEnd",
    loadeddata: "LoadedData",
    loadedmetadata: "LoadedMetadata",
    loadstart: "LoadStart",
    pause: "Pause",
    play: "Play",
    playing: "Playing",
    progress: "Progress",
    ratechange: "Ratechange",
    seeked: "Seeked",
    seeking: "Seeking",
    stalled: "Stalled",
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: "TimeUpdate",
    volumechange: "VolumeChange",
    waiting: "Waiting"
  };

  // node_modules/@lightningjs/sdk/src/helpers/autoSetupMixin.js
  var autoSetupMixin_default = function(sourceObject) {
    let setup2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : () => {
    };
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup2();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === "function") {
        obj[key] = function() {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === "function") {
        obj.__defineGetter__(key, function() {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === "function") {
        obj.__defineSetter__(key, function() {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  };

  // node_modules/@lightningjs/sdk/src/helpers/easeExecution.js
  var timeout = null;
  var easeExecution_default = (cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };

  // node_modules/@lightningjs/sdk/src/Utils/index.js
  var basePath;
  var proxyUrl;
  var initUtils = (config) => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || "/"));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils_default = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return proxyUrl ? proxyUrl + "?" + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  var ensureUrlWithProtocol = (url) => {
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  var makeFullStaticPath = function() {
    let pathname = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
    let path = arguments.length > 1 ? arguments[1] : void 0;
    path = path.charAt(path.length - 1) !== "/" ? path + "/" : path;
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === "/") {
      return path;
    } else {
      pathname = cleanUpPathName(pathname);
      path = path.charAt(0) === "." ? path.substr(1) : path;
      path = path.charAt(0) !== "/" ? "/" + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = (pathname) => {
    if (pathname.slice(-1) === "/")
      return pathname.slice(0, -1);
    const parts = pathname.split("/");
    if (parts[parts.length - 1].indexOf(".") > -1)
      parts.pop();
    return parts.join("/");
  };
  var makeQueryString = function(url) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "url";
    options.operator = "metrological";
    options[type] = url;
    return Object.keys(options).map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent("" + options[key]);
    }).join("&");
  };

  // node_modules/@lightningjs/sdk/src/Profile/helpers.js
  var formatLocale = (locale) => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  var getLocale = (defaultValue) => {
    if ("language" in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getLanguage = (defaultValue) => {
    if ("language" in navigator) {
      const language2 = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language2);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getCountryCode = (defaultValue) => {
    if ("language" in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var hasOrAskForGeoLocationPermission = () => {
    return new Promise((resolve) => {
      if (Settings_default.get("platform", "forceBrowserGeolocation") === true)
        resolve(true);
      if ("permissions" in navigator && typeof navigator.permissions.query === "function") {
        navigator.permissions.query({
          name: "geolocation"
        }).then((status) => {
          resolve(status.state === "granted" || status.status === "granted");
        });
      } else {
        resolve(false);
      }
    });
  };
  var getLatLon = (defaultValue) => {
    return new Promise((resolve) => {
      hasOrAskForGeoLocationPermission().then((granted) => {
        if (granted === true) {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              // success
              (result) => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
              // error
              () => resolve(defaultValue),
              // options
              {
                enableHighAccuracy: true,
                timeout: 5e3,
                maximumAge: 0
              }
            );
          } else {
            return queryForLatLon().then((result) => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then((result) => resolve(result || defaultValue));
        }
      });
    });
  };
  var queryForLatLon = () => {
    return new Promise((resolve) => {
      fetch("https://geolocation-db.com/json/").then((response) => response.json()).then((_ref) => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  // node_modules/@lightningjs/sdk/src/Profile/defaults.js
  var defaultProfile = {
    ageRating: "adult",
    city: "New York",
    zipCode: "27505",
    countryCode: () => getCountryCode("US"),
    ip: "127.0.0.1",
    household: "b2244e9d4c04826ccd5a7b2c2a50e7d4",
    language: () => getLanguage("en"),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale("en-US"),
    mac: "00:00:00:00:00:00",
    operator: "metrological",
    platform: "metrological",
    packages: [],
    uid: "ee6723b8-7ab3-462c-8d93-dbf61227998e",
    stbType: "metrological"
  };

  // node_modules/@lightningjs/sdk/src/Profile/index.js
  var getInfo = (key) => {
    const profile = {
      ...defaultProfile,
      ...Settings_default.get("platform", "profile")
    };
    return Promise.resolve(typeof profile[key] === "function" ? profile[key]() : profile[key]);
  };
  var setInfo = (key, params) => {
    if (key in defaultProfile)
      defaultProfile[key] = params;
  };
  var initProfile = (config) => {
    getInfo = config.getInfo;
    setInfo = config.setInfo;
  };

  // ../../../../.nvm/versions/node/v22.2.0/lib/node_modules/@lightningjs/cli/src/alias/lightningjs-core.js
  var lightningjs_core_default = window.lng;

  // node_modules/@lightningjs/sdk/src/Lightning/index.js
  var Lightning_default = lightningjs_core_default;

  // node_modules/@lightningjs/sdk/src/MediaPlayer/index.js
  var events = ["timeupdate", "error", "ended", "loadeddata", "canplay", "play", "playing", "pause", "loadstart", "seeking", "seeked", "encrypted"];
  var mediaUrl = (url) => url;
  var initMediaPlayer = (config) => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  var Mediaplayer = class extends Lightning_default.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings_default.get("platform", "textureMode") || false;
      Log_default.info("Texture mode: " + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", "https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer"].join("\n\n"));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning_default.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag("Video");
    }
    _init() {
      const videoEls = document.getElementsByTagName("video");
      if (videoEls && videoEls.length > 0)
        this.videoEl = videoEls[0];
      else {
        this.videoEl = document.createElement("video");
        this.videoEl.setAttribute("id", "video-player");
        this.videoEl.style.position = "absolute";
        this.videoEl.style.zIndex = "1";
        this.videoEl.style.display = "none";
        this.videoEl.setAttribute("width", "100%");
        this.videoEl.setAttribute("height", "100%");
        this.videoEl.style.visibility = this.textureMode ? "hidden" : "visible";
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach((event) => {
        const handler = (e) => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === "function") {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log_default.info("Deregistering event listeners MediaPlayer");
      events.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage3 = this.stage;
      const gl = stage3.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage3 = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage3.gl;
              const currentTime = (/* @__PURE__ */ new Date()).getTime();
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log_default.error("texImage2d video", e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage3.on("frameStart", this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage3 = this.stage;
        stage3.removeListener("frameStart", this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage3.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this._consumer = settings3.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        settings3 = Object.assign(settings3, this._consumer.getMediaplayerSettings());
      }
      if (!Lightning_default.Utils.equalValues(this._stream, settings3.stream)) {
        if (settings3.stream && settings3.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings3.stream.keySystem.id, settings3.stream.keySystem.config).then((keySystemAccess) => {
            return keySystemAccess.createMediaKeys();
          }).then((createdMediaKeys) => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings3.stream && settings3.stream.src)
              this.open(settings3.stream.src);
          }).catch(() => {
            console.error("Failed to set up MediaKeys");
          });
        } else if (settings3.stream && settings3.stream.src) {
          if (Settings_default.get("app", "hls")) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn("hls-light not included");
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls)
                this._hls = new window.Hls({
                  liveDurationInfinity: true
                });
              this._hls.loadSource(settings3.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = "block";
            }
          } else {
            this.open(settings3.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings3.stream;
      }
      this._setHide(settings3.hide);
      this._setVideoArea(settings3.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag("Video").setSmooth("alpha", hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? "hidden" : "visible";
      }
    }
    open(url) {
      let settings3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      url = mediaUrl(url);
      this._metrics = Metrics_default.media(url);
      Log_default.info("Playing stream", url);
      if (this.application.noVideo) {
        Log_default.info("noVideo option set, so ignoring: " + url);
        return;
      }
      if (this.videoEl.getAttribute("src") === url) {
        this.close();
      }
      this.videoEl.setAttribute("src", url);
      this.videoEl.style.visibility = "hidden";
      this.videoEl.style.display = "none";
      setTimeout(() => {
        this.videoEl.style.display = "block";
        this.videoEl.style.visibility = "visible";
      });
      this._setHide(settings3.hide);
      this._setVideoArea(settings3.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      this.videoEl.pause();
      this.videoEl.removeAttribute("src");
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = "none";
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === "Playing";
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute("src");
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag("Video").tag("VideoTexture");
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (Lightning_default.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision2 = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision2) + "px";
        this.videoEl.style.top = Math.round(videoPos[1] * precision2) + "px";
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision2) + "px";
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision2) + "px";
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2)
        return false;
      if (buf1.byteLength != buf2.byteLength)
        return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++)
        if (dv1[i] != dv2[i])
          return false;
      return true;
    }
    error(args) {
      this._fireConsumer("$mediaplayerError", args);
      this._setState("");
      return "";
    }
    loadeddata(args) {
      this._fireConsumer("$mediaplayerLoadedData", args);
    }
    play(args) {
      this._fireConsumer("$mediaplayerPlay", args);
    }
    playing(args) {
      this._fireConsumer("$mediaplayerPlaying", args);
      this._setState("Playing");
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer("$mediaplayerStart", args);
    }
    loadstart(args) {
      this._fireConsumer("$mediaplayerLoad", args);
    }
    seeked() {
      this._fireConsumer("$mediaplayerSeeked", {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer("$mediaplayerSeeking", {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer("$mediaplayerDurationChange", args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer("$mediaplayerEncrypted", args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer("$mediaplayerProgress", {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer("$mediaplayerEnded", args);
          this._setState("");
        }
        pause(args) {
          this._fireConsumer("$mediaplayerPause", args);
          this._setState("Playing.Paused");
        }
        _clearSrc() {
          this._fireConsumer("$mediaplayerStop", {});
          this._setState("");
        }
        static _states() {
          return [class Paused extends this {
          }];
        }
      }];
    }
  };

  // node_modules/localCookie/module/localCookie.js
  var localCookie = class {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || false, true === this._checkIfLocalStorageWorks() && true !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage)
        return false;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), true);
      } catch (e) {
        return false;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function(e2) {
        return e2.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = /* @__PURE__ */ new Date(), r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach((e) => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
  };
  var localCookie_default = localCookie;

  // node_modules/@lightningjs/sdk/src/Storage/index.js
  var namespace;
  var lc;
  var initStorage = () => {
    namespace = Settings_default.get("platform", "id");
    lc = new localCookie_default();
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/regex.js
  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;
  var stripRegex = function(route) {
    let char = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "R";
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/register.js
  var createRegister = (flags) => {
    const reg = /* @__PURE__ */ new Map();
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach((key) => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  // node_modules/@lightningjs/sdk/src/Router/model/Request.js
  var Request = class {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      let navArgs = arguments.length > 1 ? arguments[1] : void 0;
      let storeCaller = arguments.length > 2 ? arguments[2] : void 0;
      this._hash = hash;
      this._storeCaller = storeCaller;
      this._register = /* @__PURE__ */ new Map();
      this._isCreated = false;
      this._isSharedInstance = false;
      this._cancelled = false;
      this._copiedHistoryState = null;
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        this._storeCaller = navArgs;
      }
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log_default.debug("[router]:", "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/model/Route.js
  var Route = class {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let type = ["on", "before", "after"].reduce((acc, type2) => {
        return isFunction(config[type2]) ? type2 : acc;
      }, void 0);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/route.js
  var getFloor = (route) => {
    return stripRegex(route).split("/").length;
  };
  var getRoutesByFloor = (floor) => {
    const matches = [];
    for (let [route] of routes.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };
  var getRouteByHash = (hash) => {
    hash = hash.replace(/^#/, "");
    const getUrlParts = /(\/?:?[^/]+)/g;
    const candidates = getRoutesByFloor(getFloor(hash));
    const hashParts = hash.match(getUrlParts) || [];
    let regexStore = [];
    let matches = candidates.filter((route) => {
      let isMatching = true;
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        matches = matches.sort((a) => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }
    return false;
  };
  var getValuesFromHash = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    let path = arguments.length > 1 ? arguments[1] : void 0;
    path = stripRegex(path, "");
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, "")));
      }
      return storage;
    }, /* @__PURE__ */ new Map());
  };
  var getOption = (stack, prop) => {
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
  };
  var createRoute = (config) => {
    if (config.path === "$") {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };
  var createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  var getHashByName = (obj) => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  var getRouteByName = (name) => {
    for (let [path, route] of routes.entries()) {
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  var keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes2 = getRoutes();
      if (routes2.has(route)) {
        route = routes2.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has("keepAlive")) {
      return register.get("keepAlive");
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/emit.js
  var emit_default = function(page) {
    let events2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!isArray(events2)) {
      events2 = [events2];
    }
    events2.forEach((e) => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/widgets.js
  var activeWidget = null;
  var getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };
  var updateWidgets = (widgets, page) => {
    const configured = (widgets || []).map((ref) => ref.toLowerCase());
    widgetsHost.forEach((widget) => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit_default(widget, ["activated"], page);
      }
    });
    if (app.state === "Widgets" && activeWidget && !activeWidget.visible) {
      app._setState("");
    }
  };
  var getWidgetByName = (name) => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };
  var focusWidget = (name) => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);
      if (app.state === "Widgets") {
        app.reload(activeWidget);
      } else {
        app._setState("Widgets", [activeWidget]);
      }
    }
  };
  var restoreFocus = () => {
    activeWidget = null;
    app._setState("");
  };
  var getActiveWidget = () => {
    return activeWidget;
  };
  var setActiveWidget = (instance) => {
    activeWidget = instance;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/components.js
  var createComponent = (stage3, type) => {
    return stage3.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/history.js
  var history = [];
  var updateHistory = (request) => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);
    const activeRoute2 = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute2.options, "preventStorage");
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, "");
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig2 = getRouterConfig();
      if (location === -1 || routerConfig2.get("storeSameHash")) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  var locationInHistory = (hash) => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  var getHistoryState = (hash) => {
    let state3 = null;
    if (history.length) {
      if (!hash) {
        const record = history[history.length - 1];
        state3 = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state3 = record.state;
        }
      }
    }
    return state3;
  };
  var replaceHistoryState = function() {
    let state3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : void 0;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state3)) {
      history[location].state = state3;
    }
  };
  var getStateObject = (page, request) => {
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  var getHistory = () => {
    return history.slice(0);
  };
  var setHistory = function() {
    let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  // node_modules/@lightningjs/sdk/src/Application/index.js
  var import_deepmerge = __toESM(require_cjs());

  // node_modules/@lightningjs/sdk/src/Locale/index.js
  var warned = false;
  var deprecated = function() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", "https://rdkcentral.github.io/Lightning-SDK/#/plugins/language"].join("\n\n"));
    }
    warned = true;
  };
  var Locale = class {
    constructor() {
      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then((resp) => resp.json()).then((resp) => {
        this.loadFromObject(resp);
      });
    }
    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }
    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }
    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = "en";
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log_default.warn("No translations found for: " + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log_default.warn("Using fallback language: " + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = "No translations found for fallback language: " + fallbackLanguage;
          Log_default.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  };
  var LocalizedString = class _LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new _LocalizedString(sub);
    }
  };
  var Locale_default = new Locale();

  // node_modules/@lightningjs/sdk/src/VersionLabel/index.js
  var VersionLabel = class extends Lightning_default.Component {
    static _template() {
      return {
        rect: true,
        color: 3137370284,
        h: 40,
        w: 100,
        x: (w) => w - 50,
        y: (h) => h - 50,
        mount: 1,
        Text: {
          w: (w) => w,
          h: (h) => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag("Text").text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag("Text").loadTexture();
      this.w = this.tag("Text").renderWidth + 40;
      this.h = this.tag("Text").renderHeight + 5;
    }
  };

  // node_modules/@lightningjs/sdk/src/FpsCounter/index.js
  var FpsIndicator = class extends Lightning_default.Component {
    static _template() {
      return {
        rect: true,
        color: 4294967295,
        texture: Lightning_default.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: Lightning_default.Tools.getRoundRect(72, 72, 36),
          color: 4278222848
        },
        Counter: {
          w: (w) => w,
          h: (h) => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: "center"
          }
        },
        Text: {
          w: (w) => w,
          h: (h) => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: "center",
            text: "FPS"
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings_default.get("platform", "showFps")
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on("frameStart", fpsCalculator);
      this.stage.off("framestart", fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold)
        return;
      this.lastFps = this.fps;
      let bgColor = 4278222848;
      if (this.fps <= 40 && this.fps > 20)
        bgColor = 4294944e3;
      else if (this.fps <= 20)
        bgColor = 4294901760;
      this.tag("Background").setSmooth("color", bgColor);
      this.tag("Counter").text = "".concat(this.fps);
      this.config.log && Log_default.info("FPS", this.fps);
    }
  };

  // node_modules/@lightningjs/sdk/src/Language/index.js
  var meta = {};
  var translations = {};
  var language = null;
  var dictionary = null;
  var initLanguage = function(file) {
    let language2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetch(file).then((response) => response.json()).then((json) => {
        setTranslations(json);
        typeof language2 === "object" && "then" in language2 && typeof language2.then === "function" ? language2.then((lang) => setLanguage(lang).then(resolve).catch(reject)).catch((e) => {
          Log_default.error(e);
          reject(e);
        }) : setLanguage(language2).then(resolve).catch(reject);
      }).catch(() => {
        const error = "Language file " + file + " not found";
        Log_default.error(error);
        reject(error);
      });
    });
  };
  var setTranslations = (obj) => {
    if ("meta" in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  var setLanguage = (lng2) => {
    language = null;
    dictionary = null;
    return new Promise((resolve, reject) => {
      if (lng2 in translations) {
        language = lng2;
      } else {
        if ("map" in meta && lng2 in meta.map && meta.map[lng2] in translations) {
          language = meta.map[lng2];
        } else if ("default" in meta && meta.default in translations) {
          const error = "Translations for Language " + language + " not found. Using default language " + meta.default;
          Log_default.warn(error);
          language = meta.default;
        } else {
          const error = "Translations for Language " + language + " not found.";
          Log_default.error(error);
          reject(error);
        }
      }
      if (language) {
        Log_default.info("Setting language to", language);
        const translationsObj = translations[language];
        if (typeof translationsObj === "object") {
          dictionary = translationsObj;
          resolve();
        } else if (typeof translationsObj === "string") {
          const url = Utils_default.asset(translationsObj);
          fetch(url).then((response) => response.json()).then((json) => {
            translations[language] = json;
            dictionary = json;
            resolve();
          }).catch((e) => {
            const error = "Error while fetching " + url;
            Log_default.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  // node_modules/@lightningjs/sdk/src/Registry/index.js
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry_default = {
    // Timeouts
    setTimeout(cb, timeout2) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter((id) => id !== timeoutId);
        cb.apply(null, params);
      }, timeout2, params);
      Log_default.info("Set Timeout", "ID: " + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter((id) => id !== timeoutId);
        Log_default.info("Clear Timeout", "ID: " + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log_default.error("Clear Timeout", "ID " + timeoutId + " not found");
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach((timeoutId) => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter((id) => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log_default.info("Set Interval", "ID: " + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter((id) => id !== intervalId);
        Log_default.info("Clear Interval", "ID: " + intervalId);
        clearInterval(intervalId);
      } else {
        Log_default.error("Clear Interval", "ID " + intervalId + " not found");
      }
    },
    clearIntervals() {
      registry.intervals.forEach((intervalId) => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log_default.info("Add eventListener", "Target:", target, "Event: " + event, "Handler:", handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter((fn) => fn !== handler);
        Log_default.info("Remove eventListener", "Target:", target, "Event: " + event, "Handler:", handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log_default.error("Remove eventListener", "Not found", "Target", target, "Event: " + event, "Handler", handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach((handler) => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach((_event) => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach((targetIndex) => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  // node_modules/@lightningjs/sdk/src/Colors/utils.js
  var isObject2 = (v) => {
    return typeof v === "object" && v !== null;
  };
  var isString2 = (v) => {
    return typeof v === "string";
  };

  // node_modules/@lightningjs/sdk/src/Colors/index.js
  var colors = {
    white: "#ffffff",
    black: "#000000",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#feff00",
    cyan: "#00feff",
    magenta: "#ff00ff"
  };
  var normalizedColors = {
    //store for normalized colors
  };
  var addColors = (colorsToAdd, value) => {
    if (isObject2(colorsToAdd)) {
      Object.keys(colorsToAdd).forEach((color) => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString2(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  var cleanUpNormalizedColors = (color) => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  var initColors = (file) => {
    return new Promise((resolve, reject) => {
      if (typeof file === "object") {
        addColors(file);
        resolve();
      }
      fetch(file).then((response) => response.json()).then((json) => {
        addColors(json);
        resolve();
      }).catch(() => {
        const error = "Colors file " + file + " not found";
        Log_default.error(error);
        reject(error);
      });
    });
  };

  // node_modules/@lightningjs/sdk/src/Application/index.js
  var packageInfo = {
    name: "@lightningjs/sdk",
    version: "4.8.1",
    license: "Apache-2.0",
    scripts: {
      postinstall: "node ./scripts/postinstall.js",
      lint: "eslint '**/*.js'",
      release: "npm publish --access public"
    },
    "lint-staged": {
      "*.js": ["eslint --fix"],
      "src/startApp.js": ["rollup -c ./rollup.config.js"]
    },
    husky: {
      hooks: {
        "pre-commit": "lint-staged"
      }
    },
    dependencies: {
      "@babel/polyfill": "^7.11.5",
      "@lightningjs/core": "*",
      "@michieljs/execute-as-promise": "^1.0.0",
      deepmerge: "^4.2.2",
      localCookie: "github:WebPlatformForEmbedded/localCookie",
      shelljs: "^0.8.4",
      "url-polyfill": "^1.1.10",
      "whatwg-fetch": "^3.0.0"
    },
    devDependencies: {
      "@babel/core": "^7.11.6",
      "@babel/plugin-transform-parameters": "^7.10.5 ",
      "@babel/plugin-transform-spread": "^7.11.0",
      "@babel/preset-env": "^7.11.5",
      "babel-eslint": "^10.1.0",
      eslint: "^7.10.0",
      "eslint-config-prettier": "^6.12.0",
      "eslint-plugin-prettier": "^3.1.4",
      husky: "^4.3.0",
      "lint-staged": "^10.4.0",
      prettier: "^1.19.1",
      rollup: "^1.32.1",
      "rollup-plugin-babel": "^4.4.0"
    },
    repository: {
      type: "git",
      url: "git@github.com:rdkcentral/Lightning-SDK.git"
    },
    bugs: {
      url: "https://github.com/rdkcentral/Lightning-SDK/issues"
    }
  };
  var AppInstance;
  var AppData;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      clearColor: 0,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: "RobotoRegular",
    keys: {
      8: "Back",
      13: "Enter",
      27: "Menu",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      174: "ChannelDown",
      175: "ChannelUp",
      178: "Stop",
      250: "PlayPause",
      191: "Search",
      // Use "/" for keyboard
      409: "Search"
    }
  };
  var customFontFaces = [];
  var fontLoader = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map((_ref) => {
      let {
        family,
        url,
        urls,
        descriptors
      } = _ref;
      return () => {
        const src = urls ? urls.map((url2) => {
          return "url(" + url2 + ")";
        }) : "url(" + url + ")";
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log_default.info("Loading font", family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application_default(App2, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage["w"] = width;
      defaultOptions.stage["h"] = height;
      defaultOptions.stage["precision"] = width / 1920;
    }
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage["w"] = 1280;
      defaultOptions.stage["h"] = 720;
      defaultOptions.stage["precision"] = 1280 / 1920;
    }
    return class Application extends Lightning_default.Application {
      constructor(options) {
        const config = (0, import_deepmerge.default)(defaultOptions, options);
        if (options.stage.canvas) {
          config.stage.canvas = options.stage.canvas;
        }
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      _setup() {
        Promise.all([
          this.loadFonts(App2.config && App2.config.fonts || App2.getFonts && App2.getFonts() || []),
          // to be deprecated
          Locale_default.load(App2.config && App2.config.locale || App2.getLocale && App2.getLocale()),
          App2.language && this.loadLanguage(App2.language()),
          App2.colors && this.loadColors(App2.colors())
        ]).then(() => {
          Metrics_default.app.loaded();
          AppData = appData;
          AppInstance = this.stage.c({
            ref: "App",
            type: App2,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log_default.info("App version", this.config.version);
          Log_default.info("SDK version", packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: "VersionLabel",
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: "FpsCounter",
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log_default.info("Signaling App Close");
        if (platformSettings.onClose && typeof platformSettings.onClose === "function") {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log_default.info("Closing App");
        Settings_default.clearSubscribers();
        Registry_default.clear();
        this.childList.remove(this.tag("App"));
        this.cleanupFonts();
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === "function" ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ("delete" in document.fonts) {
          customFontFaces.forEach((fontFace) => {
            Log_default.info("Removing font", fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log_default.info("No support for removing manually-added fonts");
        }
      }
      loadLanguage(config) {
        let file = Utils_default.asset("translations.json");
        let language2 = config;
        if (typeof language2 === "object") {
          language2 = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language2);
      }
      loadColors(config) {
        let file = Utils_default.asset("colors.json");
        if (config && (typeof config === "string" || typeof config === "object")) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag("App");
      }
    };
  }

  // node_modules/@lightningjs/sdk/src/Router/utils/router.js
  var application;
  var app;
  var pagesHost;
  var stage;
  var routerConfig;
  var widgetsHost;
  var rootHash;
  var bootRequest;
  var updateHash = true;
  var beforeEachRoute = async (from, to) => {
    return true;
  };
  var afterEachRoute = () => {
  };
  var routes = /* @__PURE__ */ new Map();
  var components = /* @__PURE__ */ new Map();
  var initialised = false;
  var activePage = null;
  var activeHash;
  var activeRoute;
  var lastAcceptedHash;
  var previousState;
  var mixin = (app2) => {
    if (app2.pages) {
      pagesHost = app2.pages.childList;
    }
    if (app2.widgets && app2.widgets.children) {
      widgetsHost = app2.widgets.childList;
      widgetsHost.forEach((w) => w.visible = false);
    }
    app2._handleBack = (e) => {
      step(-1);
      e.preventDefault();
    };
  };
  var bootRouter = (config, instance) => {
    let {
      appInstance,
      routes: routes2
    } = config;
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes2)) {
      setup(config);
    } else if (isFunction(routes2)) {
      console.warn("[Router]: Calling Router.route() directly is deprecated.");
      console.warn("Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    }
  };
  var setup = (config) => {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach((r) => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes.set(path, route);
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get("lazyCreate")) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  var init = (config) => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn("[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes");
      console.warn("[Router]: setting { bootComponent } property will be deprecated in a future release");
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: "$",
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    initialised = true;
  };
  var storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  var getComponent = (route) => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };
  var mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    const updateConfig = routerConfig.get("updateHash");
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };
  var onRequestResolved = (request) => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;
    if (getOption(route.options, "clearHistory")) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit_default(page, "changed");
    } else if (request.isCreated) {
      emit_default(page, "mounted");
    }
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;
    for (let request2 of navigateQueue.values()) {
      if (request2.isCancelled && request2.hash) {
        navigateQueue.delete(request2.hash);
      }
    }
    afterEachRoute(request);
    Log_default.info("[route]:", route.path);
    Log_default.info("[hash]:", hash);
  };
  var cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get("lazyDestroy");
    const destroyOnBack = routerConfig.get("destroyOnHistoryBack");
    const keepAlive = register.get("keepAlive");
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      storeComponent(route, page._routedType || page.constructor);
      pagesHost.remove(page);
      if (routerConfig.get("gcOnUnload")) {
        stage.gc();
      }
    } else {
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };
  var getActiveHash = () => {
    return activeHash;
  };
  var setActivePage = (page) => {
    activePage = page;
  };
  var getActivePage = () => {
    return activePage;
  };
  var getActiveRoute = () => {
    return activeRoute;
  };
  var getLastHash = () => {
    return lastAcceptedHash;
  };
  var setLastHash = (hash) => {
    lastAcceptedHash = hash;
  };
  var getPreviousState = () => {
    return previousState;
  };
  var routeExists = (key) => {
    return routes.has(key);
  };
  var getRootHash = () => {
    return rootHash;
  };
  var getBootRequest = () => {
    return bootRequest;
  };
  var getRouterConfig = () => {
    return routerConfig;
  };
  var getRoutes = () => {
    return routes;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/helpers.js
  var isFunction = (v) => {
    return typeof v === "function";
  };
  var isObject = (v) => {
    return typeof v === "object" && v !== null;
  };
  var isBoolean = (v) => {
    return typeof v === "boolean";
  };
  var isPage = (v) => {
    if (v instanceof Lightning_default.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  var isComponentConstructor = (type) => {
    return type.prototype && "isComponent" in type.prototype;
  };
  var isArray = (v) => {
    return Array.isArray(v);
  };
  var ucfirst = (v) => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  var isString = (v) => {
    return typeof v === "string";
  };
  var isPromise = (method) => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  var cleanHash = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hash.replace(/^#/, "").replace(/\/+$/, "");
  };
  var getConfigMap = () => {
    const routerSettings = Settings_default.get("platform", "router");
    const isObj = isObject(routerSettings);
    return ["backtrack", "gcOnUnload", "destroyOnHistoryBack", "lazyCreate", "lazyDestroy", "reuseInstance", "autoRestoreRemote", "numberNavigation", "updateHash", "storeSameHash"].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings_default.get("platform", key));
      return config;
    }, /* @__PURE__ */ new Map());
  };
  var getQueryStringParams = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActiveHash();
    const resumeHash2 = getResumeHash();
    if ((hash === "$" || !hash) && resumeHash2) {
      if (isString(resumeHash2)) {
        hash = resumeHash2;
      }
    }
    let parse = "";
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        hashParams = hashParams.replace(/^\?/, "");
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = (obj) => {
    if (!isObject(obj)) {
      return "";
    }
    return "?" + Object.keys(obj).map((key) => {
      return "".concat(key, "=").concat(obj[key]);
    }).join("&");
  };
  var symbols = {
    route: Symbol("route"),
    hash: Symbol("hash"),
    store: Symbol("store"),
    fromHistory: Symbol("fromHistory"),
    expires: Symbol("expires"),
    resume: Symbol("resume"),
    backtrack: Symbol("backtrack"),
    historyState: Symbol("historyState"),
    queryParams: Symbol("queryParams")
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/provider.js
  var previousState2;
  var dataHooks = {
    on: (request) => {
      previousState2 = app.state || "";
      app._setState("Loading");
      return execProvider(request);
    },
    before: (request) => {
      return execProvider(request);
    },
    after: (request) => {
      try {
        execProvider(request, true);
      } catch (e) {
      }
      return Promise.resolve();
    }
  };
  var execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1e3 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit_default(request.page, "dataProvided");
      }
    });
  };
  var addPersistData = (_ref) => {
    let {
      page,
      route,
      hash,
      register = /* @__PURE__ */ new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};
    for (let [name, value] of pageData) {
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }
    if (register.size) {
      const obj = {};
      for (let [k, v] of register) {
        obj[k] = v;
      }
      page.persist = obj;
    }
    page.params = params;
    emit_default(page, ["urlParams"], params);
    return params;
  };
  var isPageExpired = (page) => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  var hasProvider = (path) => {
    if (routeExists(path)) {
      const record = routes.get(path);
      return !!record.provider;
    }
    return false;
  };
  var getProvider = (route) => {
    if (routeExists(route.path)) {
      const {
        provider
      } = routes.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/transitions.js
  var fade = (i, o) => {
    return new Promise((resolve) => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      i.transition("alpha").on("finish", () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  var crossFade = (i, o) => {
    return new Promise((resolve) => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      i.transition("alpha").on("finish", () => {
        resolve();
      });
    });
  };
  var moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === "x" ? 1920 : 1080;
    return new Promise((resolve) => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      i.transition(axis).on("finish", () => {
        resolve();
      });
    });
  };
  var up = (i, o) => {
    return moveOnAxes("y", 0, i, o);
  };
  var down = (i, o) => {
    return moveOnAxes("y", 1, i, o);
  };
  var left = (i, o) => {
    return moveOnAxes("x", 0, i, o);
  };
  var right = (i, o) => {
    return moveOnAxes("x", 1, i, o);
  };
  var transitions_default = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/transition.js
  var executeTransition = function(pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get("disableTransitions");
    if (pageIn.easing) {
      console.warn("easing() method is deprecated and will be removed. Use pageTransition()");
    }
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = "crossFade";
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = transitions_default[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }
      if (pageIn.smoothIn) {
        const smooth = function(p, v) {
          let args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return new Promise((resolve) => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on("finish", () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return transitions_default.crossFade(pageIn, pageOut);
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/loader.js
  var load = async (request) => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        if (app.state === "Loading") {
          if (getPreviousState() === "Widgets") {
            app._setState("Widgets", [getActiveWidget()]);
          } else {
            app._setState("");
          }
        }
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      if (expired || request.isCancelled) {
        Log_default.debug("[router]:", "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        return request.page;
      }
    } catch (request2) {
      if (!request2.route) {
        console.error(request2);
      } else if (!expired) {
        const {
          route
        } = request2;
        if (getOption(route.options, "clearHistory")) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request2);
        }
        if (request2.isCreated && !request2.isSharedInstance) {
          pagesHost.remove(request2.page);
        }
        handleError(request2);
      }
    }
  };
  var loader = async (request) => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }
    if (!isConstruct) {
      request.page = type;
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        const {
          type: loadType,
          provider
        } = getProvider(route);
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== "after") {
            emit_default(request.page, "dataProvided");
          }
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  var handleError = (request) => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log_default.error(request);
    }
    if (request.page && routeExists("!")) {
      navigate("!", {
        request
      }, false);
    }
  };
  var mustReuse = (route) => {
    const opt = getOption(route.options, "reuseInstance");
    const config = routerConfig.get("reuseInstance");
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  // node_modules/@lightningjs/sdk/src/Router/base.js
  var RoutedApp = class extends Lightning_default.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 4278190080,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: "Loading.."
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag("Loading").visible = true;
        }
        $exit() {
          this.tag("Loading").visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          this._widget = widget;
          this._refocus();
        }
        _getFocused() {
          return this._widget;
        }
        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus2 = routerConfig.get("autoRestoreRemote");
          if (!isBoolean(restoreFocus2) || restoreFocus2 === true) {
            Router_default.focusPage();
          }
        }
      }];
    }
    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag("Pages");
    }
    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag("Widgets");
    }
    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {
    }
    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router_default.getActivePage();
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/index.js
  var navigateQueue = /* @__PURE__ */ new Map();
  var forcedHash = "";
  var resumeHash = "";
  var startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };
  var start = () => {
    let hash = (getHash() || "").replace(/^#/, "");
    const bootKey = "$";
    const params = getQueryStringParams(hash);
    const bootRequest2 = getBootRequest();
    const rootHash2 = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = "";
    }
    resumeHash = isDirectLoad ? rootHash2 : hash || rootHash2;
    const ready = () => {
      if (!hash && rootHash2) {
        if (isString(rootHash2)) {
          navigate(rootHash2);
        } else if (isFunction(rootHash2)) {
          rootHash2().then((res) => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch((e) => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate("*", {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest2)) {
      bootRequest2(params).then(() => {
        ready();
      }).catch((e) => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  var handleBootError = (e) => {
    if (routeExists("!")) {
      navigate("!", {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };
  var navigate = function(url) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : void 0;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, "") !== url) {
      queue(url, args, store);
      setHash(url);
      if (!mustUpdateLocationHash()) {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch((e) => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch((e) => {
        console.error(e);
      });
    }
  };
  var queue = function(hash) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : void 0;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request2 of navigateQueue.values()) {
        request2.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };
  var handleHashChange = async (override) => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists("*")) {
        navigate("*", {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);
    if (route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };
  var resolveHashChange = (request) => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      if (component) {
        const activePage2 = getActivePage();
        if (activePage2) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage2 && route.path === getActiveRoute() && !keepAlive) {
            activePage2._setState("");
          }
        }
        if (isPage(component, stage)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          component().then((contents) => {
            return contents.default;
          }).then((module) => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };
  var step = function() {
    let level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history2 = getHistory();
    level = Math.abs(level);
    if (level > history2.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return false;
    } else if (history2.length) {
      const route = history2.splice(history2.length - level, level)[0];
      setHistory(history2);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get("backtrack")) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);
      if (floor > 1) {
        while (floor--) {
          hash = hash.replace(hashLastPart, "");
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }
    return false;
  };
  var resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = "";
    } else if (isFunction(resumeHash)) {
      resumeHash().then((res) => {
        resumeHash = "";
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn("[Router]: resume() called but no hash found");
    }
  };
  var reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };
  var isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  var getResumeHash = () => {
    return resumeHash;
  };
  var getHash = () => {
    return document.location.hash;
  };
  var setHash = (url) => {
    document.location.hash = url;
  };
  var initRouter = (config) => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };
  var registerListener = () => {
    Registry_default.addEventListener(window, "hashchange", async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };
  var root = () => {
    const rootHash2 = getRootHash();
    if (isString(rootHash2)) {
      navigate(rootHash2);
    } else if (isFunction(rootHash2)) {
      rootHash2().then((res) => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  var Router_default = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      return getActivePage();
    },
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn("Router: setupRoutes is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    on() {
      console.warn("Router.on() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    before() {
      console.warn("Router.before() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    after() {
      console.warn("Router.after() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    }
  };

  // node_modules/@lightningjs/sdk/src/TV/defaults.js
  var defaultChannels = [{
    number: 1,
    name: "Metro News 1",
    description: "New York Cable News Channel",
    entitled: true,
    program: {
      title: "The Morning Show",
      description: "New York's best morning show",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 5 * 1e3).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: "MTV",
    description: "Music Television",
    entitled: true,
    program: {
      title: "Beavis and Butthead",
      description: "American adult animated sitcom created by Mike Judge",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 20 * 1e3).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: "NBC",
    description: "NBC TV Network",
    entitled: false,
    program: {
      title: "The Tonight Show Starring Jimmy Fallon",
      description: "Late-night talk show hosted by Jimmy Fallon on NBC",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 10 * 1e3).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = () => Settings_default.get("platform", "tv", defaultChannels);
  var randomChannel = () => channels()[~~(channels.length * Math.random())];

  // node_modules/@lightningjs/sdk/src/TV/index.js
  var currentChannel;
  var callbacks = {};
  var emit = function(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach((cb) => {
      cb.apply(null, args);
    });
  };
  var methods = {
    getChannel() {
      if (!currentChannel)
        currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject("No channel found");
        }
      });
    },
    getProgram() {
      if (!currentChannel)
        currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject("No program found");
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find((c) => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit("channelChange", channel);
            resolve(channel);
          } else {
            reject("Channel not found");
          }
        } else {
          reject("No channel number supplied");
        }
      });
    }
  };
  var initTV = (config) => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === "function") {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === "function") {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === "function") {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === "function") {
      config.emit(emit);
    }
  };

  // node_modules/@lightningjs/sdk/src/Purchase/index.js
  var billingUrl = "https://payment-sdk.metrological.com/";
  var initPurchase = (config) => {
    if (config.billingUrl)
      billingUrl = config.billingUrl;
  };

  // node_modules/@lightningjs/sdk/src/Pin/dialog.js
  var PinInput = class extends Lightning_default.Component {
    static _template() {
      return {
        w: 120,
        h: 150,
        rect: true,
        color: 4287927187,
        alpha: 0.5,
        shader: {
          type: Lightning_default.shaders.RoundedRectangle,
          radius: 10
        },
        Nr: {
          w: (w) => w,
          y: 24,
          text: {
            text: "",
            textColor: 4281545523,
            fontSize: 80,
            textAlign: "center",
            verticalAlign: "middle"
          }
        }
      };
    }
    set index(v) {
      this.x = v * (120 + 24);
    }
    set nr(v) {
      this._timeout && clearTimeout(this._timeout);
      if (v) {
        this.setSmooth("alpha", 1);
      } else {
        this.setSmooth("alpha", 0.5);
      }
      this.tag("Nr").patch({
        text: {
          text: v && v.toString() || "",
          fontSize: v === "*" ? 120 : 80
        }
      });
      if (v && v !== "*") {
        this._timeout = setTimeout(() => {
          this._timeout = null;
          this.nr = "*";
        }, 750);
      }
    }
  };
  var PinDialog = class extends Lightning_default.Component {
    static _template() {
      return {
        zIndex: 1,
        w: (w) => w,
        h: (h) => h,
        rect: true,
        color: 3707764736,
        alpha: 1e-6,
        Dialog: {
          w: 648,
          h: 320,
          y: (h) => (h - 320) / 2,
          x: (w) => (w - 648) / 2,
          rect: true,
          color: 3711120179,
          shader: {
            type: Lightning_default.shaders.RoundedRectangle,
            radius: 10
          },
          Info: {
            y: 24,
            x: 48,
            text: {
              text: "Please enter your PIN",
              fontSize: 32
            }
          },
          Msg: {
            y: 260,
            x: 48,
            text: {
              text: "",
              fontSize: 28,
              textColor: 4294967295
            }
          },
          Code: {
            x: 48,
            y: 96
          }
        }
      };
    }
    _init() {
      const children = [];
      for (let i = 0; i < 4; i++) {
        children.push({
          type: PinInput,
          index: i
        });
      }
      this.tag("Code").children = children;
    }
    get pin() {
      if (!this._pin)
        this._pin = "";
      return this._pin;
    }
    set pin(v) {
      if (v.length <= 4) {
        const maskedPin = new Array(Math.max(v.length - 1, 0)).fill("*", 0, v.length - 1);
        v.length && maskedPin.push(v.length > this._pin.length ? v.slice(-1) : "*");
        for (let i = 0; i < 4; i++) {
          this.tag("Code").children[i].nr = maskedPin[i] || "";
        }
        this._pin = v;
      }
    }
    get msg() {
      if (!this._msg)
        this._msg = "";
      return this._msg;
    }
    set msg(v) {
      this._timeout && clearTimeout(this._timeout);
      this._msg = v;
      if (this._msg) {
        this.tag("Msg").text = this._msg;
        this.tag("Info").setSmooth("alpha", 0.5);
        this.tag("Code").setSmooth("alpha", 0.5);
      } else {
        this.tag("Msg").text = "";
        this.tag("Info").setSmooth("alpha", 1);
        this.tag("Code").setSmooth("alpha", 1);
      }
      this._timeout = setTimeout(() => {
        this.msg = "";
      }, 2e3);
    }
    _firstActive() {
      this.setSmooth("alpha", 1);
    }
    _handleKey(event) {
      if (this.msg) {
        this.msg = false;
      } else {
        const val = parseInt(event.key);
        if (val > -1) {
          this.pin += val;
        }
      }
    }
    _handleBack() {
      if (this.msg) {
        this.msg = false;
      } else {
        if (this.pin.length) {
          this.pin = this.pin.slice(0, this.pin.length - 1);
        } else {
          Pin_default.hide();
          this.resolve(false);
        }
      }
    }
    _handleEnter() {
      if (this.msg) {
        this.msg = false;
      } else {
        Pin_default.submit(this.pin).then((val) => {
          this.msg = "Unlocking ...";
          setTimeout(() => {
            Pin_default.hide();
          }, 1e3);
          this.resolve(val);
        }).catch((e) => {
          this.msg = e;
          this.reject(e);
        });
      }
    }
  };

  // node_modules/@lightningjs/sdk/src/Pin/index.js
  var unlocked = false;
  var contextItems = ["purchase", "parental"];
  var submit = (pin, context) => {
    return new Promise((resolve, reject) => {
      if (pin.toString() === Settings_default.get("platform", "pin", "0000").toString()) {
        unlocked = true;
        resolve(unlocked);
      } else {
        reject("Incorrect pin");
      }
    });
  };
  var check = (context) => {
    return new Promise((resolve) => {
      resolve(unlocked);
    });
  };
  var initPin = (config) => {
    if (config.submit && typeof config.submit === "function") {
      submit = config.submit;
    }
    if (config.check && typeof config.check === "function") {
      check = config.check;
    }
  };
  var pinDialog = null;
  var contextCheck = (context) => {
    if (context === void 0) {
      Log_default.info("Please provide context explicitly");
      return contextItems[0];
    } else if (!contextItems.includes(context)) {
      Log_default.warn("Incorrect context provided");
      return false;
    }
    return context;
  };
  var Pin_default = {
    show() {
      return new Promise((resolve, reject) => {
        pinDialog = ApplicationInstance.stage.c({
          ref: "PinDialog",
          type: PinDialog,
          resolve,
          reject
        });
        ApplicationInstance.childList.a(pinDialog);
        ApplicationInstance.focus = pinDialog;
      });
    },
    hide() {
      ApplicationInstance.focus = null;
      ApplicationInstance.children = ApplicationInstance.children.map((child) => child !== pinDialog && child);
      pinDialog = null;
    },
    submit(pin, context) {
      return new Promise((resolve, reject) => {
        try {
          context = contextCheck(context);
          if (context) {
            submit(pin, context).then(resolve).catch(reject);
          } else {
            reject("Incorrect Context provided");
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    unlocked(context) {
      return new Promise((resolve, reject) => {
        try {
          context = contextCheck(context);
          if (context) {
            check(context).then(resolve).catch(reject);
          } else {
            reject("Incorrect Context provided");
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    locked(context) {
      return new Promise((resolve, reject) => {
        try {
          context = contextCheck(context);
          if (context) {
            check(context).then((unlocked2) => resolve(!!!unlocked2)).catch(reject);
          } else {
            reject("Incorrect Context provided");
          }
        } catch (e) {
          reject(e);
        }
      });
    }
  };

  // node_modules/@lightningjs/sdk/src/Metadata/index.js
  var metadata = {};
  var initMetadata = (metadataObj) => {
    metadata = metadataObj;
  };

  // node_modules/@lightningjs/sdk/src/Launch/index.js
  var ApplicationInstance;
  var Launch_default = (App2, appSettings, platformSettings, appData) => {
    initSettings(appSettings, platformSettings);
    initMetadata(appSettings);
    initUtils(platformSettings);
    initStorage();
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app2 = Application_default(App2, appData, platformSettings);
    ApplicationInstance = new app2(appSettings);
    return ApplicationInstance;
  };

  // node_modules/@lightningjs/sdk/src/VideoPlayer/VideoTexture.js
  var VideoTexture = class extends Lightning_default.Component {
    static _template() {
      return {
        Video: {
          alpha: 1,
          visible: false,
          pivot: 0.5,
          texture: {
            type: Lightning_default.textures.StaticTexture,
            options: {}
          }
        }
      };
    }
    set videoEl(v) {
      this._videoEl = v;
    }
    get videoEl() {
      return this._videoEl;
    }
    get videoView() {
      return this.tag("Video");
    }
    get videoTexture() {
      return this.videoView.texture;
    }
    get isVisible() {
      return this.videoView.alpha === 1 && this.videoView.visible === true;
    }
    _init() {
      this._createVideoTexture();
    }
    _createVideoTexture() {
      const stage3 = this.stage;
      const gl = stage3.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
      this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
      this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
    }
    start() {
      const stage3 = this.stage;
      this._lastTime = 0;
      if (!this._updateVideoTexture) {
        this._updateVideoTexture = () => {
          if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
            const gl = stage3.gl;
            const currentTime = (/* @__PURE__ */ new Date()).getTime();
            const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();
            const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
            const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
            if (mustUpdate) {
              this._lastTime = currentTime;
              this._lastFrame = frameCount;
              try {
                gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                this.videoView.visible = true;
                this.videoTexture.options.w = this.videoEl.width;
                this.videoTexture.options.h = this.videoEl.height;
                const expectedAspectRatio = this.videoView.w / this.videoView.h;
                const realAspectRatio = this.videoEl.width / this.videoEl.height;
                if (expectedAspectRatio > realAspectRatio) {
                  this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                  this.videoView.scaleY = 1;
                } else {
                  this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                  this.videoView.scaleX = 1;
                }
              } catch (e) {
                Log_default.error("texImage2d video", e);
                this.stop();
              }
              this.videoTexture.source.forceRenderUpdate();
            }
          }
        };
      }
      if (!this._updatingVideoTexture) {
        stage3.on("frameStart", this._updateVideoTexture);
        this._updatingVideoTexture = true;
      }
    }
    stop() {
      const stage3 = this.stage;
      stage3.removeListener("frameStart", this._updateVideoTexture);
      this._updatingVideoTexture = false;
      this.videoView.visible = false;
      if (this.videoTexture.options.source) {
        const gl = stage3.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
    position(top, left2) {
      this.videoView.patch({
        smooth: {
          x: left2,
          y: top
        }
      });
    }
    size(width, height) {
      this.videoView.patch({
        smooth: {
          w: width,
          h: height
        }
      });
    }
    show() {
      this.videoView.setSmooth("alpha", 1);
    }
    hide() {
      this.videoView.setSmooth("alpha", 0);
    }
  };

  // node_modules/@lightningjs/sdk/src/VideoPlayer/index.js
  var mediaUrl2 = (url) => url;
  var videoEl;
  var videoTexture;
  var metrics2;
  var consumer;
  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = (config) => {
    if (config.mediaUrl) {
      mediaUrl2 = config.mediaUrl;
    }
  };
  var eventHandlers = {};
  var state = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer(val === true ? "AdStart" : "AdEnd");
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play() {
      state.playing = true;
    },
    pause() {
      state.playing = false;
    },
    seeked() {
      state.playAfterSeek === true && videoPlayerPlugin.play();
      state.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  var withPrecision = (val) => Math.round(precision * val) + "px";
  var fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire("$videoPlayer" + event, args, videoEl.currentTime);
      consumer.fire("$videoPlayerEvent", event, args, videoEl.currentTime);
    }
  };
  var fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === "function" && hooks[event].call(null, event, args);
  };
  var customLoader = null;
  var customUnloader = null;
  var loader2 = (url, videoEl2, config) => {
    return customLoader && typeof customLoader === "function" ? customLoader(url, videoEl2, config) : new Promise((resolve) => {
      url = mediaUrl2(url);
      videoEl2.setAttribute("src", url);
      videoEl2.load();
      resolve();
    });
  };
  var unloader = (videoEl2) => {
    return customUnloader && typeof customUnloader === "function" ? customUnloader(videoEl2) : new Promise((resolve) => {
      videoEl2.removeAttribute("src");
      videoEl2.load();
      resolve();
    });
  };
  var setupVideoTag = () => {
    const videoEls = document.getElementsByTagName("video");
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl2 = document.createElement("video");
      const platformSettingsWidth = Settings_default.get("platform", "width") ? Settings_default.get("platform", "width") : 1920;
      const platformSettingsHeight = Settings_default.get("platform", "height") ? Settings_default.get("platform", "height") : 1080;
      videoEl2.setAttribute("id", "video-player");
      videoEl2.setAttribute("width", withPrecision(platformSettingsWidth));
      videoEl2.setAttribute("height", withPrecision(platformSettingsHeight));
      videoEl2.style.position = "absolute";
      videoEl2.style.zIndex = "1";
      videoEl2.style.display = "none";
      videoEl2.style.visibility = "hidden";
      videoEl2.style.top = withPrecision(0);
      videoEl2.style.left = withPrecision(0);
      videoEl2.style.width = withPrecision(platformSettingsWidth);
      videoEl2.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl2);
      return videoEl2;
    }
  };
  var setUpVideoTexture = () => {
    if (!ApplicationInstance.tag("VideoTexture")) {
      const el = ApplicationInstance.stage.c({
        type: VideoTexture,
        ref: "VideoTexture",
        zIndex: 0,
        videoEl
      });
      ApplicationInstance.childList.addAt(el, 0);
    }
    return ApplicationInstance.tag("VideoTexture");
  };
  var registerEventListeners = () => {
    Log_default.info("VideoPlayer", "Registering event listeners");
    Object.keys(events_default).forEach((event) => {
      const handler = (e) => {
        if (metrics2 && metrics2[event] && typeof metrics2[event] === "function") {
          metrics2[event]({
            currentTime: videoEl.currentTime
          });
        }
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });
        fireOnConsumer(events_default[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  var deregisterEventListeners = () => {
    Log_default.info("VideoPlayer", "Deregistering event listeners");
    Object.keys(eventHandlers).forEach((event) => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  var videoPlayerPlugin = {
    consumer(component) {
      consumer = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      let left2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left2);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left2);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      let right2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1080;
      let left2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      this.position(top, left2);
      this.size(right2 - left2, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.canInteract)
        return;
      metrics2 = Metrics_default.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads_default.get(adConfig, consumer).then((ads) => {
          state.playingAds = true;
          ads.prerolls().then(() => {
            state.playingAds = false;
            loader2(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch((e) => {
              fireOnConsumer("error", {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract)
        return;
      const url = videoEl.getAttribute("src");
      this.close();
      this.open(url);
    },
    close() {
      Ads_default.cancel();
      if (state.playingAds) {
        state.playingAds = false;
        Ads_default.stop();
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract)
        return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract)
        return;
      this.pause();
      if (textureMode === true)
        videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer("Clear", {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract)
        return;
      if (textureMode === true)
        videoTexture.start();
      execute_as_promise_default(videoEl.play, null, videoEl).catch((e) => {
        fireOnConsumer("error", {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract)
        return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract)
        return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (!this.canInteract)
        return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract)
        return;
      if (!this.src)
        return;
      if (state.playAfterSeek === null) {
        state.playAfterSeek = !!state.playing;
      }
      this.pause();
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract)
        return;
      if (!this.src)
        return;
      state.skipTime = (state.skipTime || videoEl.currentTime) + seconds;
      easeExecution_default(() => {
        this.seek(state.skipTime);
        state.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract)
        return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = "block";
        videoEl.style.visibility = "visible";
      }
    },
    hide() {
      if (!this.canInteract)
        return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = "none";
        videoEl.style.visibility = "hidden";
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      state.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute("src");
    },
    get playing() {
      return state.playing;
    },
    get playingAds() {
      return state.playingAds;
    },
    get canInteract() {
      return state.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === "block";
      }
    },
    get adsEnabled() {
      return state.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer;
    }
  };
  var VideoPlayer_default = autoSetupMixin_default(videoPlayerPlugin, () => {
    precision = ApplicationInstance && ApplicationInstance.stage && ApplicationInstance.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings_default.get("platform", "textureMode", false);
    if (textureMode === true) {
      videoEl.setAttribute("crossorigin", "anonymous");
      videoTexture = setUpVideoTexture();
    }
  });

  // node_modules/@lightningjs/sdk/src/Ads/index.js
  var consumer2;
  var getAds = () => {
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  var initAds = (config) => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state2 = {
    active: false
  };
  var playSlot = function() {
    let slot = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  var playAd = (ad) => {
    return new Promise((resolve) => {
      if (state2.active === false) {
        Log_default.info("Ad", "Skipping add due to inactive state");
        return resolve();
      }
      const videoEl2 = document.getElementsByTagName("video")[0];
      videoEl2.style.display = "block";
      videoEl2.style.visibility = "visible";
      videoEl2.src = mediaUrl2(ad.url);
      videoEl2.load();
      let timeEvents = null;
      let timeout2;
      const cleanup = () => {
        Object.keys(handlers).forEach((handler) => videoEl2.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log_default.info("Ad", "Play ad", ad.url);
          fireOnConsumer2("Play", ad);
          sendBeacon(ad.callbacks, "defaultImpression");
        },
        ended() {
          fireOnConsumer2("Ended", ad);
          sendBeacon(ad.callbacks, "complete");
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl2.duration) {
            timeEvents = {
              firstQuartile: videoEl2.duration / 4,
              midPoint: videoEl2.duration / 2,
              thirdQuartile: videoEl2.duration / 4 * 3
            };
            Log_default.info("Ad", "Calculated quartiles times", {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl2.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer2("FirstQuartile", ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, "firstQuartile");
          }
          if (timeEvents && timeEvents.midPoint && videoEl2.currentTime >= timeEvents.midPoint) {
            fireOnConsumer2("MidPoint", ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, "midPoint");
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl2.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer2("ThirdQuartile", ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, "thirdQuartile");
          }
        },
        stalled() {
          fireOnConsumer2("Stalled", ad);
          timeout2 = setTimeout(() => {
            cleanup();
          }, 5e3);
        },
        canplay() {
          timeout2 && clearTimeout(timeout2);
        },
        error() {
          fireOnConsumer2("Error", ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      Object.keys(handlers).forEach((handler) => videoEl2.addEventListener(handler, handlers[handler]));
      videoEl2.play();
    });
  };
  var sendBeacon = (callbacks2, event) => {
    if (callbacks2 && callbacks2[event]) {
      Log_default.info("Ad", "Sending beacon", event, callbacks2[event]);
      return callbacks2[event].reduce((promise, url) => {
        return promise.then(() => fetch(url).then((response) => {
          if (response.status === 200) {
            fireOnConsumer2("Beacon" + event + "Sent");
          } else {
            fireOnConsumer2("Beacon" + event + "Failed" + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log_default.info("Ad", "No callback found for " + event);
    }
  };
  var fireOnConsumer2 = (event, args) => {
    if (consumer2) {
      consumer2.fire("$ad" + event, args);
      consumer2.fire("$adEvent", event, args);
    }
  };
  var Ads_default = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer2 = videoPlayerConsumer;
      return new Promise((resolve) => {
        Log_default.info("Ad", "Starting session");
        getAds(config).then((ads) => {
          Log_default.info("Ad", "API result", ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state2.active = true;
                fireOnConsumer2("PrerollSlotImpression", ads);
                sendBeacon(ads.preroll.callbacks, "slotImpression");
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer2("PrerollSlotEnd", ads);
                  sendBeacon(ads.preroll.callbacks, "slotEnd");
                  state2.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log_default.info("Ad", "Cancel Ad");
      state2.active = false;
    },
    stop() {
      Log_default.info("Ad", "Stop Ad");
      state2.active = false;
      const videoEl2 = document.getElementsByTagName("video")[0];
      videoEl2.pause();
      videoEl2.removeAttribute("src");
    }
  };

  // node_modules/@lightningjs/sdk/src/Img/ScaledImageTexture.js
  var ScaledImageTexture = class extends Lightning_default.textures.ImageTexture {
    constructor(stage3) {
      super(stage3);
      this._scalingOptions = void 0;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  };

  // node_modules/@lightningjs/sdk/src/Img/index.js
  var Img_default = (imageUrl, options) => {
    const imageServerUrl = Settings_default.get("platform", "imageServerUrl");
    const make = (options2) => {
      if (!/^(?:https?:)?\/\//i.test(imageUrl)) {
        imageUrl = Utils_default.asset(imageUrl);
      }
      if (imageServerUrl && imageUrl.indexOf(window.location.origin) === -1) {
        imageUrl = Utils_default.ensureUrlWithProtocol(imageServerUrl + "?" + Utils_default.makeQueryString(imageUrl, options2));
      } else {
        if (options2.type === "crop")
          options2.type = "cover";
        else
          options2.type = "contain";
      }
      return {
        type: ScaledImageTexture,
        src: imageUrl,
        options: options2
      };
    };
    const setOptions = (options2) => {
      options2 = {
        ...{
          type: "contain",
          w: 0,
          h: 0
        },
        ...options2
      };
      const imageQuality = Math.max(0.1, Math.min(1, (parseFloat(Settings_default.get("platform", "image.quality")) || 100) / 100));
      options2.w = options2.w * imageQuality;
      options2.h = options2.h * imageQuality;
      return options2;
    };
    if (options) {
      return make(setOptions(options));
    }
    return {
      // official api
      exact: (w, h) => make(setOptions({
        type: "exact",
        w,
        h
      })),
      landscape: (w) => make(setOptions({
        type: "landscape",
        w
      })),
      portrait: (h) => make(setOptions({
        type: "portrait",
        h
      })),
      cover: (w, h) => make(setOptions({
        type: "cover",
        w,
        h
      })),
      contain: (w, h) => make(setOptions({
        type: "contain",
        w,
        h
      })),
      original: () => make(setOptions({
        type: "contain"
      }))
      // todo: add positioning - i.e. top, bottom, center, left etc.
    };
  };

  // src/lib/endpoints.js
  var apiKey = "66683917a94e703e14ca150023f4ea7c";
  var base = "https://api.themoviedb.org/3";
  var getPopularUrls = async (type) => {
    return ["genre/".concat(type, "/list"), "discover/".concat(type)].map((url) => {
      return fetch("".concat(base, "/").concat(url, "?api_key=").concat(apiKey, "&with_companies=7|33&vote_average.gte=7"));
    });
  };
  var getDetailUrl = async (type, id) => {
    return fetch("".concat(base, "/").concat(type, "/").concat(id, "?api_key=").concat(apiKey));
  };
  var getCreditsUrl = async (type, id) => {
    return fetch("".concat(base, "/").concat(type, "/").concat(id, "/credits?api_key=").concat(apiKey));
  };
  var getSimilarUrls = async (type, id) => {
    return ["genre/".concat(type, "/list"), "".concat(type, "/").concat(id, "/similar")].map((url) => {
      return fetch("".concat(base, "/").concat(url, "?api_key=").concat(apiKey));
    });
  };
  var getPeopleUrl = async (id) => {
    return fetch("".concat(base, "/person/").concat(id, "?api_key=").concat(apiKey));
  };
  var getCreditsUrls = async (type, id) => {
    return ["genre/".concat(type, "/list"), "person/".concat(id, "/").concat(type, "_credits")].map((url) => {
      return fetch("".concat(base, "/").concat(url, "?api_key=").concat(apiKey));
    });
  };

  // src/lib/tools.js
  var getImgUrl = function(imgPath) {
    let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 185;
    return "//image.tmdb.org/t/p/w".concat(width).concat(imgPath);
  };

  // src/shader/PerspectiveShader.js
  var PerspectiveShader = class extends Lightning_default.shaders.WebGLDefaultShader {
    constructor(context) {
      super(context);
      this._fudge = 0.2;
      this._rx = 0;
      this._ry = 0;
      this._z = 1;
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const vr = operation.shaderOwner;
      const element = vr.element;
      const pivotX = element.pivotX * vr.w;
      const pivotY = element.pivotY * vr.h;
      const coords = vr.getRenderTextureCoords(pivotX, pivotY);
      const rz = -Math.atan2(vr._renderContext.tc, vr._renderContext.ta);
      const gl = this.gl;
      this._setUniform("pivot", new Float32Array([coords[0], coords[1], 0]), gl.uniform3fv);
      this._setUniform("rot", new Float32Array([this._rx, this._ry, rz]), gl.uniform3fv);
      this._setUniform("z", this._z, gl.uniform1f);
      this._setUniform("fudge", this._fudge, gl.uniform1f);
    }
    set fudge(v) {
      this._fudge = v;
      this.redraw();
    }
    get fudge() {
      return this._fudge;
    }
    get rx() {
      return this._rx;
    }
    set rx(v) {
      this._rx = v;
      this.redraw();
    }
    get ry() {
      return this._ry;
    }
    set ry(v) {
      this._ry = v;
      this.redraw();
    }
    get z() {
      return this._z;
    }
    set z(v) {
      this._z = v;
      this.redraw();
    }
    useDefault() {
      return this._rx === 0 && this._ry === 0 && this._z === 0;
    }
  };
  PerspectiveShader.vertexShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    attribute vec2 aVertexPosition;\n    attribute vec2 aTextureCoord;\n    attribute vec4 aColor;\n    uniform vec2 projection;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n\n    uniform float z;\n    uniform vec3 pivot;\n    uniform vec3 rot;\n    varying vec3 pos;\n\n    void main(void) {\n        pos = vec3(aVertexPosition.xy, z);\n        \n        pos -= pivot;\n        \n        // Undo XY rotation\n        mat2 iRotXy = mat2( cos(rot.z), sin(rot.z), \n                           -sin(rot.z), cos(rot.z));\n        pos.xy = iRotXy * pos.xy;\n        \n        // Perform 3d rotations\n        gl_Position.x = cos(rot.x) * pos.x - sin(rot.x) * pos.z;\n        gl_Position.y = pos.y;\n        gl_Position.z = sin(rot.x) * pos.x + cos(rot.x) * pos.z;\n        \n        pos.x = gl_Position.x;\n        pos.y = cos(rot.y) * gl_Position.y - sin(rot.y) * gl_Position.z;\n        pos.z = sin(rot.y) * gl_Position.y + cos(rot.y) * gl_Position.z;\n        \n        // Redo XY rotation\n        iRotXy[0][1] = -iRotXy[0][1];\n        iRotXy[1][0] = -iRotXy[1][0];\n        pos.xy = iRotXy * pos.xy; \n\n        // Undo translate to pivot position\n        pos.xyz += pivot;\n\n        pos = vec3(pos.x * projection.x - 1.0, pos.y * -abs(projection.y) + 1.0, pos.z * projection.x);\n        \n        // Map coords to gl coordinate space.\n        // Set z to 0 because we don't want to perform z-clipping\n        gl_Position = vec4(pos.xy, 0.0, z);\n\n        vTextureCoord = aTextureCoord;\n        vColor = aColor;\n        \n        gl_Position.y = -sign(projection.y) * gl_Position.y;\n    }\n";
  PerspectiveShader.fragmentShaderSource = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n\n    uniform vec3 rot;\n    uniform float fudge;\n\n    void main(void) {\n        vec2 coords = vTextureCoord;\n\n        coords.xy -= vec2(0.5);\n        coords.y = coords.y + (sign(rot[0]) * 0.5 - coords.x) * sin(rot[0]) * fudge * coords.y;\n        coords.x = coords.x + (sign(rot[1]) * 0.5 - coords.y) * sin(rot[1]) * fudge * coords.x;\n        coords.xy += vec2(0.5);\n\n        if (coords.x < 0.0 || coords.x > 1.0 || coords.y < 0.0 || coords.y > 1.0) {\n            gl_FragColor = vec4(0.0);\n        } else {\n            gl_FragColor = texture2D(uSampler, coords) * vColor;\n        }\n    }\n";

  // src/components/item/ItemConfigs.js
  var ITEM_CONFIGS = [{
    amount: 1,
    rx: {
      s: 0.3,
      e: 0
    },
    scale: 0.8,
    zIndex: 3,
    alpha: 1e-3,
    x: 0,
    y: 200,
    color: 4285887861
  }, {
    amount: 0,
    rx: {
      s: 0.6,
      e: 0.3
    },
    scale: 1,
    zIndex: 4,
    alpha: 1,
    x: 0,
    y: 0,
    color: 4294967295
  }, {
    amount: 1,
    rx: {
      s: 0.8,
      e: 0.6
    },
    scale: 0.6,
    zIndex: 3,
    alpha: 1,
    x: 200,
    y: 0,
    color: 4285887861
  }, {
    amount: 1.5,
    rx: {
      s: 1,
      e: 0.8
    },
    scale: 0.45,
    zIndex: 2,
    alpha: 1,
    x: 300,
    y: 0,
    color: 4285887861
  }, {
    amount: 2,
    rx: {
      s: 1,
      e: 1
    },
    scale: 0.45,
    zIndex: 1,
    alpha: 1e-3,
    x: 400,
    y: 0,
    color: 4285887861
  }, {
    amount: 2,
    rx: {
      s: 1,
      e: 1
    },
    scale: 0.45,
    zIndex: 1,
    alpha: 0,
    x: 400,
    y: 0,
    color: 4285887861
  }];

  // src/components/item/Item.js
  var Item = class _Item extends Lightning_default.Component {
    static _template() {
      return {
        w: _Item.width,
        h: _Item.height,
        alpha: 0,
        transitions: {
          alpha: {
            duration: 0.3,
            timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
          }
        },
        Blur: {
          w: _Item.width,
          h: _Item.height,
          rtt: true,
          type: Lightning_default.components.FastBlurComponent,
          amount: 0,
          transitions: {
            amount: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            zIndex: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            x: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            y: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          },
          content: {
            Perspective: {
              w: _Item.width,
              h: _Item.height,
              rtt: true,
              shader: {
                type: PerspectiveShader,
                rx: 0,
                ry: 0
              },
              Poster: {
                w: _Item.width,
                h: _Item.height,
                rtt: true,
                alpha: 1e-3,
                transitions: {
                  scale: {
                    duration: 0.3,
                    timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
                  }
                },
                shader: {
                  type: Lightning_default.shaders.RoundedRectangle,
                  radius: 18
                },
                Image: {
                  w: (w) => w,
                  h: (h) => h,
                  transitions: {
                    alpha: {
                      duration: 0.3
                    }
                  }
                },
                Border: {
                  x: -4,
                  y: -4,
                  colorBottom: 4279374354,
                  colorTop: 4282598211,
                  texture: Lightning_default.Tools.getRoundRect(_Item.width, _Item.height, 18, 3, 4294967295, false, 4294967295)
                }
              }
            }
          }
        }
      };
    }
    _init() {
      this._perspectiveAnimation = this.tag("Blur").content.animation({
        duration: 0.3,
        timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)",
        actions: [{
          t: "Perspective",
          p: "shader.rx",
          v: (e) => {
            const {
              rx
            } = ITEM_CONFIGS[this.configIndex];
            return e * (rx.e - rx.s) + rx.s;
          }
        }]
      });
      this.tag("Blur").transition("zIndex").on("finish", () => {
        if (this._focusedItem) {
          this.application.emit("itemAnimationEnded");
        }
      });
      this.tag("Blur").content.tag("Image").on("txLoaded", () => {
        this.tag("Blur").content.tag("Poster").alpha = 1;
      });
      this.tag("Blur").content.tag("Image").on("txUnloaded", () => {
        this.tag("Blur").content.tag("Poster").alpha = 1e-3;
      });
      this._resetPosition();
    }
    set focusedItem(v) {
      this._focusedItem = v;
    }
    set item(v) {
      this._item = v;
      const content = this.tag("Blur").content;
      if (this._item.poster !== null) {
        const image = getImgUrl(this._item.poster, 500);
        content.tag("Image").texture = Img_default(image).contain(342, 513);
      } else {
        content.tag("Image").src = Utils_default.asset("images/placeholder.png");
      }
    }
    set index(v) {
      this._index = v;
    }
    get configIndex() {
      return this.parent.configIndex;
    }
    animatePosition() {
      const {
        alpha,
        scale,
        x,
        y,
        color,
        amount,
        zIndex
      } = ITEM_CONFIGS[this.configIndex];
      this.patch({
        alpha,
        Blur: {
          amount,
          smooth: {
            zIndex,
            x,
            y
          },
          content: {
            Perspective: {
              Poster: {
                smooth: {
                  scale
                },
                Image: {
                  color
                }
              }
            }
          }
        }
      });
      this._perspectiveAnimation.start();
    }
    _resetPosition() {
      const {
        alpha,
        scale,
        x,
        y,
        color,
        amount,
        zIndex,
        rx
      } = ITEM_CONFIGS[this.configIndex];
      this.patch({
        alpha,
        Blur: {
          amount,
          zIndex,
          x,
          y,
          content: {
            Perspective: {
              shader: {
                type: PerspectiveShader,
                rx: rx.e,
                ry: 0.05
              },
              Poster: {
                scale,
                Image: {
                  color
                }
              }
            }
          }
        }
      });
      this.application.emit("itemAnimationEnded");
    }
    _handleEnter() {
      this.fireAncestors("$selectItem", {
        item: this._item
      });
    }
    static get width() {
      return 342;
    }
    static get height() {
      return 513;
    }
    static get offset() {
      return 0;
    }
  };

  // src/components/item/Actor.js
  var Actor = class _Actor extends Lightning_default.Component {
    static _template() {
      return {
        Actor: {
          w: _Actor.width,
          h: _Actor.height,
          rtt: true,
          mount: 0.5,
          x: _Actor.width / 2,
          y: _Actor.height / 2,
          scale: 0.98,
          shader: {
            type: Lightning_default.shaders.RoundedRectangle,
            radius: 18
          },
          transitions: {
            scale: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          },
          Image: {
            w: 300,
            h: 451,
            mount: 0.5,
            x: _Actor.width / 2,
            y: _Actor.height / 2,
            shader: {
              type: Lightning_default.shaders.Grayscale,
              amount: 1
            },
            transitions: {
              color: {
                duration: 0.3,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              }
            }
          }
        },
        ActorInfo: {
          flex: {
            direction: "column"
          },
          y: _Actor.height + 6,
          transitions: {
            y: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          },
          Name: {
            x: _Actor.width / 2,
            mountX: 0.5,
            text: {
              fontFace: "Bold",
              fontSize: 24,
              wordWrapWidth: _Actor.width,
              textAlign: "center",
              textColor: 4291019715
            }
          },
          Character: {
            x: _Actor.width / 2,
            mountX: 0.5,
            text: {
              fontFace: "Regular",
              fontSize: 21,
              textAlign: "center",
              textColor: 4288651167,
              wordWrapWidth: _Actor.width,
              lineHeight: 31,
              maxLines: 2
            }
          }
        }
      };
    }
    set item(v) {
      this._item = v;
      if (this._item.profile_path !== null) {
        const image = getImgUrl(this._item.profile_path, 300);
        this.tag("Image").texture = Img_default(image).landscape(_Actor.width);
      } else {
        this.tag("Image").src = Utils_default.asset("images/placeholder.png");
      }
      this.tag("Name").text = this._item.name;
      this.tag("Character").text = this._item.character;
    }
    _focus() {
      this.patch({
        Actor: {
          smooth: {
            scale: 1
          },
          Image: {
            smooth: {
              "shader.amount": 0
            }
          }
        },
        ActorInfo: {
          smooth: {
            y: _Actor.height + 16
          },
          Name: {
            smooth: {
              "text.textColor": 4294967295
            }
          },
          Character: {
            smooth: {
              "text.textColor": 4291019715
            }
          }
        }
      });
    }
    _unfocus() {
      this.patch({
        Actor: {
          smooth: {
            scale: 0.98
          },
          Image: {
            smooth: {
              "shader.amount": 1
            }
          }
        },
        ActorInfo: {
          smooth: {
            y: _Actor.height + 6
          },
          Name: {
            smooth: {
              "text.textColor": 4291019715
            }
          },
          Character: {
            smooth: {
              "text.textColor": 4288651167
            }
          }
        }
      });
    }
    _handleEnter() {
      Router_default.navigate("people/".concat(this._item.id), true);
    }
    static get width() {
      return 300;
    }
    static get height() {
      return 451;
    }
    static get offset() {
      return 40;
    }
  };

  // src/components/item/ItemWrapper.js
  var ItemWrapper = class _ItemWrapper extends Lightning_default.Component {
    static _template() {
      return {
        clipbox: true
      };
    }
    set index(v) {
      this._index = v;
    }
    get index() {
      return this._index;
    }
    get configIndex() {
      return this._configIndex;
    }
    set configIndex(v) {
      this._configIndex = v;
    }
    set construct(v) {
      this._construct = v;
    }
    get construct() {
      return this._construct;
    }
    set item(obj) {
      this._item = obj;
    }
    get item() {
      return this._item;
    }
    get child() {
      return this.children[0];
    }
    create() {
      const item = this._item;
      this.children = [{
        type: this._construct,
        item,
        index: this._index
      }];
      if (this._notifyOnItemCreation && this.hasFocus()) {
        this.fireAncestors("$itemCreated");
        this._refocus();
      }
    }
    _firstActive() {
      this.create();
      if (!_ItemWrapper.FIRST_CREATED) {
        this.fireAncestors("$firstItemCreated");
        _ItemWrapper.FIRST_CREATED = true;
      }
    }
    _getFocused() {
      if (!this.child) {
        this._notifyOnItemCreation = true;
      } else {
        return this.child;
      }
    }
  };
  ItemWrapper.FIRST_CREATED = false;

  // src/components/lists/FlipList.js
  var FlipList = class extends Lightning_default.Component {
    static _template() {
      return {
        Items: {
          alpha: 0,
          x: 1320,
          y: 300,
          forceZIndexContext: true,
          boundsMargin: [0, 0, 200, 0],
          transitions: {
            alpha: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            x: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        },
        Pagination: {
          flex: {},
          mount: 1,
          x: 1830,
          y: 1005,
          Current: {
            text: {
              fontSize: 28,
              fontFace: "SemiBold"
            }
          },
          Total: {
            flexItem: {
              marginTop: 7
            },
            text: {
              fontSize: 21,
              fontFace: "Regular",
              textColor: 4284637794
            }
          }
        }
      };
    }
    _construct() {
      this._index = 0;
    }
    get activeItem() {
      return this.tag("Items").children[this._index];
    }
    get index() {
      return this._index;
    }
    set index(v) {
      this._index = v;
    }
    set container(v) {
      this._container = v;
    }
    get container() {
      return this._container;
    }
    set itemConstruct(v) {
      this._itemConstruct = v;
    }
    get itemConstruct() {
      return this._itemConstruct;
    }
    get getRealComponent() {
      return this.activeItem.child;
    }
    set items(v) {
      let construct = this._itemConstruct;
      this._items = v;
      ItemWrapper.FIRST_CREATED = false;
      this.tag("Items").patch({
        children: this._createItems({
          items: this._items,
          construct
        })
      });
    }
    get items() {
      return this._items;
    }
    _createItems(_ref) {
      let {
        items,
        construct
      } = _ref;
      return items.map((item, idx) => {
        const configIndex = idx > 3 ? 4 : idx + 1;
        return {
          type: ItemWrapper,
          construct,
          index: idx,
          item,
          configIndex,
          w: construct.width,
          h: construct.height,
          visible: idx <= 3
        };
      });
    }
    resetConfigIndex() {
      const children = this.tag("Items").children;
      children.forEach((child, idx) => {
        child.visible = false;
        if (idx === this._index - 1) {
          child.visible = true;
          child.configIndex = 0;
          if (child.child) {
            child.child.focusedItem = false;
            child.child.animatePosition();
          }
        } else if (idx === this._index) {
          child.visible = true;
          child.configIndex = 1;
          if (child.child) {
            child.child.focusedItem = true;
            child.child.animatePosition();
          }
        } else if (idx === this._index + 1) {
          child.visible = true;
          child.configIndex = 2;
          if (child.child) {
            child.child.focusedItem = false;
            child.child.animatePosition();
          }
        } else if (idx === this._index + 2) {
          child.visible = true;
          child.configIndex = 3;
          if (child.child) {
            child.child.animatePosition();
          }
        } else if (idx === this._index + 3) {
          child.visible = true;
          child.configIndex = 4;
          if (child.child) {
            child.child.animatePosition();
          }
        }
      });
    }
    _animateToSelected() {
      const index = this._index;
      const children = this.tag("Items").children;
      if (children[index - 1]) {
        children[index - 1].configIndex = 0;
        if (children[index - 1].child) {
          children[index - 1].child.focusedItem = false;
          children[index - 1].child.animatePosition();
        }
      }
      if (children[index]) {
        children[index].visible = true;
        children[index].configIndex = 1;
        if (children[index].child) {
          children[index].child.focusedItem = true;
          children[index].child.animatePosition();
        }
      }
      if (children[index + 1]) {
        children[index + 1].visible = true;
        children[index + 1].configIndex = 2;
        if (children[index + 1].child) {
          children[index + 1].child.focusedItem = false;
          children[index + 1].child.animatePosition();
        }
      }
      if (children[index + 2]) {
        children[index + 2].visible = true;
        children[index + 2].configIndex = 3;
        if (children[index + 2].child) {
          children[index + 2].child.animatePosition();
        }
      }
      if (children[index + 3]) {
        children[index + 3].configIndex = 4;
        if (children[index + 3].child) {
          children[index + 3].child.animatePosition();
        }
      }
      if (index === this.tag("Items").children.length - 1) {
        this.tag("Items").setSmooth("x", 1490);
      } else if (index === this.tag("Items").children.length - 2) {
        this.tag("Items").setSmooth("x", 1420);
      } else if (index === this.tag("Items").children.length - 3) {
        this.tag("Items").setSmooth("x", 1320);
      }
      const item = this._items[this._index];
      this.application.emit("setItem", {
        item
      });
      this.tag("Current").text = "".concat(index + 1);
      this.tag("Total").text = " / ".concat(this.tag("Items").children.length);
    }
    _focus() {
      this.tag("Items").patch({
        smooth: {
          alpha: 1
        }
      });
      this.tag("Items").children.forEach((item, index) => {
        if (index < 3) {
          item.setSmooth("x", 0);
        }
      });
      this._animateToSelected();
    }
    _unfocus() {
      this.stage.gc();
    }
    _handleLeft() {
      if (this._index > 0) {
        this.select({
          direction: -1
        });
      } else {
        return false;
      }
    }
    _handleRight() {
      if (this._index < this.tag("Items").children.length - 1) {
        this.select({
          direction: 1
        });
      } else {
        return false;
      }
    }
    select(_ref2) {
      let {
        direction
      } = _ref2;
      this._direction = direction;
      this._index += direction;
      this._animateToSelected();
    }
    _getFocused() {
      return this.activeItem;
    }
    static get height() {
      return 560;
    }
  };

  // src/components/lists/List.js
  var List = class _List extends Lightning_default.Component {
    static _template() {
      return {
        h: _List.height,
        Items: {
          forceZIndexContext: true,
          boundsMargin: [500, 100, 500, 100],
          transitions: {
            x: {
              duration: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        }
      };
    }
    _construct() {
      this._index = 0;
    }
    get activeItem() {
      return this.tag("Items").children[this._index];
    }
    set container(v) {
      this._container = v;
    }
    get container() {
      return this._container;
    }
    set itemConstruct(v) {
      this._itemConstruct = v;
    }
    get itemConstruct() {
      return this._itemConstruct;
    }
    get getRealComponent() {
      return this.activeItem.child;
    }
    set items(v) {
      let construct = this._itemConstruct;
      this._items = v;
      ItemWrapper.FIRST_CREATED = false;
      this.tag("Items").patch({
        children: this._createItems({
          items: this._items,
          construct
        })
      });
    }
    get items() {
      return this._items;
    }
    _createItems(_ref) {
      let {
        items,
        construct
      } = _ref;
      return items.map((item, index) => {
        return {
          type: ItemWrapper,
          construct,
          index,
          item,
          x: index * (construct.width + construct.offset),
          w: construct.width,
          h: construct.height
        };
      });
    }
    _animateToSelected() {
      let index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._index;
      if (index > 4) {
        this.tag("Items").setSmooth("x", -this.activeItem.finalX + this.activeItem.w * 4);
      } else {
        this.tag("Items").setSmooth("x", 0);
      }
    }
    _focus() {
      this._animateToSelected();
    }
    _unfocus() {
      this.stage.gc();
    }
    _handleLeft() {
      if (this._index > 0) {
        this.select({
          direction: -1
        });
      } else {
        return false;
      }
    }
    _handleRight() {
      if (this._index < this.tag("Items").children.length - 1) {
        this.select({
          direction: 1
        });
      } else {
        return false;
      }
    }
    setIndex(index) {
      this._index = index;
      this._animateToSelected();
      this._refocus();
    }
    select(_ref2) {
      let {
        direction
      } = _ref2;
      this._index += direction;
      this._animateToSelected();
    }
    $itemCreatedForFocus() {
      this.application.updateFocusPath();
    }
    _getFocused() {
      return this.activeItem;
    }
    static get height() {
      return 451;
    }
  };

  // src/components/content/Title.js
  var Title = class extends Lightning_default.Component {
    static _template() {
      return {};
    }
    _init() {
      this.on("txLoaded", () => {
        if (!this._skip) {
          this.application.emit("titleLoaded");
        }
      });
    }
    set skip(v) {
      this._skip = v;
    }
    set label(v) {
      let fontSize = 128;
      let lineHeight = 128;
      if (v.length > 12 && v.length < 24) {
        fontSize = 108;
        lineHeight = 118;
      } else if (v.length >= 24) {
        fontSize = 88;
        lineHeight = 98;
      }
      this.patch({
        text: {
          fontFace: "Black",
          fontSize,
          lineHeight,
          wordWrapWidth: 1e3,
          text: v
        }
      });
    }
  };

  // src/shader/CircleProgressShader.js
  var CircleProgressShader = class extends Lightning_default.shaders.WebGLDefaultShader {
    constructor(ctx) {
      super(ctx);
      this._radius = 100;
      this._width = 50;
      this._period = 1;
      this._angle = 0.5;
      this._smooth = 5e-3;
      this._color = 4294967295;
      this._backgroundColor = 4278190080;
    }
    set radius(v) {
      this._radius = v;
      this.redraw();
    }
    set width(v) {
      this._width = v;
      this.redraw();
    }
    set period(v) {
      this._period = v;
      this.redraw();
    }
    set angle(v) {
      this._angle = v;
      this.redraw();
    }
    set smooth(v) {
      this._smooth = v;
      this.redraw();
    }
    set color(v) {
      this._color = v;
      this.redraw();
    }
    set backgroundColor(v) {
      this._backgroundColor = v;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const owner = operation.shaderOwner;
      this._setUniform("radius", this._radius, this.gl.uniform1f);
      this._setUniform("width", this._width, this.gl.uniform1f);
      this._setUniform("period", this._period, this.gl.uniform1f);
      this._setUniform("angle", this._angle, this.gl.uniform1f);
      this._setUniform("smooth", this._smooth, this.gl.uniform1f);
      this._setUniform("color", new Float32Array(lng.StageUtils.getRgbaComponentsNormalized(this._color)), this.gl.uniform4fv);
      this._setUniform("backgroundColor", new Float32Array(lng.StageUtils.getRgbaComponentsNormalized(this._backgroundColor)), this.gl.uniform4fv);
      this._setUniform("resolution", new Float32Array([owner._w, owner._h]), this.gl.uniform2fv);
      this.redraw();
    }
  };
  CircleProgressShader.fragmentShaderSource = "\n\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n\n    uniform float radius;\n    uniform float width;\n    uniform float period;\n    uniform float angle;\n    uniform float smooth;\n    uniform vec2 resolution;\n\n    uniform vec4 color;\n    uniform vec4 backgroundColor;\n\n    float ratio = resolution.y / resolution.x;\n\n    vec2 transpose_pos(vec2 pos) {\n        if (ratio < 1.) {\n            float diff = 0.5 - pos.x;\n            pos.x = 0.5 - diff / ratio;\n        } else {\n            float diff = 0.5 - pos.y;\n            pos.y = 0.5 - diff * ratio;\n        }\n        return pos;\n    }\n\n    float get_angle(vec2 pos) {\n        pos = transpose_pos(pos);\n        float a = atan(pos.y - 0.5, pos.x - 0.5);\n        a = (1.0+a/3.14159)/2.0;\n        \n        return a;\n    }\n\n    float dist(vec2 pos1, vec2 pos2) {\n        pos1 = transpose_pos(pos1);\n        return distance(pos1, pos2);\n    }\n\n    void main()\n    {\n        vec2 fragCoord = vTextureCoord;\n        vec4 fragColor = vColor;\n        \n        vec2 st = vTextureCoord;\n        float pct = dist(st, vec2(0.5));\n\n        float a = get_angle(st);\n        float t = period;\n\n        float inner = max((radius - width) / resolution.x, (radius - width) / resolution.y);\n        float outer = max(radius / resolution.x, radius / resolution.y);\n\n        float x1 = mod(t, 1.0);\n        float x2 = mod(t + angle, 1.0);\n\n        if (x1 < x2) {\n            if (a > x1 && a < x2) {\n                float val = (1.0 - (x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (x2 - a));\n                fragColor = mix(backgroundColor, color, 1.0);\n            } else {\n                fragColor = backgroundColor;\n            }\n        } else {\n            if (a < x2) {\n                float val = (1.0 - (x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (x2 - a));\n                fragColor = mix(backgroundColor, color, val);\n            } else if (a > x1) {\n                float val = (1.0 - (1.0 + x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (1.0 + x2 - a));\n                fragColor = mix(backgroundColor, color, val);\n            } else {\n                fragColor = backgroundColor;\n            }\n        }\n\n        float s = smoothstep(inner, inner + smooth + 0.00001, pct) * (1.0 - smoothstep(outer, outer + smooth + 0.00001, pct));\n        gl_FragColor = texture2D(uSampler, fragCoord) * (1. - s * fragColor.a) + fragColor * s;\n    }\n";

  // src/components/content/Rating.js
  var Rating = class extends Lightning_default.Component {
    static _template() {
      return {
        texture: Lightning_default.Tools.getRoundRect(100, 100, 50, 0, 16777215, true, 4278721570),
        rtt: true,
        RatingNumber: {
          mount: 0.5,
          x: (w) => w / 2 - 2,
          y: (h) => h / 2 + 4,
          Number: {
            text: {
              text: "0",
              fontSize: 34,
              fontFace: "SemiBold"
            }
          },
          Percentage: {
            y: 6,
            text: {
              text: "%",
              fontSize: 12,
              fontFace: "SemiBold"
            }
          }
        },
        RatingCircle: {
          rect: true,
          rtt: true,
          color: 16777215,
          mount: 0.5,
          x: 51,
          y: 51,
          w: 90,
          h: 90,
          rotation: Math.PI * 0.5,
          shader: {
            type: CircleProgressShader,
            radius: 45,
            width: 5,
            angle: 0,
            smooth: 7e-3,
            color: 4291895644,
            backgroundColor: 4280304937
          }
        }
      };
    }
    _init() {
      this._voteAverage = 0;
      this.tag("Number").on("txLoaded", () => {
        this.tag("RatingNumber").w = this.tag("Number").renderWidth;
        this.tag("RatingNumber").h = this.tag("Number").renderHeight;
        this.tag("Percentage").x = this.tag("Number").renderWidth;
      });
      this._ratingAnimation = this.animation({
        duration: 0.6,
        timingFunction: "cubic-bezier(.94,.42,.49,.99)",
        actions: [{
          t: "RatingCircle",
          p: "shader.angle",
          rv: 1e-4,
          v: (e) => {
            return this._voteAverage / 10 * e;
          }
        }, {
          t: "Number",
          p: "text.text",
          rv: 0,
          v: (e) => {
            return "".concat(Math.floor(this._voteAverage * 10 * e));
          }
        }]
      });
    }
    set voteAverage(v) {
      this._voteAverage = v;
      this._ratingColor();
    }
    startAnimation(skipAnimation) {
      if (skipAnimation || this._voteAverage === 0) {
        this.tag("RatingCircle").shader.angle = this._voteAverage / 10;
        this.tag("Number").text = "".concat(this._voteAverage === 0 ? "-" : Math.floor(this._voteAverage * 10));
        this.tag("Percentage").visible = this._voteAverage !== 0;
      } else {
        this._ratingAnimation.start();
      }
    }
    _ratingColor() {
      let color = 4280406138;
      let backgroundColor = 4280304937;
      if (this._voteAverage === 0) {
        color = 4280406138;
        backgroundColor = 4280304937;
      } else if (this._voteAverage / 10 < 0.4) {
        color = 4291895644;
        backgroundColor = 4283896885;
      } else if (this._voteAverage / 10 >= 0.4 && this._voteAverage / 10 < 0.7) {
        color = 4292007217;
        backgroundColor = 4282531087;
      }
      this.tag("RatingCircle").shader.color = color;
      this.tag("RatingCircle").shader.backgroundColor = backgroundColor;
      this.application.emit("ratingColor", color);
    }
  };

  // src/components/content/MovieInfo.js
  var MovieInfo = class extends Lightning_default.Component {
    static _template() {
      return {
        Date: {
          y: 8,
          text: {
            fontFace: "Regular",
            fontSize: 28,
            textColor: 4285953654
          }
        },
        Genres: {
          y: 50,
          text: {
            fontFace: "Regular",
            fontSize: 24,
            textColor: 4280406138
          }
        }
      };
    }
    _init() {
      this.listeners = {
        ratingColor: (color) => {
          this.tag("Genres").text.textColor = color;
        }
      };
    }
    _attach() {
      ["ratingColor"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _detach() {
      ["ratingColor"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
    set info(_ref) {
      let {
        date,
        genres
      } = _ref;
      this.tag("Date").text = date;
      this.tag("Genres").text = genres;
    }
  };

  // src/components/Button.js
  var Button = class extends Lightning_default.Component {
    static _template() {
      return {
        color: 4280406138,
        rtt: true,
        texture: Lightning_default.Tools.getRoundRect(180, 60, 30, 0, 4280406138, true, 4294967295),
        transitions: {
          alpha: {
            duration: 0.3,
            timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
          },
          y: {
            duration: 0.3,
            timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
          }
        },
        Button: {
          x: 5,
          y: 5,
          texture: Lightning_default.Tools.getRoundRect(50, 50, 25, 0, 4280406138, true, 4278721570),
          Ok: {
            mount: 0.5,
            x: 26,
            y: 28,
            text: {
              text: "OK",
              fontFace: "Regular",
              fontSize: 19
            }
          }
        },
        Label: {
          mount: 0.5,
          x: 114,
          y: 33,
          text: {
            text: "Details",
            fontFace: "Regular",
            fontSize: 24,
            textColor: 4278721570
          }
        }
      };
    }
    _init() {
      this.listeners = {
        ratingColor: (color) => {
          this.color = color;
        }
      };
    }
    set label(v) {
      this.tag("Label").text = v;
    }
    _active() {
      ["ratingColor"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _inactive() {
      ["ratingColor"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
  };

  // src/components/Background.js
  var Background = class extends Lightning_default.Component {
    static _template() {
      return {
        Backgrounds: {
          w: 1920,
          h: 1080,
          BackgroundA: {
            colorLeft: 1358954495,
            colorRight: 9490081
          },
          BackgroundB: {
            colorLeft: 1090519039,
            colorRight: 9490081
          }
        }
      };
    }
    _init() {
      this._index = 0;
      this.tag("BackgroundA").on("txLoaded", () => {
        this.tag("BackgroundA").setSmooth("alpha", 1, {
          duration: 0.6,
          timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
        });
        this.tag("BackgroundB").setSmooth("alpha", 0, {
          duration: 0.3,
          timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
        });
      });
      this.tag("BackgroundB").on("txLoaded", () => {
        this.tag("BackgroundB").setSmooth("alpha", 1, {
          duration: 0.6,
          timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
        });
        this.tag("BackgroundA").setSmooth("alpha", 0, {
          duration: 0.3,
          timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
        });
      });
      this.tag("BackgroundA").transition("alpha").on("finish", () => {
        if (this._index === 0) {
          this.application.emit("backgroundLoaded");
        }
      });
      this.tag("BackgroundB").transition("alpha").on("finish", () => {
        if (this._index === 1) {
          this.application.emit("backgroundLoaded");
        }
      });
      this.listeners = {
        setBackground: (_ref) => {
          let {
            src
          } = _ref;
          this._item = null;
          this._skip = false;
          this._src = src;
        },
        readyForBackground: () => {
          if (!this._skip) {
            this._setBackground(this._src);
          }
        },
        setItem: (_ref2) => {
          let {
            item
          } = _ref2;
          if (this._item && item.background === this._item.background) {
            this._skip = true;
            return;
          }
          this._skip = false;
          this._item = item;
          let src = Utils_default.asset("images/background.png");
          if (this._item.background) {
            src = getImgUrl(this._item.background, 1280);
          }
          this._src = src;
        }
      };
    }
    _attach() {
      ["setBackground", "setItem", "readyForBackground"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _detach() {
      ["setBackground", "setItem", "readyForBackground"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
    _setBackground(src) {
      if (src === this._lastSrc)
        return;
      this._lastSrc = src;
      this.tag("Backgrounds").children[this._index].patch({
        texture: Img_default(src).contain(1920, 1080),
        alpha: 1e-3
      });
      this._index ^= 1;
    }
  };

  // src/pages/popular/Content.js
  var Content = class extends Lightning_default.Component {
    static _template() {
      return {
        alpha: 1e-3,
        Title: {
          type: Title
        },
        Details: {
          Rating: {
            type: Rating
          },
          MovieInfo: {
            x: 120,
            y: 4,
            type: MovieInfo
          }
        },
        Button: {
          type: Button,
          label: "Details"
        }
      };
    }
    _init() {
      this._detailAnimation = this.animation({
        duration: 0.6,
        actions: [{
          t: "",
          p: "alpha",
          rv: 0,
          v: {
            0: {
              v: 0
            },
            1: {
              v: 1
            }
          }
        }, {
          t: "",
          p: "x",
          rv: 90,
          v: {
            0: {
              v: 130
            },
            1: {
              v: 90
            }
          }
        }]
      });
      this._detailAnimation.on("finish", () => {
        this.application.emit("readyForBackground");
      });
      this.listeners = {
        titleLoaded: () => {
          this._detailAnimation.start();
          this.application.emit("contentHeight", this.tag("Title").renderHeight + 200);
          this.tag("Rating").startAnimation();
          this.h = this.tag("Title").renderHeight + 160;
          this.tag("Details").y = this.tag("Title").renderHeight - 20;
          this.tag("Button").y = this.tag("Title").renderHeight + 120;
          this._refocus();
        },
        setItem: (_ref) => {
          let {
            item
          } = _ref;
          this._item = item;
        },
        itemAnimationEnded: () => {
          this._setDetails(this._item);
        }
      };
      this.transition("alpha").on("finish", () => {
        this.application.emit("contentHidden");
      });
    }
    _attach() {
      ["titleLoaded", "setItem", "itemAnimationEnded"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _detach() {
      ["titleLoaded", "setItem", "itemAnimationEnded"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
    _setDetails(item) {
      if (this._details === item)
        return;
      this._details = item;
      this._item = item;
      this.alpha = 1e-3;
      this.tag("Rating").voteAverage = item.voteAverage;
      this.tag("Title").label = item.title;
      this.tag("MovieInfo").info = {
        date: item.formattedReleaseDate,
        genres: item.genresAsString
      };
    }
    hide() {
      this.patch({
        smooth: {
          alpha: 0,
          x: 40
        },
        Button: {
          smooth: {
            alpha: 0,
            y: 60
          }
        }
      });
      ["titleLoaded", "setItem"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
  };

  // src/pages/popular/index.js
  var Popular = class extends Lightning_default.Component {
    static _template() {
      return {
        Content: {
          mountY: 0.5,
          y: 540,
          x: 90,
          type: Content
        },
        List: {}
      };
    }
    _init() {
      this._index = 0;
      this.listeners = {
        contentHidden: () => {
          this.widgets.menu.hide();
          Router_default.navigate("details/".concat(this._item.type, "/").concat(this._item.id), true);
        }
      };
    }
    _attach() {
      ["contentHidden", "readyForNavigate"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _detach() {
      ["contentHidden", "readyForNavigate"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
    _active() {
      this.widgets.menu.show();
    }
    set content(v) {
      if (v) {
        this.tag("List").childList.add(v);
      }
    }
    $firstItemCreated() {
      this._refocus();
    }
    _getFocused() {
      return this.selectedList;
    }
    get selectedList() {
      return this.tag("List").children[this._index];
    }
    $selectItem(_ref) {
      let {
        item
      } = _ref;
      this._item = item;
      Router_default.navigate("details/".concat(this._item.type, "/").concat(this._item.id), true);
    }
    historyState(params) {
      if (params) {
        this.selectedList.index = params.listIndex;
        this.selectedList.resetConfigIndex();
      } else {
        if (this.tag("List").children[this._index]) {
          return {
            listIndex: this.tag("List").children[this._index].index
          };
        }
      }
    }
  };

  // src/pages/popular/Movie.js
  var Movie = class extends Popular {
    _active() {
      this.widgets.menu.select("movie", true);
    }
    _handleDown() {
      this.widgets.menu.select("tv");
      Router_default.navigate("tv");
    }
  };

  // src/pages/popular/Tv.js
  var Tv = class extends Popular {
    _active() {
      this.widgets.menu.select("tv", true);
    }
    _handleUp() {
      this.widgets.menu.select("movie");
      Router_default.navigate("movie");
    }
    _handleDown() {
      this.widgets.menu.select("accessibility");
      Router_default.navigate("accessibility");
    }
  };

  // src/pages/details/Logo.js
  var Logo = class extends Lightning_default.Component {
    static _template() {
      return {
        colorTop: 4291019715,
        colorBottom: 4294967295,
        texture: Lightning_default.Tools.getRoundRect(120, 120, 60, 0, 4294967295, true, 4294967295),
        mountX: 1,
        rtt: true,
        Logo: {
          mount: 0.5,
          x: 60,
          y: 60
        }
      };
    }
    set logo(v) {
      this.tag("Logo").texture = Img_default("https://image.tmdb.org/t/p/w300/".concat(v)).contain(80, 60);
    }
  };

  // src/pages/details/index.js
  var Details = class extends Lightning_default.Component {
    static _template() {
      return {
        Item: {
          x: 90,
          mountY: 0.5,
          y: 514,
          transitions: {
            alpha: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            mountY: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            y: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            x: {
              duration: 0.6,
              delay: 0.4,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          },
          Title: {
            type: Title
          },
          Details: {
            Rating: {
              type: Rating
            },
            MovieInfo: {
              x: 120,
              y: 4,
              type: MovieInfo
            }
          },
          Holder: {
            alpha: 0,
            transitions: {
              alpha: {
                duration: 0.6,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              },
              y: {
                duration: 0.6,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              }
            },
            Overview: {
              text: {
                fontFace: "Regular",
                fontSize: 24,
                lineHeight: 44,
                textColor: 4291019715,
                wordWrapWidth: 1e3
              }
            }
          }
        },
        LogosHolder: {
          y: 120,
          Logos: {
            mountX: 1,
            x: 1830
          }
        }
      };
    }
    _init() {
      this.tag("Item").transition("y").on("finish", () => {
        this.tag("Holder").y = this.tag("Holder").y + 30;
        this.tag("Holder").patch({
          smooth: {
            alpha: 1,
            y: this.tag("Holder").y - 30
          }
        });
      });
      this.tag("Holder").transition("y").on("finish", () => {
        this.application.emit("readyForBackground");
      });
      this.transition("alpha").on("finish", () => {
        this.widgets.detailsmenu.select("cast");
        Router_default.navigate("cast/".concat(this._detailsType, "/").concat(this._item.id), true);
      });
      this.listeners = {
        titleLoaded: () => {
          this.tag("Rating").startAnimation(true);
          this.h = this.tag("Title").renderHeight + 160;
          this.tag("Details").y = this.tag("Title").renderHeight - 20;
          this.tag("Holder").y = this.tag("Title").renderHeight + 100;
          this.application.emit("contentHeight", 0);
        },
        backgroundLoaded: () => {
          this.tag("Logos").children.forEach((logo) => {
            logo.setSmooth("x", 0);
            logo.setSmooth("alpha", 1);
          });
        }
      };
    }
    _attach() {
      ["titleLoaded", "backgroundLoaded"].forEach((event) => {
        this.application.on(event, this.listeners[event]);
      });
    }
    _detach() {
      ["titleLoaded", "backgroundLoaded"].forEach((event) => {
        this.application.off(event, this.listeners[event]);
      });
    }
    _active() {
      this.patch({
        Item: {
          smooth: {
            y: 110,
            x: 110,
            mountY: 0
          }
        }
      });
      this.widgets.detailsmenu.select("details", true);
    }
    _inactive() {
      this.patch({
        Item: {
          smooth: {
            y: 514,
            x: 90,
            mountY: 0.5
          }
        }
      });
    }
    set content(v) {
      this._item = v;
      this.tag("Title").label = this._item.title;
      this.tag("MovieInfo").info = {
        date: this._item.formattedReleaseDate,
        genres: this._item.genresAsString
      };
      this.tag("Overview").text = this._item.overview;
      this.tag("Rating").voteAverage = this._item.voteAverage;
      let logoIndex = 0;
      this._item.productionCompanies.forEach((company) => {
        if (company.logo_path !== null && logoIndex < 6) {
          this.tag("Logos").childList.a(this.stage.c({
            type: Logo,
            logo: company.logo_path,
            y: logoIndex * 140,
            x: 30,
            alpha: 1e-3,
            transitions: {
              alpha: {
                duration: 0.6,
                delay: 0.15 * logoIndex,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              },
              x: {
                duration: 0.6,
                delay: 0.15 * logoIndex,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              }
            }
          }));
          logoIndex++;
        }
      });
      this.application.emit("setItem", {
        item: this._item
      });
    }
    set detailsType(v) {
      this._detailsType = v;
    }
    _handleDown() {
      this.patch({
        smooth: {
          alpha: 0
        }
      });
    }
  };

  // src/pages/Cast.js
  var Cast = class extends Lightning_default.Component {
    static _template() {
      return {
        List: {
          alpha: 1e-3,
          x: 110,
          mountY: 0.5,
          y: 520,
          h: 451,
          transitions: {
            x: {
              duration: 0.6,
              delay: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            alpha: {
              duration: 0.6,
              delay: 0.3,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        }
      };
    }
    _active() {
      this.widgets.detailsmenu.select("cast", true);
      const src = Utils_default.asset("images/background.png");
      this.application.emit("setBackground", {
        src
      });
      this.application.emit("contentHeight", 640);
      this.tag("List").transition("alpha").on("finish", () => {
        this.application.emit("readyForBackground");
      });
      this.tag("List").patch({
        smooth: {
          alpha: 1,
          x: 90
        }
      });
    }
    set content(v) {
      if (v) {
        this.tag("List").childList.add(v);
      }
    }
    set detailsType(v) {
      this._detailsType = v;
    }
    set detailsId(v) {
      this._detailsId = v;
    }
    _handleUp() {
      Router_default.navigate("details/".concat(this._detailsType, "/").concat(this._detailsId), true);
      this.widgets.detailsmenu.select("details");
    }
    _handleDown() {
      Router_default.navigate("similar/".concat(this._detailsType, "/").concat(this._detailsId), true);
      this.widgets.detailsmenu.select("similar");
    }
    _getFocused() {
      return this.tag("List").children[0];
    }
  };

  // src/pages/Similar.js
  var Similar = class extends Popular {
    _active() {
      this.widgets.detailsmenu.select("similar", true);
    }
    set detailsType(v) {
      this._detailsType = v;
    }
    set detailsId(v) {
      this._detailsId = v;
    }
    _handleUp() {
      this.widgets.detailsmenu.select("cast");
      Router_default.navigate("cast/".concat(this._detailsType, "/").concat(this._detailsId), true);
    }
    _getFocused() {
      return this.tag("List").children[this._index];
    }
  };

  // src/pages/People.js
  var People = class extends Lightning_default.Component {
    static _template() {
      return {
        Item: {
          flex: {
            direction: "column"
          },
          x: 90,
          mountY: 0.5,
          y: 514,
          transitions: {
            alpha: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            mountY: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            y: {
              duration: 0.3,
              delay: 0.1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            x: {
              duration: 0.6,
              delay: 0.4,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          },
          Title: {
            type: Title,
            skip: true
          },
          Birth: {
            text: {
              fontFace: "Regular",
              fontSize: 24,
              textColor: 4280406138
            }
          },
          Holder: {
            flex: {
              direction: "column"
            },
            flexItem: {
              marginTop: 40
            },
            alpha: 0,
            transitions: {
              alpha: {
                duration: 0.6,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              },
              y: {
                duration: 0.6,
                timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
              }
            },
            Biography: {
              text: {
                fontFace: "Regular",
                fontSize: 24,
                lineHeight: 44,
                wordWrapWidth: 1480,
                textColor: 4291019715
              }
            }
          }
        }
      };
    }
    _init() {
      this.tag("Item").transition("y").on("finish", () => {
        this.tag("Holder").y = 30;
        this.tag("Holder").patch({
          smooth: {
            alpha: 1,
            y: 0
          }
        });
      });
    }
    _active() {
      this.application.emit("contentHeight", 0);
      this.patch({
        Item: {
          smooth: {
            y: 110,
            x: 110,
            mountY: 0
          }
        }
      });
      this.tag("Item").transition("y").on("finish", () => {
        this.application.emit("readyForBackground");
      });
      this.widgets.peoplemenu.select("details", true);
    }
    _inactive() {
      this.patch({
        Item: {
          smooth: {
            y: 514,
            x: 90,
            mountY: 0.5
          }
        }
      });
    }
    set content(v) {
      this._item = v;
      this.tag("Title").label = this._item.name;
      this.tag("Birth").text = "".concat(this._item.birthday, " | ").concat(this._item.placeOfBirth);
      if (this._item._biography.length >= 600) {
        this.tag("Biography").text = this._truncateString(this._item._biography, 700);
      } else {
        this.tag("Biography").text = this._item._biography;
      }
      let src = Utils_default.asset("images/background.png");
      if (this._item.profilePath) {
        src = getImgUrl(this._item.profilePath, 780);
      }
      this.application.emit("setBackground", {
        src
      });
    }
    _handleDown() {
      this.widgets.peoplemenu.select("moviecredits");
      Router_default.navigate("movie_credits/movie/".concat(this._item.id), true);
    }
    _truncateString(s, n) {
      let cut = s.indexOf(" ", n);
      if (cut === -1)
        return s;
      return "".concat(s.substring(0, cut), "...");
    }
  };

  // src/pages/MovieCredits.js
  var MovieCredits = class extends Popular {
    _active() {
      this.widgets.peoplemenu.select("moviecredits", true);
    }
    set peopleId(v) {
      this._peopleId = v;
    }
    _handleUp() {
      Router_default.navigate("people/".concat(this._peopleId), true);
      this.widgets.peoplemenu.select("details");
    }
    _handleDown() {
      Router_default.navigate("tv_credits/tv/".concat(this._peopleId), true);
      this.widgets.peoplemenu.select("tvcredits");
    }
    _getFocused() {
      return this.tag("List").children[this._index];
    }
  };

  // src/pages/Error.js
  var Error2 = class extends Lightning_default.Component {
    static _template() {
      return {
        rect: true,
        w: 1920,
        h: 1080,
        color: 4290184710,
        Label: {
          x: 100,
          y: 100,
          text: {
            text: "Error",
            fontSize: 22
          }
        }
      };
    }
    _handleEnter() {
      Router_default.navigate("main");
    }
    _focus() {
      console.log("focus error page");
    }
    set error(obj) {
      const {
        page,
        error
      } = obj;
      console.log(page, error);
      const errorMessage = "\nerror while loading page: ".concat(page.constructor.name, "\npress enter to navigate to home\n--\nloaded via hash: ").concat(page[Symbol.for("hash")], "\nresulted in route: ").concat(page[Symbol.for("route")], "\n--\n").concat(error.toString());
      this.tag("Label").text = errorMessage;
    }
    easing() {
      return "up";
    }
  };

  // src/pages/NotFound.js
  var NotFound = class extends Lightning_default.Component {
    static _template() {
      return {
        Label: {
          x: 960,
          y: 530,
          text: {
            text: "Page not found"
          }
        }
      };
    }
  };

  // src/pages/Splash.js
  var Splash = class extends Lightning_default.Component {
    static _template() {
      return {
        Background: {
          w: 1920,
          h: 1080,
          colorBottom: 4278190080,
          scale: 1.2,
          src: Utils_default.asset("images/background.png"),
          transitions: {
            scale: {
              duration: 1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        },
        Logo: {
          src: Utils_default.asset("images/logo-large.png"),
          mount: 0.5,
          x: 960,
          y: 640,
          alpha: 1e-3,
          transitions: {
            alpha: {
              duration: 1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            },
            y: {
              duration: 1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        },
        Spinner: {
          src: Utils_default.asset("images/spinner.png"),
          mountX: 0.5,
          x: 960,
          y: 920,
          alpha: 1e-3,
          color: 2868903935,
          transitions: {
            alpha: {
              duration: 1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        }
      };
    }
    _init() {
      this.tag("Logo").on("txLoaded", () => {
        this.tag("Logo").setSmooth("alpha", 1);
        this.tag("Logo").setSmooth("y", 540);
        this.tag("Background").setSmooth("scale", 1);
      });
      this.tag("Spinner").on("txLoaded", () => {
        this.tag("Spinner").setSmooth("alpha", 1);
        this._spinnerAnimation.start();
      });
      this.application.on("booted", () => {
        Router_default.navigate("movies", false);
      });
      this._spinnerAnimation = this.animation({
        duration: 1,
        repeat: -1,
        actions: [{
          t: "Spinner",
          p: "rotation",
          sm: 0,
          v: function(t) {
            if (t < 0.125) {
              return 45 * (Math.PI / 180);
            } else if (t < 0.25) {
              return 90 * (Math.PI / 180);
            } else if (t < 0.375) {
              return 135 * (Math.PI / 180);
            } else if (t < 0.5) {
              return 180 * (Math.PI / 180);
            } else if (t < 0.625) {
              return 225 * (Math.PI / 180);
            } else if (t < 0.75) {
              return 270 * (Math.PI / 180);
            } else if (t < 0.875) {
              return 315 * (Math.PI / 180);
            } else if (t < 1) {
              return 360 * (Math.PI / 180);
            }
          }
        }]
      });
      setTimeout(() => {
        Router_default.navigate("movie", false);
      }, 3e3);
    }
    _inactive() {
      this._spinnerAnimation.stop();
    }
  };

  // src/lib/models/Container.js
  var Container = class {
    constructor(obj, type, genres) {
      this._page = obj.page;
      this._total_results = obj.total_results;
      this._type = type;
      this._items = obj.results.map((item) => {
        switch (type) {
          case "movie":
            return new Movie2(item, genres);
          case "tv":
            return new Tv2(item, genres);
        }
      });
    }
    get page() {
      return this._page;
    }
    get total() {
      return this._total_results;
    }
    get type() {
      return this._type;
    }
    get items() {
      return this._items;
    }
  };

  // src/lib/models/Movie.js
  var Movie2 = class {
    constructor(obj, genres) {
      this._adult = obj.adult;
      this._backdrop_path = obj.backdrop_path;
      this._genres = obj.genre_ids.map((id) => {
        return genres.find((genre) => {
          return genre.id === id;
        });
      }).filter((item) => item);
      this._id = obj.id;
      this._original_language = obj.original_language;
      this._overview = obj.overview;
      this._popularity = obj.popularity;
      this._poster_path = obj.poster_path;
      this._release_date = obj.release_date;
      this._title = obj.title;
      this._type = "movie";
      this._video = obj.video;
      this._vote_average = obj.vote_average;
      this._vote_count = obj.vote_count;
    }
    get adult() {
      return this._adult;
    }
    get background() {
      return this._backdrop_path;
    }
    get genres() {
      return this._genres;
    }
    get genresAsString() {
      let genres = "";
      this._genres.forEach((genre, index) => {
        if (index > 0) {
          genres += " | ".concat(genre.name);
        } else {
          genres += "".concat(genre.name);
        }
      });
      return genres === "" ? "-" : genres;
    }
    get id() {
      return this._id;
    }
    get originalLanguage() {
      return this._original_language;
    }
    get overview() {
      return this._overview;
    }
    get popularity() {
      return this._popularity;
    }
    get poster() {
      return this._poster_path;
    }
    get releaseDate() {
      return this._release_date;
    }
    get formattedReleaseDate() {
      if (!this._release_date) {
        return "Date not available";
      } else {
        const date = new Date(this._release_date);
        return "".concat(date.toLocaleString("default", {
          month: "long"
        }), " ").concat(date.getDate(), " ").concat(date.getFullYear());
      }
    }
    get title() {
      return this._title;
    }
    get type() {
      return this._type;
    }
    get video() {
      return this._video;
    }
    get voteAverage() {
      return this._vote_average;
    }
    get voteCount() {
      return this._vote_count;
    }
  };

  // src/lib/models/Tv.js
  var Tv2 = class {
    constructor(obj, genres) {
      this._backdrop_path = obj.backdrop_path;
      this._first_air_date = obj.first_air_date;
      this._genres = obj.genre_ids.map((id) => {
        return genres.find((genre) => {
          return genre.id === id;
        });
      }).filter((item) => item);
      this._id = obj.id;
      this._name = obj.name;
      this._origin_country = obj.origin_country;
      this._original_language = obj.original_language;
      this._original_name = obj.original_name;
      this._overview = obj.overview;
      this._popularity = obj.popularity;
      this._poster_path = obj.poster_path;
      this._title = obj.name;
      this._type = "tv";
      this._vote_average = obj.vote_average;
      this._vote_count = obj.vote_count;
    }
    get background() {
      return this._backdrop_path;
    }
    get firstAirDate() {
      return this._first_air_date;
    }
    get formattedReleaseDate() {
      if (!this._first_air_date) {
        return "Date not available";
      } else {
        const date = new Date(this._first_air_date);
        return "".concat(date.toLocaleString("default", {
          month: "long"
        }), " ").concat(date.getDate(), ", ").concat(date.getFullYear());
      }
    }
    get genres() {
      return this._genres;
    }
    get genresAsString() {
      let genres = "";
      this._genres.forEach((genre, index) => {
        if (index > 0) {
          genres += " | ".concat(genre.name);
        } else {
          genres += "".concat(genre.name);
        }
      });
      return genres === "" ? "-" : genres;
    }
    get id() {
      return this._id;
    }
    get name() {
      return this._name;
    }
    get originalCountry() {
      return this._origin_country;
    }
    get originalLanguage() {
      return this._original_language;
    }
    get originalName() {
      return this._original_name;
    }
    get overview() {
      return this._overview;
    }
    get title() {
      return this._title;
    }
    get type() {
      return this._type;
    }
    get popularity() {
      return this._popularity;
    }
    get poster() {
      return this._poster_path;
    }
    get voteAverage() {
      return this._vote_average;
    }
    get voteCount() {
      return this._vote_count;
    }
  };

  // src/lib/models/Details.js
  var Details2 = class {
    constructor(obj) {
      this._adult = obj.adult;
      this._backdrop_path = obj.backdrop_path;
      this._belong_to_collection = obj.belongs_to_collection;
      this._budget = obj.budget;
      this._genres = obj.genres;
      this._homepage = obj.homepage;
      this._id = obj.id;
      this._imdb_id = obj.imdb_id;
      this._original_language = obj.original_language;
      this._original_title = obj.original_title;
      this._overview = obj.overview;
      this._popularity = obj.popularity;
      this._poster_path = obj.poster_path;
      this._production_companies = obj.production_companies;
      this._production_countries = obj.production_countries;
      this._release_date = obj.release_date || obj.first_air_date;
      this._revenue = obj.revenue;
      this._runtime = obj.runtime;
      this._spoken_languages = obj.spoken_languages;
      this._status = obj.status;
      this._tagline = obj.tagline;
      this._title = obj.title || obj.name;
      this._video = obj._video;
      this._vote_average = obj.vote_average;
      this._vote_count = obj.vote_count;
    }
    get adult() {
      return this._adult;
    }
    get background() {
      return this._backdrop_path;
    }
    get belongToCollection() {
      return this._belong_to_collection;
    }
    get budget() {
      return this._budget;
    }
    get genres() {
      return this._genres;
    }
    get genresAsString() {
      let genres = "";
      this._genres.forEach((genre, index) => {
        if (index > 0) {
          genres += " | ".concat(genre.name);
        } else {
          genres += "".concat(genre.name);
        }
      });
      return genres === "" ? "-" : genres;
    }
    get homepage() {
      return this._homepage;
    }
    get id() {
      return this._id;
    }
    get imdbId() {
      return this._imdb_id;
    }
    get originalLanguage() {
      return this._original_language;
    }
    get originalTitle() {
      return this._original_title;
    }
    get overview() {
      return this._overview;
    }
    get popularity() {
      return this._popularity;
    }
    get poster() {
      return this._poster_path;
    }
    get productionCompanies() {
      return this._production_companies;
    }
    get productionCountries() {
      return this._production_countries;
    }
    get releaseDate() {
      return this._release_date;
    }
    get formattedReleaseDate() {
      if (!this._release_date) {
        return "Date not available";
      } else {
        const date = new Date(this._release_date);
        return "".concat(date.toLocaleString("default", {
          month: "long"
        }), " ").concat(date.getDate(), " ").concat(date.getFullYear());
      }
    }
    get revenue() {
      return this._revenue;
    }
    get runtime() {
      return this._runtime;
    }
    get spokenLanguages() {
      return this._spoken_languages;
    }
    get status() {
      return this._status;
    }
    get tagline() {
      return this._tagline;
    }
    get title() {
      return this._title;
    }
    get video() {
      return this._video;
    }
    get voteAverage() {
      return this._vote_average;
    }
    get voteCount() {
      return this._vote_count;
    }
  };

  // src/lib/models/Cast.js
  var Cast2 = class {
    constructor(obj, type) {
      this._cast = obj.cast;
      this._crew = obj.crew;
      this._id = obj.id;
      this._type = type;
    }
    get items() {
      return this._cast;
    }
    get type() {
      return this._type;
    }
    get cast() {
      return this._cast;
    }
    get crew() {
      return this._crew;
    }
    get id() {
      return this._id;
    }
  };

  // src/lib/models/People.js
  var People2 = class {
    constructor(obj) {
      this._adult = obj.adult;
      this._also_known_as = obj.also_known_as;
      this._biography = obj.biography;
      this._birthday = obj.birthday;
      this._deathday = obj.deathday;
      this._gender = obj.gender;
      this._homepage = obj.homepage;
      this._id = obj.id;
      this._imdb_id = obj.id;
      this._known_for_department = obj.known_for_department;
      this._name = obj.name;
      this._place_of_birth = obj.place_of_birth;
      this._popularity = obj.popularity;
      this._profile_path = obj.profile_path;
    }
    get adult() {
      return this._adult;
    }
    get alsoKnownAs() {
      return this._also_known_as;
    }
    get biography() {
      return this._biography;
    }
    get birthday() {
      const date = new Date(this._birthday);
      return "".concat(date.toLocaleString("default", {
        month: "long"
      }), " ").concat(date.getDate(), ", ").concat(date.getFullYear());
    }
    get deathday() {
      return this._deathday;
    }
    get gender() {
      return this._gender;
    }
    get homepage() {
      return this._homepage;
    }
    get id() {
      return this._id;
    }
    get imdbId() {
      return this._imdb_id;
    }
    get knowForDepartment() {
      return this._known_for_department;
    }
    get name() {
      return this._name;
    }
    get placeOfBirth() {
      return this._place_of_birth;
    }
    get popularity() {
      return this._popularity;
    }
    get profilePath() {
      return this._profile_path;
    }
  };

  // src/lib/factory.js
  var stage2;
  var models = /* @__PURE__ */ new Map();
  var listComponents = /* @__PURE__ */ new Map();
  var itemComponents = /* @__PURE__ */ new Map();
  models.set("movie", Container);
  models.set("tv", Container);
  models.set("cast", Cast2);
  listComponents.set("movie", FlipList);
  listComponents.set("tv", FlipList);
  listComponents.set("cast", List);
  itemComponents.set("movie", Item);
  itemComponents.set("tv", Item);
  itemComponents.set("cast", Actor);
  var init2 = (stageInstance) => {
    stage2 = stageInstance;
  };
  var list = (type, data, genres) => {
    const container = models.get(type);
    const model = new container(data, type, genres);
    if (model.items.length === 0) {
      return null;
    } else {
      return stage2.c({
        type: listComponents.get(type),
        itemConstruct: itemComponents.get(type),
        items: model.items
      });
    }
  };
  var details = (data) => {
    return new Details2(data);
  };
  var people = (data) => {
    return new People2(data);
  };

  // src/pages/TvCredits.js
  var TvCredits = class extends Popular {
    _active() {
      this.widgets.peoplemenu.select("tvcredits", true);
    }
    set peopleId(v) {
      this._peopleId = v;
    }
    _handleUp() {
      this.widgets.peoplemenu.select("moviecredits");
      Router_default.navigate("movie_credits/movie/".concat(this._peopleId), true);
    }
    _getFocused() {
      return this.tag("List").children[this._index];
    }
  };

  // src/pages/Accessibility.js
  var settings2 = {
    b: 0,
    c: 100,
    s: null,
    i: 1
  };
  var Accessibility = class extends Lightning_default.Component {
    static _template() {
      return {
        x: 110,
        alpha: 1e-3,
        transitions: {
          x: {
            duration: 0.6,
            delay: 0.3,
            timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
          },
          alpha: {
            duration: 0.6,
            delay: 0.3,
            timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
          }
        },
        Example: {
          y: 300,
          src: Utils_default.asset("images/example.png")
        },
        Options: {
          y: 780,
          Filter: {
            type: OptionItem,
            index: 0,
            label: "Color correction",
            options: ["Trichromacy (normal)", "Protanopia", "Deuteranopia", "Tritanopia", "Achromatopsia"],
            onChange: function(selected) {
              settings2.s = selected;
              this.stage.emit("correctColor", {
                settings: settings2
              });
            }
          }
        }
      };
    }
    _init() {
      this._index = 0;
      this._optionsIndex = 0;
    }
    _active() {
      const state3 = Router_default.getHistoryState("accessibility");
      if (state3) {
        this.selectedOption.index = state3.optionsIndex || 0;
        this.selectedOption.update();
      }
      this.widgets.menu.select("accessibility", true);
      const src = Utils_default.asset("images/background.png");
      this.application.emit("setBackground", {
        src
      });
      this.application.emit("contentHeight", 580);
      this.transition("alpha").on("finish", () => {
        this.application.emit("readyForBackground");
      });
      this.patch({
        smooth: {
          alpha: 1,
          x: 90
        }
      });
    }
    _handleUp() {
      this.widgets.menu.select("tv");
      Router_default.navigate("tv");
    }
    _handleLeft() {
      this.selectedOption.toggle(-1);
    }
    _handleRight() {
      this.selectedOption.toggle(1);
    }
    get selectedOption() {
      return this.tag("Options").children[this._optionsIndex];
    }
    _getFocused() {
      return this.selectedOption;
    }
    historyState() {
      return {
        optionsIndex: this.selectedOption.index
      };
    }
  };
  var OptionItem = class extends Lightning_default.Component {
    static _template() {
      return {
        Label: {
          color: 4285953654,
          text: {
            fontSize: 36,
            fontFace: "Regular"
          }
        },
        SelectedOption: {
          flex: {},
          x: 800,
          mountX: 1,
          Left: {
            alpha: 0,
            flexItem: {
              marginRight: 20,
              marginTop: 10
            },
            src: Utils_default.asset("images/arrow.png"),
            rotation: Math.PI
          },
          Option: {
            text: {
              fontSize: 36,
              fontFace: "Regular"
            }
          },
          Right: {
            alpha: 0,
            flexItem: {
              marginLeft: 20,
              marginTop: 10
            },
            src: Utils_default.asset("images/arrow.png")
          }
        }
      };
    }
    _init() {
      this._index = 0;
    }
    set label(v) {
      this._label = v;
      this.tag("Label").text = v;
    }
    set index(v) {
      this._index = v;
    }
    get index() {
      return this._index;
    }
    set options(v) {
      this._options = v;
      this.tag("Option").text = v[this._index];
    }
    set onChange(f) {
      this._onChange = f;
    }
    update() {
      this.tag("Option").text = this.selectedOption;
    }
    toggle(direction) {
      this._index += direction;
      if (this._index < 0) {
        this._index = this._options.length - 1;
      } else if (this._index > this._options.length - 1) {
        this._index = 0;
      }
      this.tag("Option").text = this.selectedOption;
      if (typeof this._onChange === "function") {
        this._onChange.call(this, this.selectedOption);
      }
    }
    _focus() {
      this.patch({
        SelectedOption: {
          Left: {
            alpha: 1
          },
          Right: {
            alpha: 1
          }
        }
      });
    }
    _unfocus() {
      this.patch({
        SelectedOption: {
          Left: {
            alpha: 0
          },
          Right: {
            alpha: 0
          }
        }
      });
    }
    get selectedOption() {
      return this._options[this._index];
    }
  };

  // src/lib/routes.js
  var getPopularContent = async (type) => {
    try {
      const urls = await getPopularUrls(type);
      const response = await Promise.all(urls);
      const [g, data] = await Promise.all(response.map((d) => d.json()));
      return list(type, data, g.genres);
    } catch (e) {
      console.log(e);
    }
  };
  var routes_default = {
    root: "splash",
    routes: [{
      path: "splash",
      component: Splash
    }, {
      path: "movie",
      component: Movie,
      before: async (page) => {
        page.content = await getPopularContent("movie");
      },
      widgets: ["menu"]
    }, {
      path: "tv",
      component: Tv,
      before: async (page) => {
        page.content = await getPopularContent("tv");
      },
      widgets: ["menu"]
    }, {
      path: "accessibility",
      component: Accessibility,
      widgets: ["menu"]
    }, {
      path: "details/:type/:id",
      component: Details,
      before: async (page, _ref) => {
        let {
          type,
          id
        } = _ref;
        return getDetailUrl(type, id).then((response) => {
          return response.json();
        }).then(function(data) {
          page.detailsType = type;
          page.content = details(data);
        }).catch(function(error) {
          console.log(error);
        });
      },
      widgets: ["detailsmenu"]
    }, {
      path: "cast/:type/:id",
      component: Cast,
      before: async (page, _ref2) => {
        let {
          type,
          id
        } = _ref2;
        return getCreditsUrl(type, id).then((response) => {
          return response.json();
        }).then(function(data) {
          page.detailsType = type;
          page.detailsId = id;
          page.content = list("cast", data);
        }).catch(function(error) {
          console.log(error);
        });
      },
      widgets: ["detailsmenu"]
    }, {
      path: "similar/:type/:id",
      component: Similar,
      before: async (page, _ref3) => {
        let {
          type,
          id
        } = _ref3;
        return getSimilarUrls(type, id).then((response) => {
          return Promise.all(response).then(function(responses) {
            return Promise.all(responses.map(function(response2) {
              return response2.json();
            }));
          }).then(function(response2) {
            const genres = response2[0].genres;
            const data = response2[1];
            page.detailsType = type;
            page.detailsId = id;
            page.content = list(type, data, genres);
          }).catch(function(error) {
            console.log("error", error);
          });
        });
      },
      widgets: ["detailsmenu"]
    }, {
      path: "people/:id",
      component: People,
      before: async (page, _ref4) => {
        let {
          id
        } = _ref4;
        return getPeopleUrl(id).then((response) => {
          return response.json();
        }).then(function(data) {
          page.content = people(data);
        }).catch(function(error) {
          console.log(error);
        });
      },
      widgets: ["peoplemenu"]
    }, {
      path: "movie_credits/:type/:id",
      component: MovieCredits,
      before: async (page, _ref5) => {
        let {
          type,
          id
        } = _ref5;
        return getCreditsUrls(type, id).then((response) => {
          return Promise.all(response).then(function(responses) {
            return Promise.all(responses.map(function(response2) {
              return response2.json();
            }));
          }).then(function(response2) {
            const genres = response2[0].genres;
            const data = {
              results: response2[1].cast
            };
            page.peopleId = id;
            page.content = list(type, data, genres);
          }).catch(function(error) {
            console.log("error", error);
          });
        });
      },
      widgets: ["peoplemenu"]
    }, {
      path: "tv_credits/:type/:id",
      component: TvCredits,
      before: async (page, _ref6) => {
        let {
          type,
          id
        } = _ref6;
        return getCreditsUrls(type, id).then((response) => {
          return Promise.all(response).then(function(responses) {
            return Promise.all(responses.map(function(response2) {
              return response2.json();
            }));
          }).then(function(response2) {
            const genres = response2[0].genres;
            const data = {
              results: response2[1].cast
            };
            page.peopleId = id;
            page.content = list(type, data, genres);
          }).catch(function(error) {
            console.log("error", error);
          });
        });
      },
      widgets: ["peoplemenu"]
    }, {
      path: "*",
      component: NotFound
    }]
  };

  // src/widgets/Menu.js
  var Menu = class extends Lightning_default.Component {
    static _template() {
      return {
        Lines: {
          Top: {
            x: -12,
            w: 2,
            rect: true,
            color: 1358954495
          },
          Bottom: {
            y: 790,
            mountY: 1,
            x: -12,
            w: 2,
            rect: true,
            color: 1358954495
          }
        },
        Items: {}
      };
    }
    _init() {
      this._id = null;
      this.application.on("contentHeight", (h) => {
        if (h === 0) {
          this.tag("Top").setSmooth("h", 400, {
            duration: 0.3,
            timingFunction: "cubic-bezier(.21,.5,.48,.93)"
          });
          this.tag("Bottom").setSmooth("h", 390, {
            duration: 0.3,
            timingFunction: "cubic-bezier(.21,.5,.48,.93)"
          });
        } else {
          this.tag("Top").setSmooth("h", 440 - this._lineOffset - h / 2 - this._currentIndex * 48, {
            duration: 0.3,
            timingFunction: "cubic-bezier(.21,.5,.48,.93)"
          });
          this.tag("Bottom").setSmooth("h", 330 + this._lineOffset - h / 2 + this._currentIndex * 48, {
            duration: 0.3,
            timingFunction: "cubic-bezier(.21,.5,.48,.93)"
          });
        }
      });
    }
    set items(v) {
      this.tag("Items").children = v.map((_ref) => {
        let {
          label,
          id,
          selected
        } = _ref;
        return {
          type: MenuItem,
          label,
          id,
          selected
        };
      });
    }
    select(id, fastForward) {
      if (id === this._id)
        return;
      this._id = id;
      let y = 0;
      this.tag("Items").children.forEach((item, index) => {
        item.setSmooth("y", y, {
          duration: fastForward ? 0 : 0.3
        });
        if (id === item.id) {
          this._currentIndex = index;
          this.tag("Lines").setSmooth("y", (index + 1) * 48, {
            duration: fastForward ? 0 : 0.3,
            timingFunction: "cubic-bezier(.21,.5,.48,.93)"
          });
          y += 810;
        }
        y += 48;
        item.selected = item.id === id;
      });
      this.tag("Top").setSmooth("h", 400, {
        duration: 0.3,
        timingFunction: "cubic-bezier(.94,.42,.49,.99)"
      });
      this.tag("Bottom").setSmooth("h", 390, {
        duration: 0.3,
        timingFunction: "cubic-bezier(.94,.42,.49,.99)"
      });
    }
    set lineOffset(v) {
      this._lineOffset = v;
    }
    show() {
      this.patch({
        smooth: {
          alpha: 1,
          x: 90
        }
      });
    }
    hide() {
      this.patch({
        smooth: {
          alpha: 0,
          x: 60
        }
      });
    }
  };
  var MenuItem = class extends Lightning_default.Component {
    static _template() {
      return {
        Label: {
          text: {
            fontSize: 28,
            fontFace: "Regular"
          }
        }
      };
    }
    set label(v) {
      this._label = v;
      this.patch({
        Label: {
          text: {
            text: this._label
          }
        }
      });
    }
    set selected(v) {
      this.tag("Label").color = v ? 4294967295 : 4285953654;
    }
    set id(v) {
      this._id = v;
    }
    get id() {
      return this._id;
    }
  };

  // src/shader/ColorShift.js
  var ColorShift = class extends Lightning_default.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = v / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = v / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      const gl = this.gl;
      super.setupUniforms(operation);
      this._setUniform("brightness", this._brightness || 0, gl.uniform1f);
      this._setUniform("contrast", this._contrast || 1, gl.uniform1f);
    }
  };
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform float brightness;\n    uniform float contrast;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }    \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = vision(filter(fragColor)) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,brightness,contrast);        \n        gl_FragColor = vec4(bc.rgb, color.a);          \n    }\n    \n";

  // src/shader/ProtanopiaShader.js
  var ProtanopiaShader = class extends ColorShift {
  };
  ProtanopiaShader.fragmentShaderSource = "    \n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a);      \n    }\n    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }\n    ").concat(ColorShift.after, "    \n");

  // src/shader/DeuteranopiaShader.js
  var DeuteranopiaShader = class extends ColorShift {
  };
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a);    \n    }\n    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }\n    ").concat(ColorShift.after, "    \n");

  // src/shader/TritanopiaShader.js
  var TritanopiaShader = class extends ColorShift {
  };
  TritanopiaShader.fragmentShaderSource = "    \n    ".concat(ColorShift.before, "    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a);\n    }\n    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }    \n    ").concat(ColorShift.after, "       \n");

  // src/shader/AchromatopsiaShader.js
  var AchromatopsiaShader = class extends ColorShift {
  };
  AchromatopsiaShader.fragmentShaderSource = "    \n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n           \n    vec4 vision(vec4 color)\n    {\n        return color; \n    }\n    ").concat(ColorShift.after, "    \n");

  // src/App.js
  var correction = {
    Protanopia: ProtanopiaShader,
    Deuteranopia: DeuteranopiaShader,
    Tritanopia: TritanopiaShader,
    ColorShift,
    Achromatopsia: AchromatopsiaShader
  };
  var App = class extends Router_default.App {
    static getFonts() {
      return [{
        family: "Light",
        url: Utils_default.asset("fonts/Inter-Light.ttf"),
        descriptors: {}
      }, {
        family: "Regular",
        url: Utils_default.asset("fonts/Inter-Regular.ttf"),
        descriptors: {}
      }, {
        family: "Black",
        url: Utils_default.asset("fonts/Inter-Black.ttf"),
        descriptors: {}
      }, {
        family: "SemiBold",
        url: Utils_default.asset("fonts/Inter-SemiBold.ttf"),
        descriptors: {}
      }, {
        family: "Bold",
        url: Utils_default.asset("fonts/Inter-Bold.ttf"),
        descriptors: {}
      }];
    }
    // when App instance is initialized we call the routes
    // this will setup all pages and attach them to there route
    _setup() {
      init2(this.stage);
      Router_default.startRouter(routes_default, this);
    }
    _init() {
      this.stage.on("correctColor", (_ref) => {
        let {
          settings: {
            b,
            c,
            s,
            i
          }
        } = _ref;
        if (correction[s]) {
          this.tag("ColorCorrection").rtt = true;
          this.tag("ColorCorrection").shader = {
            type: correction[s],
            brightness: b,
            contrast: c
          };
        } else {
          this.tag("ColorCorrection").shader = null;
          this.tag("ColorCorrection").rtt = false;
        }
      });
      const times = [];
      let fps;
      let totalFps = 0;
      let totalFrames = 0;
      const refreshLoop = () => {
        window.requestAnimationFrame(() => {
          const now = performance.now();
          while (times.length > 0 && times[0] <= now - 1e3) {
            times.shift();
          }
          times.push(now);
          fps = times.length;
          this.tag("Fps").tag("Amount").text = "".concat(fps);
          totalFps += fps;
          totalFrames++;
          this.tag("Average").tag("Amount").text = "".concat(Math.round(totalFps / totalFrames));
          refreshLoop();
        });
      };
      refreshLoop();
    }
    static _template() {
      return {
        // we MUST spread the base-class template
        // if we want to provide Widgets.
        ColorCorrection: {
          rtt: false,
          w: 1920,
          h: 1080,
          Background: {
            type: Background
          },
          ...super._template(),
          Holder: {
            zIndex: 9999,
            Fps: {
              mountX: 1,
              x: 1760,
              y: 40,
              Amount: {
                text: {
                  text: "-",
                  fontFace: "regular",
                  fontSize: 24
                }
              },
              Unit: {
                x: 54,
                y: 6,
                text: {
                  text: "FPS",
                  fontFace: "regular",
                  textColor: 4291019715,
                  fontSize: 14
                }
              }
            },
            Average: {
              mountX: 1,
              x: 1760,
              y: 74,
              Amount: {
                text: {
                  text: "-",
                  fontFace: "regular",
                  fontSize: 24
                }
              },
              Unit: {
                x: 54,
                y: 6,
                text: {
                  text: "Avg. FPS",
                  textColor: 4291019715,
                  fontFace: "regular",
                  fontSize: 14
                }
              }
            }
          },
          Widgets: {
            Menu: {
              type: Menu,
              x: 90,
              y: 90,
              zIndex: 99,
              visible: false,
              lineOffset: 24,
              items: [{
                label: "Movies",
                id: "movie",
                selected: true
              }, {
                label: "TV",
                id: "tv",
                selected: false
              }, {
                label: "Accessibility",
                id: "accessibility",
                selected: false
              }]
            },
            DetailsMenu: {
              type: Menu,
              x: 90,
              y: 60,
              zIndex: 99,
              visible: false,
              lineOffset: 0,
              items: [{
                label: "About",
                id: "details",
                selected: true
              }, {
                label: "Cast",
                id: "cast",
                selected: false
              }, {
                label: "Similar",
                id: "similar",
                selected: false
              }]
            },
            PeopleMenu: {
              type: Menu,
              x: 90,
              y: 60,
              zIndex: 99,
              visible: false,
              lineOffset: 0,
              items: [{
                label: "Biography",
                id: "details",
                selected: true
              }, {
                label: "Movie credits",
                id: "moviecredits",
                selected: false
              }, {
                label: "TV credits",
                id: "tvcredits",
                selected: false
              }]
            }
          },
          Loading: {}
        }
      };
    }
    /**
     * Show app close dialogue
     * @private
     */
    _handleAppClose() {
      console.log("Close app");
    }
  };

  // src/index.js
  function src_default() {
    return Launch_default(App, ...arguments);
  }
  return __toCommonJS(src_exports);
})();
