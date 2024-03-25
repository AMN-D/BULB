import { render } from "sass";
import * as THREE from "three";

//scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/ window.innerHeight, 1, 1000 );
camera.position.set(0, 0, 25);
camera.lookAt( 0, 0, 0);

//renderer
const canvas = document.getElementById("main");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry 
const cube = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1 ),
    new THREE.MeshBasicMaterial({
        color: "pink",
        wireframe: true,
    })
)
cube.position.set(5, 0, 10);

const points = [
    new THREE.Vector3( - 10, 0, 0 ),
    new THREE.Vector3( 0, 10, 0 ),
    new THREE.Vector3( 10, 0, 0 ),
];

const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial({
        color: "white",
    })
)
line.position.set(15, -5, -100);

scene.add( cube, line );

// animation loop
function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    
    renderer.render( scene, camera );
}
animate();