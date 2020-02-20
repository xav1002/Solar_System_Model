import {distanceFactor} from './constructor';
import {distanceFactorShift} from './constructor';
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

/**
 * Calcaulations made with ratios of time, units are Earth Days
 */

var time = 0;

function revolve() {
    // # of ticks per revolution?

    var revolutionSpeed = 2;

    // Mercury orbit
    mercuryMesh.position.x = ((1 * distanceFactor) + distanceFactorShift) * Math.sin(time / 10);
    // mercuryMesh.translateY(1 * Math.cos(time / 10));
    mercuryMesh.position.z = ((1 * distanceFactor) + distanceFactorShift) * Math.cos(time / 10);

    // Venus orbit
    venusMesh.position.x = ((1.87 * distanceFactor) + distanceFactorShift) * Math.sin(time / 25.5);
    // venusMesh.translateY(3 * Math.cos(time / 12));
    venusMesh.position.z = ((1.87 * distanceFactor) + distanceFactorShift) * Math.cos(time / 25.5);

    // Earth orbit
    earthMesh.position.x = ((2.58 * distanceFactor) + distanceFactorShift) * Math.sin(time / 41.5);
    // earthMesh.translateY(4 * Math.cos(time / 20));
    earthMesh.position.z = ((2.58 * distanceFactor) + distanceFactorShift) * Math.cos(time / 41.5);

    // Mars orbit
    marsMesh.position.x = ((3.23 * distanceFactor) + distanceFactorShift) * Math.sin(time / 78.1);
    // marsMesh.translateY(5 * Math.cos(time / 20));
    marsMesh.position.z = ((3.23 * distanceFactor) + distanceFactorShift) * Math.cos(time / 78.1);

    // Jupiter orbit
    jupiterMesh.position.x = ((21.61 * distanceFactor) + distanceFactorShift) * Math.sin(time / 492.3);
    // jupiterMesh.translateY(6 * Math.cos(time / revolutionSpeed));
    jupiterMesh.position.z = ((21.61 * distanceFactor) + distanceFactorShift) * Math.cos(time / 492.3);

    // Saturn orbit
    saturnMesh.position.x = ((24.61 * distanceFactor) + distanceFactorShift) * Math.sin(time / 1202.2);
    // saturnMesh.translateY(80 * Math.cos(time / revolutionSpeed));
    saturnMesh.position.z = ((24.61 * distanceFactor) + distanceFactorShift) * Math.cos(time / 1202.2);

    // Saturn Ring orbit
    saturnRingMesh.position.set(saturnMesh.position.x, saturnMesh.position.y, saturnMesh.position.z);

    // Neptune orbit
    uranusMesh.position.x = ((50 * distanceFactor) + distanceFactorShift) * Math.sin(time / 3484.1);
    // uranusMesh.translateY(90 * Math.cos(time / revolutionSpeed));
    uranusMesh.position.z = ((50 * distanceFactor) + distanceFactorShift) * Math.cos(time / 3484.1);

    // Neptune Ring orbit
    uranusRingMesh.position.set(uranusMesh.position.x, uranusMesh.position.y, uranusMesh.position.z);

    // Uranus orbit
    neptuneMesh.position.x = ((77.72 * distanceFactor) + distanceFactorShift) * Math.sin(time / 6835);
    // neptuneMesh.translateY(100 * Math.cos(time / revolutionSpeed));
    neptuneMesh.position.z = ((77.72 * distanceFactor) + distanceFactorShift) * Math.cos(time / 6835);

    // Pluto orbit
    plutoMesh.position.x = ((101.94 * distanceFactor) + distanceFactorShift) * Math.sin(time / 10290.1);
    // plutoMesh.translateY(120 * Math.cos(time / revolutionSpeed));
    plutoMesh.position.z = ((101.94 * distanceFactor) + distanceFactorShift) * Math.cos(time / 10290.1);

    time += Math.PI / 8;

    // Eventually the time will get so big that it will be difficult for the computer to keep counting up, need way to decrease without a blip in the animation
    // if(time > 620) {
    //     time -= 620;
    // }
}

export default revolve;