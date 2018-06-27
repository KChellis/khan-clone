import React from 'react';
import PropTypes from 'prop-types';
import Lesson from './SubjectList_Subject_Lessons_Lesson';

function Lessons(props){
  return (
    <div className='lessons'>
      <style jsx>{`
          .lessons {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            line-height: 10px;
            justify-content: space-around;
            margin-right: -500;

          }
      `}</style>
      {
        props.lessons.map((lesson, index) =>
          <Lesson lesson={lesson}
            key={index}/>
        )}
    </div>
  );
}

Lessons.propTypes = {
  lessons: PropTypes.array,
};

export default Lessons;
