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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animate.js":
/*!************************!*\
  !*** ./src/animate.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _revolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revolve */ \"./src/revolve.js\");\n/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate */ \"./src/rotate.js\");\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\n\n\n\n\nfunction animate(){\n    requestAnimationFrame( function(){ animate() });\n\n    Object(_revolve__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    Object(_rotate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    _constructor__WEBPACK_IMPORTED_MODULE_2__[\"controls\"].update();\n\n    _constructor__WEBPACK_IMPORTED_MODULE_2__[\"renderer\"].render(_constructor__WEBPACK_IMPORTED_MODULE_2__[\"scene\"], _constructor__WEBPACK_IMPORTED_MODULE_2__[\"camera\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animate);\n\n//# sourceURL=webpack:///./src/animate.js?");

/***/ }),

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/*! exports provided: scene, camera, renderer, controls, sunRadius, sunMesh, mercuryMesh, venusMesh, earthMesh, marsMesh, jupiterMesh, saturnMesh, saturnRingMesh, uranusMesh, uranusRingMesh, neptuneMesh, plutoMesh, asteroids, distanceFactor, distanceFactorShift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scene\", function() { return scene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return camera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controls\", function() { return controls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sunRadius\", function() { return sunRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sunMesh\", function() { return sunMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mercuryMesh\", function() { return mercuryMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"venusMesh\", function() { return venusMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"earthMesh\", function() { return earthMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"marsMesh\", function() { return marsMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jupiterMesh\", function() { return jupiterMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saturnMesh\", function() { return saturnMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saturnRingMesh\", function() { return saturnRingMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uranusMesh\", function() { return uranusMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uranusRingMesh\", function() { return uranusRingMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"neptuneMesh\", function() { return neptuneMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plutoMesh\", function() { return plutoMesh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asteroids\", function() { return asteroids; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceFactor\", function() { return distanceFactor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceFactorShift\", function() { return distanceFactorShift; });\nconst scene = new THREE.Scene();\n\nconst camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);\ncamera.position.z = 400;\n\n\nconst textureLoader = new THREE.TextureLoader();\nconst spaceTexture = textureLoader.load('../assets/Hubble_Image.jpg');\nscene.background = spaceTexture;\n\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\n\n\nvar controls = new THREE.TrackballControls(camera, renderer.domElement);\ncontrols.rotateSpeed = 1.0;\ncontrols.zoomSpeed = 1.2;\ncontrols.panSpeed = 2;\ncontrols.noZoom = false;\ncontrols.noPan = false;\ncontrols.staticMoving = true;\ncontrols.dynamicDampingFactor = 0.3;\ncontrols.keys = [ 65, 83, 68 ];\n\n\nconst sunTexture = textureLoader.load('../assets/Sun_Texture.jpg');\nconst mercuryTexture = textureLoader.load('../assets/Mercury_Texture.jpg');\nconst venusTexture = textureLoader.load('../assets/Venus_Texture.jpg');\nconst earthTexture = textureLoader.load('../assets/Earth_Texture.jpg');\nconst marsTexture = textureLoader.load('../assets/Mars_Texture.jpg');\nconst jupiterTexture = textureLoader.load('../assets/Jupiter_Texture.jpg');\nconst saturnTexture = textureLoader.load('../assets/Saturn_Texture.jpg');\nconst uranusTexture = textureLoader.load('../assets/Uranus_Texture.jpg');\nconst neptuneTexture = textureLoader.load('../assets/Neptune_Texture.jpg');\nconst plutoTexture = textureLoader.load('../assets/Pluto_Texture.jpg');\nconst asteroidTexture = textureLoader.load('./assets/Asteroid_Texture.jpg');\n\nvar sunRadius = 43.22879;\n// Actual: 432.28794\nconst sunGeometry = new THREE.SphereGeometry(sunRadius, 100, 100);\nconst sunMaterial = new THREE.MeshPhongMaterial({map: sunTexture});\nconst sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);\n\nvar radiusFactor = 1.515959 * .9;\n// Actual: 1.515959\n\n// Inner Planets\n\nconst mercuryGeometry = new THREE.SphereGeometry(1 * radiusFactor, 50, 50);\nconst mercuryMaterial = new THREE.MeshPhongMaterial({map: mercuryTexture});\nconst mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);\n\nconst venusGeometry = new THREE.SphereGeometry(2.48 * radiusFactor, 50, 50);\nconst venusMaterial = new THREE.MeshPhongMaterial({map: venusTexture});\nconst venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);\n\nconst earthGeometry = new THREE.SphereGeometry(2.61 * radiusFactor, 50, 50);\nconst earthMaterial = new THREE.MeshPhongMaterial({map: earthTexture});\nconst earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);\n\nconst marsGeometry = new THREE.SphereGeometry(1.39 * radiusFactor, 50, 50);\nconst marsMaterial = new THREE.MeshPhongMaterial({map: marsTexture});\nconst marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);\n\n// Outer Planets\n\nconst jupiterGeometry = new THREE.SphereGeometry(28.66 * radiusFactor, 50, 50);\nconst jupiterMaterial = new THREE.MeshPhongMaterial({map: jupiterTexture});\nconst jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);\n\nconst saturnGeometry = new THREE.SphereGeometry(23.87 * radiusFactor, 50, 50);\nconst saturnMaterial = new THREE.MeshPhongMaterial({map: saturnTexture});\nconst saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);\n\nconst saturnRingGeometry = new THREE.RingGeometry(23.87 * 1.05 * radiusFactor, 23.87 * 1.25 * radiusFactor, 30);\nconst saturnRingMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});\nconst saturnRingMesh = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);\nsaturnRingMesh.rotation.x = Math.PI / 2;\n\n\nconst uranusGeometry = new THREE.SphereGeometry(10.4 * radiusFactor, 50, 50);\nconst uranusMaterial = new THREE.MeshPhongMaterial({map: uranusTexture});\nconst uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);\n\nconst uranusRingGeo = new THREE.RingGeometry(10.4 * 1.05 * radiusFactor, 10.4 * 1.25 * radiusFactor, 60);\nconst uranusRingMat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});\nconst uranusRingMesh = new THREE.Mesh(uranusRingGeo, uranusRingMat);\n\n\nconst neptuneGeometry = new THREE.SphereGeometry(10.09 * radiusFactor, 50, 50);\nconst neptuneMaterial = new THREE.MeshPhongMaterial({map: neptuneTexture});\nconst neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);\n\nconst plutoGeometry = new THREE.SphereGeometry(.49 * radiusFactor, 50, 50);\nconst plutoMaterial = new THREE.MeshPhongMaterial({map: plutoTexture});\nconst plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);\n\n// Asteroid Belt\n\nconst asteroids = [];\nfor(var i = 0; i < 1200; i += 1) {\n    asteroids.push(new THREE.Mesh(\n        new THREE.SphereGeometry(10 * Math.random(), 5 * Math.random(), 5 * Math.random()),\n        new THREE.MeshPhongMaterial({map: asteroidTexture})\n    ));\n\n    // Limit positions to belt area\n    asteroids[i].position.y = (Math.random() * 10) - 5;\n    asteroids[i].position.x = (800 * Math.sin(i * Math.PI / 600) + (Math.random() * 600 - 300));\n    asteroids[i].position.z = (800 * Math.cos(i * Math.PI / 600) + (Math.random() * 600 - 300));\n}\n\n\nvar distanceFactor = 75;\nvar distanceFactorShift = 50;\n\n//# sourceURL=webpack:///./src/constructor.js?");

/***/ }),

