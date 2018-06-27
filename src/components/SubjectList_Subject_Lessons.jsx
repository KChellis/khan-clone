import React from 'react';
import PropTypes from 'prop-types';
import Lesson from './SubjectList_Subject_Lessons_Lesson';

function Lessons(props){
  return (
    <div className='lessons'>
      <style jsx>{`
          .lessons {
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
