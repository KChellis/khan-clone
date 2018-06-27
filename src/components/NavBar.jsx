import React from 'react';
import Topic from './NavBar_Topic';

function NavBar(){
  const topics = ['Math', 'Science & engineering', 'Computing', 'Arts & humanities', 'Economics & finance', 'Test prep', 'College, careers, & more'];
  return(
    <div className='navBar'>
      <style jsx>{`
        .navBar {
          display: flex;
          justify-content: space-around;
          background-color: #F6F7F7;
        }
       `}
      </style>
      {topics.map((topic, index) =>
        <Topic name={topic}
          key={index} />
      )}
    </div>
  );
}

export default NavBar;
