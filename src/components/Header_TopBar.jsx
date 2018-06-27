import React from 'react';
import Links from './Header_TopBar_Links';

function TopBar(){
  return(
    <div className='topBar'>

      <style jsx>{`
          .topBarContent {
            display: flex;
            justify-content: space-around;
          }
          .topBar:hover {
            background-color: white;
            color: black;
          }
          input {
            margin-top:13px;
            height: 40px;
            width: 200px;
            background-color: rgb(255,255,255, .25);
            border: none;
            border-radius: 5%;
            font-size: 16px;

          }
          ::placeholder {
            color: white;
            padding-left: 5px;
          }
          .topBar:hover input{
            background-color: LightGrey;
          }
          .topBar:hover input::placeholder{
            color: black;
          }
          `}
      </style>
      <div className = 'topBarContent'>
        <h3>Subjects</h3>
        <div className='search input-group'>
          <input type='text' placeholder='Search'/>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Khan_Academy_logo.svg/2000px-Khan_Academy_logo.svg.png" height='60px'/>
        <Links/>
      </div>
      <hr/>
    </div>
  );
}

export default TopBar;
