import { render } from "sass";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as CameraUtils from 'three/addons/utils/CameraUtils.js';

//scene
const scene = new THREE.Scene();
const sky = new THREE.TextureLoader().load( 'assets\\sky.jpg' );
scene.background = sky;

//renderer
const canvas = document.getElementById("main");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// camera 
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth/ window.innerHeight, 1, 1000 );
camera.position.set(0, 0, 7);
camera.lookAt( 0, 0, 0);

// light
const directionalLight = new THREE.DirectionalLight( 'white', 1 );
directionalLight.position.set(5, 0, 0);
const directionalHelper = new THREE.DirectionalLightHelper( directionalLight, 0.3 );

const ambientLight = new THREE.AmbientLight( 'white', 0.5);

scene.add( directionalLight, directionalHelper, ambientLight );

// controls
const control = new OrbitControls( camera, renderer.domElement ); 
control.enableDamping = true;

//geometry 
const cube = new THREE.Mesh(
    new THREE.BoxGeometry( 2, 2, 2 ),
    new THREE.MeshPhysicalMaterial({
        color: "white",
    })
)
cube.position.set(0, 0, 0);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry( 0.5, 0.5, 0.5 ),
    new THREE.MeshPhysicalMaterial({
        color: "green",
    })
)
cube2.position.set(2, 0, 0);

scene.add( cube, cube2 );

// animation loop
function animate() {
    requestAnimationFrame( animate );    
    control.update();
    renderer.render( scene, camera );
}
animate();