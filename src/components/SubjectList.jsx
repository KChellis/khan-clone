import React from 'react';
import Subject from './SubjectList_Subject';

function SubjectList(){
  const subjects = [
    {
      name: 'Math by subject',
      lessons: ['Early Math', 'Arithmetic', 'Pre-algebra', 'Algerbra 1', 'Geometry', 'Algebra 2', 'Trigonometry', 'Precalculus', 'Statistics & probability', 'AP calculus AB', 'AP Calculus BC', 'AP Statistics', 'Multivariable calculus', 'Differential equations', 'Linear algebra']
    },
    {
      name: 'Math by grade',
      lessons: ['Kindergarten', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', 'Eureka Math/EngageNY', 'High school']
    },
    {
      name: 'Science & engineering',
      lessons: ['Physics', 'AP Physics 1', 'AP Physics 2', 'Cosmology & astronomy', 'Chemistry', 'AP Chemistry', 'Organic chemistry', 'Biology', 'High school biology', 'Health & medicine', 'Electrical engineering']
    },
    {
      name: 'Computing',
      lessons: ['Computer programming', 'Computer science', 'Hour of Code', 'Computer animation']
    },
    {
      name: 'Arts & humanities',
      lessons: ['US history', 'AP US History', 'World history', 'AP World History', 'AP US Government & Politics', 'Art history', 'AP Art History', 'Grammar']
    },
    {
      name: 'Economics & fincance',
      lessons: ['AP Macroeconomics', 'Macroeconomics', 'Microeconomics', 'AP Microeconomics', 'Finance & capital markets']
    },
    {
      name: 'Test prep',
      lessons: ['SAT', 'LSAT', 'MCAT', 'GMAT', 'IIT JEE', 'NCLEX-RN']
    },
    {
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
        <Subject name={subject.name}
          lessons={subject.lessons}
          key={index} />
      )}
    </div>
  );
}

export default SubjectList;
