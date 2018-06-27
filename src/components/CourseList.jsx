import React from 'react';
import Course from './CourseList_Course';

function CourseList(){
  const courses = [
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/counting.png-377815-416.png',
      name: 'Counting'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/addition_subtraction.png-e56729-416.png',
      name: 'Addition and subtraction intro'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/place_value.png-05e62a-416.png',
      name: 'Place value (tens and hundreds)'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/addition_subtraction.png-e56729-416.png',
      name: 'Addition and subraction within 20'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/addition_subtraction_within_100.png-c9efd4-416.png',
      name: 'Addition and subraction within 100'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/addition_subtraction_within_1000.png-c59d5e-416.png',
      name: 'Addition and subraction within 1000'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/measure_data.png-ba6e6a-416.png',
      name: 'Measurement and data'
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/basic_geo_shapes.png-05ca4e-416.png',
      name: 'Geometry'
    }
  ];
  return(
    <div className='courseList'>
      <style jsx>{`
          .courseList {

          }
       `}
      </style>
      <h4>What do you want to learn in Early math?</h4>
      {courses.map((course, index) =>
        <Course icon ={course.icon}
          name={course.name}
          key={index} />
      )}
    </div>
  );
}

export default CourseList;
