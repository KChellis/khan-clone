import React from 'react';
import PropTypes from 'prop-types';

function Course(props){
  return (
    <div className='course'>
      <style jsx>{`
        img{
          width: 250px;
          margin: 10px;
        }
      `}
      </style>
      <img src={props.icon}/>
      <p><strong>{props.name}</strong></p>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
};

export default Course;
