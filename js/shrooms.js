function Shrooms() {

  var radius = .01;
  var height = .01;
  var x = 2 + Math.random() * 6.5;
  var position = Math.cos(Math.PI/20*x);
  var capGeometry = new THREE.CircleGeometry(radius);
  var capMaterial =  new THREE.MeshLambertMaterial({color: 0xb72626});
  capGeometry.rotateX(-Math.PI/2);
  var y = height/2;
  // capGeometry.translate(x, 0, 0);


  var stemGeometry = new THREE.CylinderGeometry(radius/3, radius/3, height);
  var stemMaterial = new THREE.MeshLambertMaterial({color: 0xd1c9b3});
  stemGeometry.translate(x, 0, 0);
  //define group for all shrooms
  this.group = new THREE.Group();
  // define group to top+bottom each shroom
  this.shroom = new THREE.Group();



  var shroomCap = new THREE.Mesh( capGeometry, capMaterial );
  var shroomStem = new THREE.Mesh( stemGeometry, stemMaterial );
  var x = 2 + Math.random() * 6.5;


  this.shroom.add(shroomCap);
  this.shroom.add(shroomStem);
  this.shroom.position.set(0, 1, 0);

  this.group.add(this.shroom);






}

// Shrooms.prototype.update = function(time) {
//
// }
