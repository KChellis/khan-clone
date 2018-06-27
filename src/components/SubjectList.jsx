import React from 'react';
import Subject from './SubjectList_Subject';

function SubjectList(){
  const subjects = [
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png',
      name: 'Math by subject',
      lessons: ['Early Math', 'Arithmetic', 'Pre-algebra', 'Algerbra 1', 'Geometry', 'Algebra 2', 'Trigonometry', 'Precalculus', 'Statistics & probability', 'AP calculus AB', 'AP Calculus BC', 'AP Statistics', 'Multivariable calculus', 'Differential equations', 'Linear algebra']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png',
      name: 'Math by grade',
      lessons: ['Kindergarten', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', 'Eureka Math/EngageNY', 'High school']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science.png-3b6492-128c.png',
      name: 'Science & engineering',
      lessons: ['Physics', 'AP Physics 1', 'AP Physics 2', 'Cosmology & astronomy', 'Chemistry', 'AP Chemistry', 'Organic chemistry', 'Biology', 'High school biology', 'Health & medicine', 'Electrical engineering']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/computer_programming.png-7da73e-128c.png',
      name: 'Computing',
      lessons: ['Computer programming', 'Computer science', 'Hour of Code', 'Computer animation']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/humanities.jpg-9fb720-128c.jpeg',
      name: 'Arts & humanities',
      lessons: ['US history', 'AP US History', 'World history', 'AP World History', 'AP US Government & Politics', 'Art history', 'AP Art History', 'Grammar']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/economics.png-a9ab07-128c.png',
      name: 'Economics & fincance',
      lessons: ['AP Macroeconomics', 'Macroeconomics', 'Microeconomics', 'AP Microeconomics', 'Finance & capital markets']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/sat_reading_writing.png-a4e240-128c.png',
      name: 'Test prep',
      lessons: ['SAT', 'LSAT', 'MCAT', 'GMAT', 'IIT JEE', 'NCLEX-RN']
    },
    {
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/college_careers_more.png-147262-128c.png',
      name: 'College, careers, & more',
      lessons: ['College admissions', 'Careers', 'Personal finance', 'Entrepreneurship']
    }
  ];
  return(
    <div className='subjectList'>
      <style jsx>{`
          .subjectList {

          }
       `}
      </style>
      {subjects.map((subject, index) =>
        <Subject icon ={subject.icon}
          name={subject.name}
          lessons={subject.lessons}
          key={index} />
      )}
    </div>
  );
}

export default SubjectList;
