// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
 constructor(properties){
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height; 
  }

  volume() {
    return this.length * this.width * this.height
  }
  
  surfaceArea(){
    return 2 * (this.length * this.width + this.length *this.height + this.width * this.height);
  }
} //Cuboid Maker

const cuboidClass = new CuboidMaker ({
    length:4,
    width: 5,
    height:5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor (cubeProperties){
        super(cubeProperties);
        this.side = cubeProperties.side
    } 


cubeSurface() {
   return  6 * (this.side * this.side); 
}

}//CubeMaker

const cubeClass = new CubeMaker ({
    length:7,
    width: 7,
    height:7,
    side:7
  });

console.log(cubeClass.volume()); 
console.log(cubeClass.surfaceArea()); 
console.log(cubeClass.cubeSurface()); 