import React from 'react';
import Buttons from './Header_CentralBox_Buttons';

function CentralBox(){
  return(
    <div>
      <hr/>
      <div className='content'>
        <style jsx>{`
            .content {
              text-align: center;
              margin-top: 125px;
            }
         `}
        </style>
        <h2>You can learn anything</h2>
        <p>For free. For everyone. Forever.</p>
        <Buttons/>
      </div>
    </div>
  );
}

export default CentralBox;
