import React from 'react';
import PropTypes from 'prop-types';

function Course(props){
  return (
    <div className='course'>
      <style jsx>{`
        .course{
      }
      `}
      </style>
      <img src={props.icon}/>
      <p>{props.name}</p>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
};

export default Course;
