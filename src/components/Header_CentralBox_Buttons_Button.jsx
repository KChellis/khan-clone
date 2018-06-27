import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  return(
    <div className='button'>
      <style>{`
          button {
            width: 400px;
            height: 50px;
            margin: 3px;
            font-size: 16px;
            background-color: white;
            color: #00294a;
          }
        `}
      </style>
      <button>{props.name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
