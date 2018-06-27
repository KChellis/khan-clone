import React from 'react';
import PropTypes from 'prop-types';

function Link(props){
  return(
    <div className='link'>
      <style jsx>{`
          .link {
            margin-left: 10px;
          }
       `}
      </style>
      <h4>{props.name}</h4>
    </div>
  );
}

Link.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string
};

export default Link;
