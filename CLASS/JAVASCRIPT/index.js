// OBJECT & FUNCTIONS IN JAVASCRIPT

// //object create 
//   let rectangle ={
//     length:1,
//     breadth : 2,
  
//     draw(){
//     console.log('drawing rectangle');
//   }
//   };


  // // Factory function
  // function createRectangle(length,breath){
  //   return rectangle ={
  //     length,
  //     breadth ,
    
  //     draw(){
  //     console.log('drawing rectangle');
  //   }
  //   };
  //   return rectangle;
  // }
  // let rectangleObj1 = createRectangle(5,4);
  // let rectangleObj2 = createRectangle(15,14);
  // //CamelCase --> numberOfStudents




  //Constructor function --> Pascal Notation -> first letter of every word capital -> NumberOfStudents
  //Constructor function -> properties -> initialize , method -> Define
  function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function() {
      console.log('drawing');
    }
  }
  // object creation using constructor function
  let rectangleObject = new Rectangle(5,8);

  rectangleObject.color ='yellow';
  console.log(rectangleObject);
  // delete rectangleObject.color;
  // console.log(rectangleObject);




