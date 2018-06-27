import React from 'react';
import PropTypes from 'prop-types';
import Lessons from './SubjectList_Subject_Lessons';

function Subject(props){
  return (
    <div>
      <div className='subject'>
        <style jsx>{`
            .subject {
              float: left;
              width: 20%;
            }
        `}</style>
        <h3>{props.name}</h3>
      </div>
      <div className='lessons'>
        <style jsx>{`
            .lessons {
              float: left;
              width: 79%;
            }
        `}</style>
        <Lessons lessons={props.lessons}/>
      </div>
    </div>
  );
}

Subject.propTypes = {
  name: PropTypes.string,
  lessons: PropTypes.array,
};

export default Subject;
