window.ARApp = {
  gltfLoader: new THREE.GLTFLoader(),
  glbFilePaths: [
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Alligator.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Bear.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Cat.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Dog.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Elephant.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Fox.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Giraffe.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Horse.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Iguana.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Jellyfish.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Kiwi.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Lion.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Mouse.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Newt.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Ostrich.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Penguin.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Quoll.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Rhino.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Skunk.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Turtle.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Ulysses_butterfly.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Vampire_bat.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Wolf.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Xenoceratops.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/YellowJacket_wasp.glb",
    "https://nahomane.github.io/ARSchool_DemoTemplate/assets/Zebra.glb"],

  glbModelsScales: [
    0.1,
    0.0025,
    0.01,
    0.25,
    0.1,
    0.001,
    0.1,
    0.015,
    0.001,
    0.15,
    2,
    0.005,
    0.5,
    0.08,
    0.005,
    0.25,
    0.2,
    0.5,
    0.15,
    1.5,
    0.25,
    0.25,
    0.15,
    0.075,
    3,
    0.15],
  models: new Array(26),
  mixers: new Array(26),
  currentlyShownModel: null,
  currentlyShownModelMixer: null,
  currentlyShownModelIndex: 0,
  reticle: null,
  rootScene: null,
  currentlyPlayingAudio: null,
  descriptions: [
    "Ant description...",
    "Bee description...",
    "Cockroach description...",
    "Dung Beetle description..."
  ],
  sounds: [
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Alligator.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Bear.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Cat.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Dog.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Elephant.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Fox.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Giraffe.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Horse.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Iguana.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Jellyfish.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Kiwi.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Lion.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Mouse.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Newt.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Ostrich.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Penguin.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Quoll.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Rhino.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Skunk.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Turtle.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Ulysses_butterfly.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Vampire_bat.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Wolf.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Xenoceratops.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/YellowJacket_wasp.mp3",
    "https://nahomane.github.io/ARSchool_DemoTemplate/sounds/Zebra.mp3"
  ],
  loadingStates: [],
};

window.ARApp.init = function() {
  // const dracoLoader = new THREE.DRACOLoader();
  // dracoLoader.setDecoderPath('https://nahomane.github.io/ARSchool_DemoTemplate/shared/DRACO/');
  // this.gltfLoader.setDRACOLoader(dracoLoader);
  // this.loadModels(this.glbFilePaths, this.glbModelsScales)
  //   .then(() => {
  //     console.log('Models Loaded');
  //   })
  //   .catch(error => {
  //     console.error('Model loading failed:', error);
  //   });

  // Initialize UI and sound here
  this.initUI();
};

// window.ARApp.loadModels = function(glbFilePaths, glbModelsScales) {
//   const loadPromises = glbFilePaths.map((glbFilePath, index) => {
//     this.loadingStates[index] = true;
//     return new Promise((resolve, reject) => {
//       this.gltfLoader.load(glbFilePath, (gltf) => {
//         let glbModel = gltf.scene;
//         glbModel.scale.set(glbModelsScales[index], glbModelsScales[index], glbModelsScales[index]);
//         glbModel.animations = gltf.animations;
//         this.models[index] = glbModel;
//         this.mixers[index] = new THREE.AnimationMixer(glbModel);
//         this.loadingStates[index] = false;
//         updateCarouselButtonState(index, false);
//         resolve();
//       }, undefined, reject);
//     });
//   });
//   return Promise.all(loadPromises);
// };

window.ARApp.loadModel = function(ModelIndex) {
  return new Promise((resolve, reject) => {
    this.loadingStates[ModelIndex] = true;
    this.gltfLoader.load(this.glbFilePaths[ModelIndex], (gltf) => {
      let glbModel = gltf.scene;
      glbModel.scale.set(this.glbModelsScales[ModelIndex], this.glbModelsScales[ModelIndex], this.glbModelsScales[ModelIndex]);
      glbModel.animations = gltf.animations;
      this.models[ModelIndex] = glbModel;
      this.mixers[ModelIndex] = new THREE.AnimationMixer(glbModel);
      this.loadingStates[ModelIndex] = false;
      updateCarouselButtonState(ModelIndex, false);
      resolve();
    }, undefined, reject);
  });
};