/***/ "./src/createLights.js":
/*!*****************************!*\
  !*** ./src/createLights.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\nfunction createLights() {\n    const sunLight = new THREE.PointLight(0xffffff, 2);\n    sunLight.position.set(0, 0, 0);\n\n    const middleLights = [];\n    const topBottomLights = [];\n    const topCornerLights = [];\n    const bottomCornerLights = [];\n    const topSideLights = [];\n    const bottomSideLights = [];\n    const lightOnSun =[\n        middleLights,\n        topBottomLights,\n        topCornerLights,\n        bottomCornerLights,\n        topSideLights,\n        bottomSideLights\n    ];\n\n    for(var i = 0; i < 8; i += 1) {\n        middleLights.push(new THREE.SpotLight());\n        middleLights[i].position.y = 0;\n        middleLights[i].position.x = (_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin([i] * Math.PI / 4);\n        middleLights[i].position.z = -(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.cos([i] * Math.PI / 4);\n    }\n\n    for(var i = 0; i < 4; i += 1) {\n        topSideLights.push(new THREE.SpotLight());\n        topSideLights[i].position.y = (_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4);\n        topSideLights[i].position.x = ((_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);\n        topSideLights[i].position.z = (-(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);\n    }\n\n    for(var i = 0; i < 4; i += 1) {\n        bottomSideLights.push(new THREE.SpotLight());\n        bottomSideLights[i].position.y = -(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4);\n        bottomSideLights[i].position.x = ((_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);\n        bottomSideLights[i].position.z = (-(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);\n    }\n\n    for(var i = 0; i < 4; i += 1) {\n        topCornerLights.push(new THREE.SpotLight());\n        topCornerLights[i].position.y = (_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));\n        topCornerLights[i].position.x = ((_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI / 4);\n        topCornerLights[i].position.z = (-(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);\n    }\n\n    for(var i = 0; i < 4; i += 1) {\n        bottomCornerLights.push(new THREE.SpotLight());\n        bottomCornerLights[i].position.y = -(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));\n        bottomCornerLights[i].position.x = ((_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI/ 4);\n        bottomCornerLights[i].position.z = (-(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);\n    }\n\n    for(var i = 0; i < 2; i += 1) {\n        topBottomLights.push(new THREE.SpotLight());\n        topBottomLights[i].position.y = (_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunRadius\"] * 2) * Math.sin(([i] * Math.PI) + Math.PI / 2);\n        topBottomLights[i].position.x = 0;\n        topBottomLights[i].position.z = 0;\n    }\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(sunLight);\n\n    lightOnSun.forEach(function(lightGroup) {\n        lightGroup.forEach(function(light) {\n            light.intensity = 1;\n            light.angle = Math.PI / 4;\n            light.penumbra = 0;\n            _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(light);\n        });\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createLights);\n\n//# sourceURL=webpack:///./src/createLights.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _createLights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createLights */ \"./src/createLights.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate */ \"./src/animate.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction init() {\n    document.body.appendChild(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"renderer\"].domElement);\n\n    Object(_createLights__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].object);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"sunMesh\"]);\n\n    const planets = [\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"mercuryMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"venusMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"earthMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"marsMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"jupiterMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnRingMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusRingMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"neptuneMesh\"],\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"plutoMesh\"]\n    ]\n\n    var mercuryPosX = 1 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var mercuryPosY = 0;\n        var mercuryPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"mercuryMesh\"].position.set(mercuryPosX, mercuryPosY, mercuryPosZ);\n\n        var venusPosX = 1.87 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var venusPosY = 0;\n        var venusPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"venusMesh\"].position.set(venusPosX, venusPosY, venusPosZ);\n\n        var earthPosX = 2.58 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var earthPosY = 0;\n        var earthPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"earthMesh\"].position.set(earthPosX, earthPosY, earthPosZ);\n\n        var marsPosX = 3.23 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var marsPosY = 0;\n        var marsPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"marsMesh\"].position.set(marsPosX, marsPosY, marsPosZ);\n\n        var jupiterPosX = 21.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var jupiterPosY = 0;\n        var jupiterPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"jupiterMesh\"].position.set(jupiterPosX, jupiterPosY, jupiterPosZ);\n\n        var saturnPosX = 24.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var saturnPosY = 0;\n        var saturnPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.set(saturnPosX, saturnPosY, saturnPosZ);\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnRingMesh\"].position.set(saturnPosX, saturnPosY, saturnPosZ);\n\n        var uranusPosX = 50 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var uranusPosY = 0;\n        var uranusPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.set(uranusPosX, uranusPosY, uranusPosZ);\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusRingMesh\"].position.set(uranusPosX, uranusPosY, uranusPosZ);\n\n        var neptunePosX = 77.72 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var neptunePosY = 0;\n        var neptunePosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"neptuneMesh\"].position.set(neptunePosX, neptunePosY, neptunePosZ);\n\n        var plutoPosX = 101.94 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"] + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"];\n        var plutoPosY = 0;\n        var plutoPosZ = 0;\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"plutoMesh\"].position.set(plutoPosX, plutoPosY, plutoPosZ);\n\n        planets.forEach(planet => {\n            _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(planet);\n        });\n\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"asteroids\"].forEach(asteroid => {\n            _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(asteroid);\n        });\n\n        Object(_animate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        \n}\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/revolve.js":
