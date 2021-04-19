const travel = document.querySelector("#travel");
const landing = document.querySelector(".landing");
const logo = document.querySelector("#logo");

const extendSideBarBtn = document.querySelector(".extend-side-bar");
const sideBar = document.querySelector(".side-bar");
const triangleSideBar = document.querySelector(".triangle");

const extendAboutBtn = document.querySelector(".extend-about");
const about = document.querySelector(".about");
const closeAboutBtn = document.querySelector(".close-about");

const extendContactBtn = document.querySelector(".extend-contact");
const contact = document.querySelector(".contact");
const closeContactBtn = document.querySelector(".close-contact");

// Fermer / Ouvrir landing
travel.addEventListener("click", () => {
  landing.classList.add("closed");
  if (landing.classList.contains("closed")) {
    logo.addEventListener("click", () => {
      landing.classList.remove("closed");
    });
  }
});

// Fermer / Ouvrir side bar
extendSideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("closed");
  if (sideBar.classList.contains("closed")) {
    triangleSideBar.style.transform = "translate(-50%, -50%) rotateY(180deg)";
  }
  if (sideBar.classList.contains("closed") === false) {
    triangleSideBar.style.transform = "translate(-50%, -50%) rotateY(0deg)";
  }
});

// Fermer / Ouvrir about
extendAboutBtn.addEventListener("click", () => {
  about.classList.toggle("closed");
});
closeAboutBtn.addEventListener("click", () => {
  about.classList.toggle("closed");
});

// Fermer / Ouvrir contact
extendContactBtn.addEventListener("click", () => {
  contact.classList.toggle("closed");
});
closeContactBtn.addEventListener("click", () => {
  contact.classList.toggle("closed");
});

// 3D

import * as THREE from "https://unpkg.com/three@0.127/build/three.module.js";

// import Stats from "https://unpkg.com/three@0.127/examples/jsm/libs/stats.module.js";
// import { GUI } from "https://unpkg.com/three@0.127/examples/jsm/libs/dat.gui.module.js";

import { TrackballControls } from "https://unpkg.com/three@0.127/examples/jsm/controls/TrackballControls.js";

let perspectiveCamera,
  orthographicCamera,
  controls,
  scene,
  renderer,
  planetTexture,
  stats;

const params = {
  orthographicCamera: false,
};

// const frustumSize = 400;

init();
animate();

function init() {
  const aspect = window.innerWidth / window.innerHeight;

  perspectiveCamera = new THREE.PerspectiveCamera(60, aspect, 1, 1000);
  perspectiveCamera.position.z = 15;

  // orthographicCamera = new THREE.OrthographicCamera(
  //   (frustumSize * aspect) / -2,
  //   (frustumSize * aspect) / 2,
  //   frustumSize / 2,
  //   frustumSize / -2,
  //   1,
  //   1000
  // );
  // orthographicCamera.position.z = 15;

  // world

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2d2c2a);
  // scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

  // const textureLoader = new THREE.TextureLoader();
  // planetTexture = textureLoader.load("./cartedumonde.png");
  planetTexture = new THREE.TextureLoader().load("assets/img/cartedumonde.png");

  const geometry = new THREE.SphereGeometry(5, 64, 64);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true,
    map: planetTexture,
  });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.material.shading = THREE.SmoothShading;

  scene.add(sphere);

  // lights

  // const dirLight1 = new THREE.DirectionalLight(0xffffff);
  // dirLight1.position.set(1, 1, 1);
  // scene.add(dirLight1);

  // const dirLight2 = new THREE.DirectionalLight(0x002288);
  // dirLight2.position.set(-1, -1, -1);
  // scene.add(dirLight2);

  // const dirLight3 = new THREE.DirectionalLight(0x002288);
  // dirLight3.position.set(-10, -10, -10);
  // dirLight3.target = sphere;
  // scene.add(dirLight3);

  const ambientLight1 = new THREE.AmbientLight(0xffffff);
  // ambientLight1.position.set(10, 10, 10);
  scene.add(ambientLight1);

  // renderer

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // stats = new Stats();
  // document.body.appendChild(stats.dom);

  //

  // const gui = new GUI();
  // gui
  //   .add(params, "orthographicCamera")
  //   .name("use orthographic")
  //   .onChange(function (value) {
  //     controls.dispose();

  //     createControls(value ? orthographicCamera : perspectiveCamera);
  //   });

  //

  window.addEventListener("resize", onWindowResize);

  createControls(perspectiveCamera);
}

function createControls(camera) {
  controls = new TrackballControls(camera, renderer.domElement);

  controls.rotateSpeed = 3.0;
  controls.zoomSpeed = 1.2;
  // controls.panSpeed = 0.8;

  controls.keys = ["KeyA", "KeyS", "KeyD"];
}

function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  perspectiveCamera.aspect = aspect;
  perspectiveCamera.updateProjectionMatrix();

  // orthographicCamera.left = (-frustumSize * aspect) / 2;
  // orthographicCamera.right = (frustumSize * aspect) / 2;
  // orthographicCamera.top = frustumSize / 2;
  // orthographicCamera.bottom = -frustumSize / 2;
  // orthographicCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  controls.handleResize();
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  // stats.update();

  render();
}

function render() {
  const camera = params.perspectiveCamera
    ? orthographicCamera
    : perspectiveCamera;

  renderer.render(scene, camera);
}
