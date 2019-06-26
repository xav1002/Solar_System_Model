export const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
camera.position.z = 400;
export {camera};

const textureLoader = new THREE.TextureLoader();
const spaceTexture = textureLoader.load('../assets/Hubble_Image.jpg');
scene.background = spaceTexture;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
export {renderer};

var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 2;
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;
controls.keys = [ 65, 83, 68 ];
export {controls};

const sunTexture = textureLoader.load('../assets/Sun_Texture.jpg');
const mercuryTexture = textureLoader.load('../assets/Mercury_Texture.jpg');
const venusTexture = textureLoader.load('../assets/Venus_Texture.jpg');
const earthTexture = textureLoader.load('../assets/Earth_Texture.jpg');
const marsTexture = textureLoader.load('../assets/Mars_Texture.jpg');
const jupiterTexture = textureLoader.load('../assets/Jupiter_Texture.jpg');
const saturnTexture = textureLoader.load('../assets/Saturn_Texture.jpg');
const uranusTexture = textureLoader.load('../assets/Uranus_Texture.jpg');
const neptuneTexture = textureLoader.load('../assets/Neptune_Texture.jpg');
const plutoTexture = textureLoader.load('../assets/Pluto_Texture.jpg');
const asteroidTexture = textureLoader.load('./assets/Asteroid_Texture.jpg');

export var sunRadius = 43.22879;
// Actual: 432.28794
const sunGeometry = new THREE.SphereGeometry(sunRadius, 100, 100);
const sunMaterial = new THREE.MeshPhongMaterial({map: sunTexture});
export const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

var radiusFactor = 1.515959 * .9;
// Actual: 1.515959

// Inner Planets

const mercuryGeometry = new THREE.SphereGeometry(1 * radiusFactor, 50, 50);
const mercuryMaterial = new THREE.MeshPhongMaterial({map: mercuryTexture});
export const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

const venusGeometry = new THREE.SphereGeometry(2.48 * radiusFactor, 50, 50);
const venusMaterial = new THREE.MeshPhongMaterial({map: venusTexture});
export const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);

const earthGeometry = new THREE.SphereGeometry(2.61 * radiusFactor, 50, 50);
const earthMaterial = new THREE.MeshPhongMaterial({map: earthTexture});
export const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

const marsGeometry = new THREE.SphereGeometry(1.39 * radiusFactor, 50, 50);
const marsMaterial = new THREE.MeshPhongMaterial({map: marsTexture});
export const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);

// Outer Planets

const jupiterGeometry = new THREE.SphereGeometry(28.66 * radiusFactor, 50, 50);
const jupiterMaterial = new THREE.MeshPhongMaterial({map: jupiterTexture});
export const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

const saturnGeometry = new THREE.SphereGeometry(23.87 * radiusFactor, 50, 50);
const saturnMaterial = new THREE.MeshPhongMaterial({map: saturnTexture});
export const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);

const saturnRingGeometry = new THREE.RingGeometry(23.87 * 1.05 * radiusFactor, 23.87 * 1.25 * radiusFactor, 30);
const saturnRingMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
const saturnRingMesh = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRingMesh.rotation.x = Math.PI / 2;
export {saturnRingMesh};

const uranusGeometry = new THREE.SphereGeometry(10.4 * radiusFactor, 50, 50);
const uranusMaterial = new THREE.MeshPhongMaterial({map: uranusTexture});
export const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);

const uranusRingGeo = new THREE.RingGeometry(10.4 * 1.05 * radiusFactor, 10.4 * 1.25 * radiusFactor, 60);
const uranusRingMat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
const uranusRingMesh = new THREE.Mesh(uranusRingGeo, uranusRingMat);
export {uranusRingMesh};

const neptuneGeometry = new THREE.SphereGeometry(10.09 * radiusFactor, 50, 50);
const neptuneMaterial = new THREE.MeshPhongMaterial({map: neptuneTexture});
export const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

const plutoGeometry = new THREE.SphereGeometry(.49 * radiusFactor, 50, 50);
const plutoMaterial = new THREE.MeshPhongMaterial({map: plutoTexture});
export const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);

// Asteroid Belt

const asteroids = [];
for(var i = 0; i < 1200; i += 1) {
    asteroids.push(new THREE.Mesh(
        new THREE.SphereGeometry(10 * Math.random(), 5 * Math.random(), 5 * Math.random()),
        new THREE.MeshPhongMaterial({map: asteroidTexture})
    ));

    // Limit positions to belt area
    asteroids[i].position.y = (Math.random() * 10) - 5;
    asteroids[i].position.x = (800 * Math.sin(i * Math.PI / 600) + (Math.random() * 600 - 300));
    asteroids[i].position.z = (800 * Math.cos(i * Math.PI / 600) + (Math.random() * 600 - 300));
}
export {asteroids};

export var distanceFactor = 75;
export var distanceFactorShift = 50;