import revolve from './revolve';
import rotate from './rotate';
import {renderer} from './constructor';
import {scene} from './constructor';
import {camera} from './constructor';
import {controls} from './constructor';

function animate(){
    requestAnimationFrame( animate );

    controls.update();

    revolve();

    rotate();

    renderer.render(scene, camera);
}

export default animate;