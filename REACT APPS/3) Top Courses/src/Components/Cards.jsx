import React , {useState} from 'react';
import Card from './Card';


const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);


  function getCourses(){
    if(category === "All"){
    let allCourses = [];
    //return you a list of all courses received from api respons
        Object.values(courses).forEach(array => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else{
      //sirf speicific category ka array pass hoga
      return courses[category];
    }
  }
  return (
    <div className ='flex flex-wrap justify-center gap-4 mb-4'>
      {
        // getCourses().map((course)=> {
        //   return ( <Card key={course.id} course = {course}
        //     likedCourses = {likedCourses}
        //     setLikedCourses={setLikedCourses}/>)
        // })
        getCourses()?.map((course) => {
          return (<Card key={course.id} course = {course}
                likedCourses = {likedCourses}
               setLikedCourses={setLikedCourses}/>)
        })
      }
    </div>
  )
}
export default Cards
 