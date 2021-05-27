import * as THREE from 'https://unpkg.com/three/build/three.module.js';

let camera, scene, renderer;
let geometry, material, cube;

init(); 

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    material = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0.3, color: 0xff006b, emissive: 0xed246d, shininess:100 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;
}

function render() {
    requestAnimationFrame(render);

    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

render();

// KUBUS
/* let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

}

function animation( time ) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render( scene, camera );

} */