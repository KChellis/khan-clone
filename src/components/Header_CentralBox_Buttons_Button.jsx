import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  return(
    <div>
      <button>{props.name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
