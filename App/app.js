class Game{
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
        this.camera.position.z = 400;

        this.textureLoader = new THREE.TextureLoader();
        this.spaceTexture = this.textureLoader.load('assets/Hubble_Image.jpg');
        this.scene.background = this.spaceTexture;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
		this.controls.zoomSpeed = 1.2;
		this.controls.panSpeed = 2;
		this.controls.noZoom = false;
		this.controls.noPan = false;
		this.controls.staticMoving = true;
		this.controls.dynamicDampingFactor = 0.3;
		this.controls.keys = [ 65, 83, 68 ];

        // sun
        this.sunRadius = 100;
        this.sunGeometry = new THREE.SphereGeometry(this.sunRadius, 100, 100);
        this.sunTexture = this.textureLoader.load('./assets/Sun_Image.jpg');
        this.sunMaterial = new THREE.MeshPhongMaterial({map: this.sunTexture});
        this.sunMesh = new THREE.Mesh(this.sunGeometry, this.sunMaterial);

        // Inner Planets
        this.mercuryGeometry = new THREE.SphereGeometry(10, 50, 50);
        this.mercuryTexture = this.textureLoader.load('./assets/Mercury_Texture.png');
        this.mercuryMaterial = new THREE.MeshPhongMaterial({map: this.mercuryTexture});
        this.mercuryMesh = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial);

        this.venusGeometry = new THREE.SphereGeometry(13, 50, 50);
        this.venusTexture = this.textureLoader.load('./assets/Venus_Texture.jpg');
        this.venusMaterial = new THREE.MeshPhongMaterial({map: this.venusTexture});
        this.venusMesh = new THREE.Mesh(this.venusGeometry, this.venusMaterial);

        this.earthGeometry = new THREE.SphereGeometry(15, 50, 50);
        this.earthTexture = this.textureLoader.load('./assets/Earth_Texture.jpg');
        this.earthMaterial = new THREE.MeshPhongMaterial({map: this.earthTexture});
        this.earthMesh = new THREE.Mesh(this.earthGeometry, this.earthMaterial);

        this.marsGeometry = new THREE.SphereGeometry(20, 50, 50);
        this.marsTexture = this.textureLoader.load('./assets/Mars_Texture.jpg');
        this.marsMaterial = new THREE.MeshPhongMaterial({map: this.marsTexture});
        this.marsMesh = new THREE.Mesh(this.marsGeometry, this.marsMaterial);

        // Asteroid Belt
        const game = this;

        this.asteroids = [];
        this.asteroidTexture = this.textureLoader.load('./assets/Asteroid_Texture.jpg');
        for(var i = 0; i < 100; i += 1) {
            game.asteroids.push(new THREE.Mesh(
                new THREE.SphereGeometry(10 * Math.random(), 5 * Math.random(), 5 * Math.random()),
                new THREE.MeshPhongMaterial({map: game.asteroidTexture})
            ));

            // Limit positions to belt area
            game.asteroids[i].position.y = (Math.random() * 10) - 5;
            game.asteroids[i].position.x = (Math.random() * 1000) - 500;
            game.asteroids[i].position.z = (Math.random() * 1000) - 500;
        }

        // Outer Planets
        this.jupiterGeometry = new THREE.SphereGeometry(40, 50, 50);
        this.jupiterTexture = this.textureLoader.load('./assets/Jupiter_Texture.jpg');
        this.jupiterMaterial = new THREE.MeshPhongMaterial({map: this.jupiterTexture});
        this.jupiterMesh = new THREE.Mesh(this.jupiterGeometry, this.jupiterMaterial);

        this.saturnGeometry = new THREE.SphereGeometry(35, 50, 50);
        this.saturnTexture = this.textureLoader.load('./assets/Saturn_Texture.jpg');
        this.saturnMaterial = new THREE.MeshPhongMaterial({map: this.saturnTexture});
        this.saturnMesh = new THREE.Mesh(this.saturnGeometry, this.saturnMaterial);

        this.saturnRingGeo = new THREE.RingGeometry(75, 30, 30);
        this.saturnRingMat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
        this.saturnRingMesh = new THREE.Mesh(this.saturnRingGeo, this.saturnRingMat);
        this.saturnRingMesh.rotation.x = Math.PI / 2;

        this.uranusGeometry = new THREE.SphereGeometry(40, 50, 50);
        this.uranusTexture = this.textureLoader.load('./assets/Uranus_Texture.jpg');
        this.uranusMaterial = new THREE.MeshPhongMaterial({map: this.uranusTexture});
        this.uranusMesh = new THREE.Mesh(this.uranusGeometry, this.uranusMaterial);

        this.uranusRingGeo = new THREE.RingGeometry(75, 30, 30);
        this.uranusRingMat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
        this.uranusRingMesh = new THREE.Mesh(this.uranusRingGeo, this.uranusRingMat);

        this.neptuneGeometry = new THREE.SphereGeometry(40, 50, 50);
        this.neptuneTexture = this.textureLoader.load('./assets/Neptune_Texture.jpg');
        this.neptuneMaterial = new THREE.MeshPhongMaterial({map: this.neptuneTexture});
        this.neptuneMesh = new THREE.Mesh(this.neptuneGeometry, this.neptuneMaterial);

        this.plutoGeometry = new THREE.SphereGeometry(10, 50, 50);
        this.plutoTexture = this.textureLoader.load('./assets/Pluto_Texture.jpg');
        this.plutoMaterial = new THREE.MeshPhongMaterial({map: this.plutoTexture});
        this.plutoMesh = new THREE.Mesh(this.plutoGeometry, this.plutoMaterial);


        // light
        this.sunLight = new THREE.PointLight(0xffffff, 2);
        this.sunLight.position.set(0, 0, 0);

        this.light = new THREE.PointLight(0xffffff, 1);
        this.light.position.set(100, 100, 100);

        this.middleLights = [];
        console.log(this.middleLights);
        this.topBottomLights = [];
        this.topCornerLights = [];
        this.bottomCornerLights = [];
        this.topSideLights = [];
        this.bottomSideLights = [];
        this.lightOnSun =[
            this.middleLights,
            this.topBottomLights,
            this.topCornerLights,
            this.bottomCornerLights,
            this.topSideLights,
            this.bottomSideLights
        ];

        for(var i = 0; i < 8; i += 1) {
            game.middleLights.push(new THREE.SpotLight());
            game.middleLights[i].position.y = 0;
            game.middleLights[i].position.x = (game.sunRadius * 2) * Math.sin([i] * Math.PI / 4);
            game.middleLights[i].position.z = -(game.sunRadius * 2) * Math.cos([i] * Math.PI / 4);
        }

        for(var i = 0; i < 4; i += 1) {
            game.topSideLights.push(new THREE.SpotLight());
            game.topSideLights[i].position.y = (game.sunRadius * 2) * Math.sin(Math.PI / 4);
            game.topSideLights[i].position.x = ((game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);
            game.topSideLights[i].position.z = (-(game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);
        }

        for(var i = 0; i < 4; i += 1) {
            game.bottomSideLights.push(new THREE.SpotLight());
            game.bottomSideLights[i].position.y = -(game.sunRadius * 2) * Math.sin(Math.PI / 4);
            game.bottomSideLights[i].position.x = ((game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);
            game.bottomSideLights[i].position.z = (-(game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);
        }

        for(var i = 0; i < 4; i += 1) {
            game.topCornerLights.push(new THREE.SpotLight());
            game.topCornerLights[i].position.y = (game.sunRadius * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));
            game.topCornerLights[i].position.x = ((game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI / 4);
            game.topCornerLights[i].position.z = (-(game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);
        }

        for(var i = 0; i < 4; i += 1) {
            game.bottomCornerLights.push(new THREE.SpotLight());
            game.bottomCornerLights[i].position.y = -(game.sunRadius * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));
            game.bottomCornerLights[i].position.x = ((game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI/ 4);
            game.bottomCornerLights[i].position.z = (-(game.sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);
        }

        for(var i = 0; i < 2; i += 1) {
            game.topBottomLights.push(new THREE.SpotLight());
            game.topBottomLights[i].position.y = (game.sunRadius * 2) * Math.sin(([i] * Math.PI) + Math.PI / 2);
            game.topBottomLights[i].position.x = 0;
            game.topBottomLights[i].position.z = 0;
        }

        this.time = 0;

        this.planets = [];

        this.init();

    }

    init() {
        const game = this;

        console.log(game.camera, game.scene, game.sunMesh);

        game.scene.add(game.sunMesh);

        game.lightOnSun.forEach(function(lightGroup) {
            lightGroup.forEach(function(light) {
                light.intensity = 1;
                light.angle = Math.PI / 4;
                light.penumbra = 0;
                game.scene.add(light);
            });
        });

        game.asteroids.forEach(asteroid => {
            game.scene.add(asteroid);
        })

        game.planets.push(
            game.mercuryMesh,
            game.venusMesh,
            game.earthMesh,
            game.marsMesh,
            game.jupiterMesh,
            game.saturnMesh,
            game.saturnRingMesh,
            game.uranusMesh,
            game.uranusRingMesh,
            game.neptuneMesh,
            game.plutoMesh
        );

        // Planet Initial Positions
        var mercuryPosX = -240;
        var mercuryPosY = 0;
        var mercuryPosZ = 0;
        game.mercuryMesh.position.set(mercuryPosX, mercuryPosY, mercuryPosZ);

        var venusPosX = -400;
        var venusPosY = 0;
        var venusPosZ = 0;
        game.venusMesh.position.set(venusPosX, venusPosY, venusPosZ);

        var earthPosX = -600;
        var earthPosY = 0;
        var earthPosZ = 0;
        game.earthMesh.position.set(earthPosX, earthPosY, earthPosZ);

        var marsPosX = -800;
        var marsPosY = 0;
        var marsPosZ = 0;
        game.marsMesh.position.set(marsPosX, marsPosY, marsPosZ);

        var jupiterPosX = -1400;
        var jupiterPosY = 0;
        var jupiterPosZ = 0;
        game.jupiterMesh.position.set(jupiterPosX, jupiterPosY, jupiterPosZ);

        var saturnPosX = -1600;
        var saturnPosY = 0;
        var saturnPosZ = 0;
        game.saturnMesh.position.set(saturnPosX, saturnPosY, saturnPosZ);
        game.saturnRingMesh.position.set(saturnPosX, saturnPosY, saturnPosZ);

        var uranusPosX = -1800;
        var uranusPosY = 0;
        var uranusPosZ = 0;
        game.uranusMesh.position.set(uranusPosX, uranusPosY, uranusPosZ);
        game.uranusRingMesh.position.set(uranusPosX, uranusPosY, uranusPosZ);

        var neptunePosX = -2000;
        var neptunePosY = 0;
        var neptunePosZ = 0;
        game.neptuneMesh.position.set(neptunePosX, neptunePosY, neptunePosZ);

        var plutoPosX = -2200;
        var plutoPosY = 0;
        var plutoPosZ = 0;
        game.plutoMesh.position.set(plutoPosX, plutoPosY, plutoPosZ);

        game.planets.forEach(planet => {
            game.scene.add(planet);
        })

        game.animate();
    }

    revolve() {
        // # of ticks per revolution?

        const game = this;

        var revolutionSpeed = 65;

        // Mercury orbit
        game.mercuryMesh.translateX(12 * Math.sin(game.time / revolutionSpeed));
        // game.mercuryMesh.translateY(1 * Math.cos(game.time / 10));
        game.mercuryMesh.translateZ(12 * Math.cos(game.time / revolutionSpeed));

        // Venus orbit
        game.venusMesh.translateX(20 * Math.sin(game.time / revolutionSpeed));
        // game.venusMesh.translateY(3 * Math.cos(game.time / 12));
        game.venusMesh.translateZ(20 * Math.cos(game.time / revolutionSpeed));

        // Earth orbit
        game.earthMesh.translateX(30 * Math.sin(game.time / revolutionSpeed));
        // game.earthMesh.translateY(4 * Math.cos(game.time / 20));
        game.earthMesh.translateZ(30 * Math.cos(game.time / revolutionSpeed));

        // Mars orbit
        game.marsMesh.translateX(40 * Math.sin(game.time / revolutionSpeed));
        // game.marsMesh.translateY(5 * Math.cos(game.time / 20));
        game.marsMesh.translateZ(40 * Math.cos(game.time / revolutionSpeed));

        // Jupiter orbit
        game.jupiterMesh.translateX(70 * Math.sin(game.time / revolutionSpeed));
        // game.jupiterMesh.translateY(6 * Math.cos(game.time / revolutionSpeed));
        game.jupiterMesh.translateZ(70 * Math.cos(game.time / revolutionSpeed));

        // Saturn orbit
        game.saturnMesh.translateX(80 * Math.sin(game.time / revolutionSpeed));
        // game.saturnMesh.translateY(80 * Math.cos(game.time / revolutionSpeed));
        game.saturnMesh.translateZ(80 * Math.cos(game.time / revolutionSpeed));

        // Saturn Ring orbit
        game.saturnRingMesh.position.set(game.saturnMesh.position.x, game.saturnMesh.position.y, game.saturnMesh.position.z);

        // Neptune orbit
        game.uranusMesh.translateX(90 * Math.sin(game.time / revolutionSpeed));
        // game.uranusMesh.translateY(90 * Math.cos(game.time / revolutionSpeed));
        game.uranusMesh.translateZ(90 * Math.cos(game.time / revolutionSpeed));

        // Neptune Ring orbit
        game.uranusRingMesh.position.set(game.neptuneMesh.position.x, game.neptuneMesh.position.y, game.neptuneMesh.position.z);

        // Uranus orbit
        game.neptuneMesh.translateX(100 * Math.sin(game.time / revolutionSpeed));
        // game.neptuneMesh.translateY(100 * Math.cos(game.time / revolutionSpeed));
        game.neptuneMesh.translateZ(100 * Math.cos(game.time / revolutionSpeed));

        // Pluto orbit
        game.plutoMesh.translateX(120 * Math.sin(game.time / revolutionSpeed));
        // game.plutoMesh.translateY(120 * Math.cos(game.time / revolutionSpeed));
        game.plutoMesh.translateZ(120 * Math.cos(game.time / revolutionSpeed));

        // console.log(game.neptuneRingMesh.position);

        game.time += 1;

        // Eventually the game.time will get so big that it will be difficult for the computer to keep counting up, need way to decrease without a blip in the animation
        // if(game.time > 620) {
        //     game.time -= 620;
        // }
    }

    rotate() {
        // Currently will not work, due to use of translation function for revolving, because rotation changes the direction that the meshes will move in when revolving

        const game = this;

        game.planets.forEach(planet => {
            planet.rotation.y += 1;
        })
    }

    animate(){
        const game = this;
        requestAnimationFrame( function(){ game.animate() });

        game.revolve();

        // game.rotate();

        game.controls.update();

        game.renderer.render(game.scene, game.camera);
    }
}