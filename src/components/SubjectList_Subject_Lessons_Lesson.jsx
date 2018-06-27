import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Lesson(props){
  return (
    <div className='lesson'>
      <style jsx>{`
        .lesson{
          margin:-5px;
      }
      `}
      </style>
      <Link to='/earlymath'><p>{props.lesson}</p></Link>
    </div>
  );
}

Lesson.propTypes = {
  lesson: PropTypes.string
};

export default Lesson;
