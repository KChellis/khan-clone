import React from 'react';
import Button from './Header_CentralBox_Buttons_Button';

function Buttons(){
  const buttons = ['Learners, start here', 'Teachers, start here', 'Parents, start here'];
  return(
    <div>
      {buttons.map((button, index) =>
        <Button name={button}
          key={index} />
      )}
    </div>
  );
}

export default Buttons;