window.ARApp.showModelFromMemory = function(index, position, scene) {
  const i = index < 0 ? this.models.length -1 : index >= this.models.length ? 0 : index;

  if(this.currentlyShownModel != null){
    scene.remove(this.currentlyShownModel);
    this.currentlyShownModelMixer.stopAllAction();
  }

  this.currentlyShownModel = this.models[i];
  this.currentlyShownModel.position.copy(position);
  this.currentlyShownModelIndex = i;
  this.currentlyShownModelMixer = this.mixers[i];
  const clip = this.currentlyShownModel.animations[0];
  const action = this.currentlyShownModelMixer.clipAction(clip);
  action.setDuration(clip.duration);
  action.play();
  scene.add(this.currentlyShownModel);
};
window.ARApp.playSoundForCurrentModel = function() {
  const soundSrc = this.sounds[this.currentlyShownModelIndex];
  const soundButtonImg = document.getElementById("soundIcon");
  this.toggleAudio(false);
  this.currentlyPlayingAudio = new Audio(soundSrc);
  this.currentlyPlayingAudio.playbackRate = 0.8;
  this.currentlyPlayingAudio.play();
  soundButtonImg.src = "https://nahomane.github.io/ARSchool_DemoTemplate/icons/pause.png";
  this.currentlyPlayingAudio.onended = () => {
    soundButtonImg.src = "https://nahomane.github.io/ARSchool_DemoTemplate/icons/play.png";
  };
};

window.ARApp.toggleAudio = function (shouldPlay) {
  const soundSrc = this.sounds[this.currentlyShownModelIndex];
  const soundButtonImg = document.getElementById("soundIcon");

  if(this.currentlyPlayingAudio!= null && !this.currentlyPlayingAudio.paused && !shouldPlay){
    this.currentlyPlayingAudio.pause();
    soundButtonImg.src = "https://nahomane.github.io/ARSchool_DemoTemplate/icons/play.png";
  }else if(this.currentlyPlayingAudio!= null && this.currentlyPlayingAudio.paused && shouldPlay){
    this.currentlyPlayingAudio = new Audio(soundSrc);
    this.currentlyPlayingAudio.playbackRate = 0.8;
    this.currentlyPlayingAudio.play();
    soundButtonImg.src = "https://nahomane.github.io/ARSchool_DemoTemplate/icons/pause.png";
    this.currentlyPlayingAudio.onended = () => {
      soundButtonImg.src = "https://nahomane.github.io/ARSchool_DemoTemplate/icons/play.png";
    }
  }
}

window.ARApp.initUI = function() {
  const carousel = document.getElementById('modelCarousel');
  this.glbFilePaths.forEach((path, index) => {
    const buttonImageName = new String(path).replace("https://nahomane.github.io/ARSchool_DemoTemplate/assets/","").replace(".glb","");
    const button = document.createElement('button');
    button.style.background = "transparent";
    button.style.margin = "5px";
    button.classList.add('round-button');
    button.innerHTML = `<img src="https://nahomane.github.io/ARSchool_DemoTemplate/thumbnails/${buttonImageName}.PNG" alt="Model ${index+1}"">`;
    console.log(index+" "+path);
    button.onclick = () => {
      if(this.models[index] == undefined || this.models[index] == null) {
        this.loadModel(index).then(() => {
          this.showModelFromMemory(index,this.reticle.position,this.rootScene);
          this.playSoundForCurrentModel();
        });
      }else{
        this.showModelFromMemory(index,this.reticle.position,this.rootScene);
        this.playSoundForCurrentModel();
      }
    }; // Update to call with correct parameters
    // button.disabled = true; // Initially disabled
    carousel.appendChild(button);
  });
  
  const soundButton = document.getElementById('playSound');
  soundButton.className = 'round-button'
  soundButton.onclick = () => {
    this.toggleAudio(this.currentlyPlayingAudio.paused);
  };

  // Fill model descriptions dropdown
  const descriptionsDropdown = document.getElementById('modelDescriptions');
  this.descriptions.forEach((desc, index) => {
    let option = document.createElement('option');
    option.innerText = desc;
    descriptionsDropdown.appendChild(option);
  });
};

// Make this public to update button state when model loads
function updateCarouselButtonState(index, disabled) {
  const carousel = document.getElementById('modelCarousel');
  carousel.children[index].disabled = disabled;
}

class Reticle extends THREE.Object3D {
  constructor() {
    super();

    this.loader = new THREE.GLTFLoader();
    this.loader.load("https://nahomane.github.io/ARSchool_DemoTemplate/assets/reticle.glb", (gltf) => {
      const glbreticle = gltf.scene;
      glbreticle.scale.set(1,1,1);
      gltf.scene.traverse(function(child){
        if(child.isMesh === true){
          child.material.transparent = true;
          child.material.opacity = 0.5;
        }
      })
      //set the scene transparent
      this.add(glbreticle);
    })

    this.visible = false;
  }
}

window.DemoUtils = {
  createLitScene() {
    const scene = new THREE.Scene();
    const light = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;

    const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
    planeGeometry.rotateX(-Math.PI / 2);

    const shadowMesh = new THREE.Mesh(planeGeometry, new THREE.ShadowMaterial({
      color: 0x111111,
      opacity: 0.2,
    }));

    shadowMesh.name = "shadowMesh";
    shadowMesh.receiveShadow = true;
    shadowMesh.position.y = 10000;

    scene.add(shadowMesh);
    scene.add(light);
    scene.add(directionalLight);

    return scene;
  }
};

function onNoXRDevice() {
  document.body.classList.add("unsupported");
}
