import React from 'react';
import { Link } from 'react-router-dom';

function BackButton(){

  return(
    <div className='backButton'>
      <style jsx>{`
        .backButton {
          display: flex;
          justify-content: space-around;
          background-color: #F6F7F7;
        }
       `}
      </style>
      <Link to='/'>Back to Home</Link>
    </div>
  );
}

export default BackButton;
