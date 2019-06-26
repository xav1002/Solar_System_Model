import {sunRadius} from './constructor';
import {scene} from './constructor';

function createLights() {
    const sunLight = new THREE.PointLight(0xffffff, 2);
    sunLight.position.set(0, 0, 0);

    const middleLights = [];
    const topBottomLights = [];
    const topCornerLights = [];
    const bottomCornerLights = [];
    const topSideLights = [];
    const bottomSideLights = [];
    const lightOnSun =[
        middleLights,
        topBottomLights,
        topCornerLights,
        bottomCornerLights,
        topSideLights,
        bottomSideLights
    ];

    for(var i = 0; i < 8; i += 1) {
        middleLights.push(new THREE.SpotLight());
        middleLights[i].position.y = 0;
        middleLights[i].position.x = (sunRadius * 2) * Math.sin([i] * Math.PI / 4);
        middleLights[i].position.z = -(sunRadius * 2) * Math.cos([i] * Math.PI / 4);
    }

    for(var i = 0; i < 4; i += 1) {
        topSideLights.push(new THREE.SpotLight());
        topSideLights[i].position.y = (sunRadius * 2) * Math.sin(Math.PI / 4);
        topSideLights[i].position.x = ((sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);
        topSideLights[i].position.z = (-(sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);
    }

    for(var i = 0; i < 4; i += 1) {
        bottomSideLights.push(new THREE.SpotLight());
        bottomSideLights[i].position.y = -(sunRadius * 2) * Math.sin(Math.PI / 4);
        bottomSideLights[i].position.x = ((sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin([i] * Math.PI / 2);
        bottomSideLights[i].position.z = (-(sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos([i] * Math.PI / 2);
    }

    for(var i = 0; i < 4; i += 1) {
        topCornerLights.push(new THREE.SpotLight());
        topCornerLights[i].position.y = (sunRadius * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));
        topCornerLights[i].position.x = ((sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI / 4);
        topCornerLights[i].position.z = (-(sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);
    }

    for(var i = 0; i < 4; i += 1) {
        bottomCornerLights.push(new THREE.SpotLight());
        bottomCornerLights[i].position.y = -(sunRadius * 2) * (Math.sin(Math.PI / 4)) * (Math.sin(Math.PI / 4));
        bottomCornerLights[i].position.x = ((sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.sin(([i] * Math.PI / 2) + Math.PI/ 4);
        bottomCornerLights[i].position.z = (-(sunRadius * 2) * Math.sin(Math.PI / 4)) * Math.cos(([i] * Math.PI / 2) + Math.PI / 4);
    }

    for(var i = 0; i < 2; i += 1) {
        topBottomLights.push(new THREE.SpotLight());
        topBottomLights[i].position.y = (sunRadius * 2) * Math.sin(([i] * Math.PI) + Math.PI / 2);
        topBottomLights[i].position.x = 0;
        topBottomLights[i].position.z = 0;
    }

    scene.add(sunLight);

    lightOnSun.forEach(function(lightGroup) {
        lightGroup.forEach(function(light) {
            light.intensity = 1;
            light.angle = Math.PI / 4;
            light.penumbra = 0;
            scene.add(light);
        });
    });
}

export default createLights;