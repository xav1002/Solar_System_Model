import {renderer} from './constructor';
import {scene} from './constructor';
import {distanceFactor} from './constructor';
import {distanceFactorShift} from './constructor';
import {sunMesh} from './constructor';
import {mercuryMesh} from './constructor';
import {venusMesh} from './constructor';
import {earthMesh} from './constructor';
import {marsMesh} from './constructor';
import {jupiterMesh} from './constructor';
import {saturnMesh} from './constructor';
import {saturnRingMesh} from './constructor';
import {uranusMesh} from './constructor';
import {uranusRingMesh} from './constructor';
import {neptuneMesh} from './constructor';
import {plutoMesh} from './constructor';
import {asteroids} from './constructor';
import {controls} from './constructor';
import createLights from './createLights';
import animate from './animate';

function init() {
    document.body.appendChild(renderer.domElement);

    createLights();

    scene.add(controls.object);

    scene.add(sunMesh);

    const planets = [
        mercuryMesh,
        venusMesh,
        earthMesh,
        marsMesh,
        jupiterMesh,
        saturnMesh,
        saturnRingMesh,
        uranusMesh,
        uranusRingMesh,
        neptuneMesh,
        plutoMesh
    ]

    var mercuryPosX = 1 * distanceFactor + distanceFactorShift;
        var mercuryPosY = 0;
        var mercuryPosZ = 0;
        mercuryMesh.position.set(mercuryPosX, mercuryPosY, mercuryPosZ);

        var venusPosX = 1.87 * distanceFactor + distanceFactorShift;
        var venusPosY = 0;
        var venusPosZ = 0;
        venusMesh.position.set(venusPosX, venusPosY, venusPosZ);

        var earthPosX = 2.58 * distanceFactor + distanceFactorShift;
        var earthPosY = 0;
        var earthPosZ = 0;
        earthMesh.position.set(earthPosX, earthPosY, earthPosZ);

        var marsPosX = 3.23 * distanceFactor + distanceFactorShift;
        var marsPosY = 0;
        var marsPosZ = 0;
        marsMesh.position.set(marsPosX, marsPosY, marsPosZ);

        var jupiterPosX = 21.61 * distanceFactor + distanceFactorShift;
        var jupiterPosY = 0;
        var jupiterPosZ = 0;
        jupiterMesh.position.set(jupiterPosX, jupiterPosY, jupiterPosZ);

        var saturnPosX = 24.61 * distanceFactor + distanceFactorShift;
        var saturnPosY = 0;
        var saturnPosZ = 0;
        saturnMesh.position.set(saturnPosX, saturnPosY, saturnPosZ);
        saturnRingMesh.position.set(saturnPosX, saturnPosY, saturnPosZ);

        var uranusPosX = 50 * distanceFactor + distanceFactorShift;
        var uranusPosY = 0;
        var uranusPosZ = 0;
        uranusMesh.position.set(uranusPosX, uranusPosY, uranusPosZ);
        uranusRingMesh.position.set(uranusPosX, uranusPosY, uranusPosZ);

        var neptunePosX = 77.72 * distanceFactor + distanceFactorShift;
        var neptunePosY = 0;
        var neptunePosZ = 0;
        neptuneMesh.position.set(neptunePosX, neptunePosY, neptunePosZ);

        var plutoPosX = 101.94 * distanceFactor + distanceFactorShift;
        var plutoPosY = 0;
        var plutoPosZ = 0;
        plutoMesh.position.set(plutoPosX, plutoPosY, plutoPosZ);

        planets.forEach(planet => {
            scene.add(planet);
        });

        asteroids.forEach(asteroid => {
            scene.add(asteroid);
        });

        animate();
        
}

init();