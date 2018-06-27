import React from 'react';
import SubjectDrop from './Header_TopBar_SubjectDrop';
import Search from './Header_TopBar_Search';
import Links from './Header_TopBar_Links';

function TopBar(){
  return(
    <div className = 'topBar'>
      <style jsx>{`
          .topBar {
            display: flex;
            justify-content: space-around;
          }
       `}
      </style>
      <SubjectDrop/>
      <Search/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Khan_Academy_logo.svg/2000px-Khan_Academy_logo.svg.png" height='60px'/>
      <Links/>
    </div>
  );
}

export default TopBar;
