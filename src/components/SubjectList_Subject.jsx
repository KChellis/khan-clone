import React from 'react';
import PropTypes from 'prop-types';
import Lessons from './SubjectList_Subject_Lessons';

function Subject(props){
  return (
    <div className="subjectBox">

      <div className='subject'>
        <style jsx>{`
            .subject {
              float: left;
              width: 25%;
              display: grid;
              grid-template-columns: .25fr 1fr;
            }
            .icon {
              border-radius: 50%;
              width: 50px;
            }
        `}</style>
        <img className="icon" src={props.icon}/>
        <h4>{props.name}</h4>
      </div>
      <div className='lessons'>
        <style jsx>{`
            .lessons {
              width: 74%;
              justify-content: space-around;
            }
        `}</style>
        <Lessons lessons={props.lessons}/>
      </div>
      <hr/>
    </div>
  );
}

Subject.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  lessons: PropTypes.array
};

export default Subject;