/*!************************!*\
  !*** ./src/revolve.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar time = 0;\n\nfunction revolve() {\n    // # of ticks per revolution?\n\n    var revolutionSpeed = 2;\n\n    // Mercury orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"mercuryMesh\"].position.x = ((1 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 10);\n    // mercuryMesh.translateY(1 * Math.cos(time / 10));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"mercuryMesh\"].position.z = ((1 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 10);\n\n    // Venus orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"venusMesh\"].position.x = ((1.87 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 25.5);\n    // venusMesh.translateY(3 * Math.cos(time / 12));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"venusMesh\"].position.z = ((1.87 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 25.5);\n\n    // Earth orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"earthMesh\"].position.x = ((2.58 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 41.5);\n    // earthMesh.translateY(4 * Math.cos(time / 20));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"earthMesh\"].position.z = ((2.58 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 41.5);\n\n    // Mars orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"marsMesh\"].position.x = ((3.23 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 78.1);\n    // marsMesh.translateY(5 * Math.cos(time / 20));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"marsMesh\"].position.z = ((3.23 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 78.1);\n\n    // Jupiter orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"jupiterMesh\"].position.x = ((21.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 492.3);\n    // jupiterMesh.translateY(6 * Math.cos(time / revolutionSpeed));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"jupiterMesh\"].position.z = ((21.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 492.3);\n\n    // Saturn orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.x = ((24.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 1202.2);\n    // saturnMesh.translateY(80 * Math.cos(time / revolutionSpeed));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.z = ((24.61 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 1202.2);\n\n    // Saturn Ring orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnRingMesh\"].position.set(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.x, _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.y, _constructor__WEBPACK_IMPORTED_MODULE_0__[\"saturnMesh\"].position.z);\n\n    // Neptune orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.x = ((50 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 3484.1);\n    // uranusMesh.translateY(90 * Math.cos(time / revolutionSpeed));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.z = ((50 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 3484.1);\n\n    // Neptune Ring orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusRingMesh\"].position.set(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.x, _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.y, _constructor__WEBPACK_IMPORTED_MODULE_0__[\"uranusMesh\"].position.z);\n\n    // Uranus orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"neptuneMesh\"].position.x = ((77.72 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 6835);\n    // neptuneMesh.translateY(100 * Math.cos(time / revolutionSpeed));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"neptuneMesh\"].position.z = ((77.72 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 6835);\n\n    // Pluto orbit\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"plutoMesh\"].position.x = ((101.94 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.sin(time / 10290.1);\n    // plutoMesh.translateY(120 * Math.cos(time / revolutionSpeed));\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"plutoMesh\"].position.z = ((101.94 * _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactor\"]) + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"distanceFactorShift\"]) * Math.cos(time / 10290.1);\n\n    time += Math.PI / 8;\n\n    // Eventually the time will get so big that it will be difficult for the computer to keep counting up, need way to decrease without a blip in the animation\n    // if(time > 620) {\n    //     time -= 620;\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (revolve);\n\n//# sourceURL=webpack:///./src/revolve.js?");

/***/ }),

/***/ "./src/rotate.js":
/*!***********************!*\
  !*** ./src/rotate.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar time = 0;\n\nfunction rotate() {\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"mercuryMesh\"].rotation.y = Math.sin(time);\n\n    time += Math.PI / 8;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rotate);\n\n//# sourceURL=webpack:///./src/rotate.js?");

/***/ })

/******/ });