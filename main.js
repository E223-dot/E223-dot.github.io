let scene, camera, renderer, cube;

var startButton = document.getElementById( 'startButton' );
			startButton.addEventListener( 'click', init );

function init(){
    var overlay = document.getElementById( 'overlay' );
                overlay.remove();

                
                
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
camera.position.z=5;

// Audio
var listener = new THREE.AudioListener();
camera.add( listener );
var sound = new THREE.Audio( listener );

var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'Battle Hymn Of The Republic By Robert Shaw Chorale.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('Thanos.gif');
const geometery = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({map:texture});
cube = new THREE.Mesh(geometery, material);
scene.add(cube);
}

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();