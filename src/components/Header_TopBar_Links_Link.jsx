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
      <h5>{props.name}</h5>
    </div>
  )
}

Link.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string
}

export default Link;
