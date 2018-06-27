import React from 'react';
import Buttons from './Header_CentralBox_Buttons';

function CentralBox(){
  return(
    <div>
      <div className='content'>
        <style jsx>{`
            .content {
              text-align: center;
              margin-top: 80px;
            }
         `}
        </style>
        <h1>You can learn anything</h1>
        <h3>For free. For everyone. Forever.</h3>
        <Buttons/>
      </div>
    </div>
  );
}

export default CentralBox;
