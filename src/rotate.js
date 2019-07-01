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

var time = 0;

function rotate() {
    mercuryMesh.rotation.y = Math.sin(time);

    venusMesh.rotation.y = Math.sin(time);

    earthMesh.rotation.y = Math.sin(time);

    marsMesh.rotation.y = Math.sin(time);

    jupiterMesh.rotation.y = Math.sin(time);

    saturnMesh.rotation.y = Math.sin(time);

    uranusMesh.rotation.y = Math.sin(time);

    neptuneMesh.rotation.y = Math.sin(time);

    plutoMesh.rotation.y = Math.sin(time);


    time += Math.PI / 8;
}

export default rotate;