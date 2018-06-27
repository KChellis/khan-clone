import React from 'react';
import TopBar from './Header_TopBar';
import CentralBox from './Header_CentralBox';

function Header(){
  return(
    <div className='header'>
      <style jsx>{`
          .header {
            background-image: url(https://cdn.kastatic.org/images/homepage/blue-mountains.svg);
            height: 525px;
            background-size: cover;
            color: white;
            font-family: helvetica;
          }
       `}
      </style>
      <TopBar/>
      <CentralBox/>
    </div>
  );
}

export default Header;
