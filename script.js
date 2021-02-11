const Animation = require('Animation'); 
 const Scene = require('Scene'); 
 const TouchGestures = require('TouchGestures'); 
  
 const sceneRoot = Scene.root; 
  
 // Existing code updated 
 Promise.all([ 
     sceneRoot.findFirst('base_jnt'), 
     sceneRoot.findFirst('Wailord'), 
     sceneRoot.findFirst('planeTracker0') 
 ]) 
 .then(function(objects) { 
     const base = objects[0]; 
     const Wailord = objects[1]; 
     const planeTracker = objects[2]; 

     TouchGestures.onTap().subscribe((gesture) => {
     planeTracker.trackPoint(gesture.location);
     });

 });