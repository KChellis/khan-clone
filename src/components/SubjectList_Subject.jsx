import React from 'react';
import PropTypes from 'prop-types';
import Lessons from './SubjectList_Subject_Lessons';

function Subject(props){
  return (
    <div className='subject'>
      <style jsx>{`
          .subject {
          }
      `}</style>
      <h3>{props.name}</h3>
      <Lessons lessons={props.lessons}/>
    </div>
  );
}

Subject.propTypes = {
  name: PropTypes.string,
  lessons: PropTypes.array,
};

export default Subject;
