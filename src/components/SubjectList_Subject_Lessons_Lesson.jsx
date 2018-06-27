import React from 'react';
import PropTypes from 'prop-types';

function Lesson(props){
  return (
    <div className='lesson'>
      <style jsx>{`
        .lesson{
      }
      `}
      </style>
      <p>{props.lesson}</p>
    </div>
  );
}

Lesson.propTypes = {
  lesson: PropTypes.string
};

export default Lesson;
