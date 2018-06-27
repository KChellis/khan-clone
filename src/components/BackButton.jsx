import React from 'react';
import { Link } from 'react-router-dom';

function BackButton(){

  return(
    <div className='backButton'>
      <style jsx>{`
        .backButton {
          background-color: #F6F7F7;
          height: 40px;
          padding-top: 15px;
        }
       `}
      </style>
      <Link to='/'>Back to math by subject</Link>
    </div>
  );
}

export default BackButton;
