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
 * Ratios for the length of rotation period for the planets is based from data from: https://en.wikipedia.org/wiki/Planet#Planetary_attributeshow%20l
 * Pluto's rotation period is calculated from data from: https://www.reference.com/science/long-pluto-rotate-its-axis-once-45de45ae25179cc6
 * 
 * Calculations made with ratios of time, units are Earth Days
 */

var time = 0;

function rotate() {
    mercuryMesh.rotation.y = Math.sin(time / 1);

    venusMesh.rotation.y = Math.sin(time / 4.14);

    earthMesh.rotation.y = Math.sin(time / .017);

    marsMesh.rotation.y = Math.sin(time / .018);

    jupiterMesh.rotation.y = Math.sin(time / .0069);

    saturnMesh.rotation.y = Math.sin(time / .0073);

    uranusMesh.rotation.y = Math.sin(time / .012);

    neptuneMesh.rotation.y = Math.sin(time / .011);

    plutoMesh.rotation.y = Math.sin(time / .11);


    time += Math.PI / 8;
}

export default rotate;