import React from 'react';
import PropTypes from 'prop-types';

function Topic(props){
  return(
    <div>
      <h5>{props.name}</h5>
    </div>
  );
}

Topic.propTypes = {
  name: PropTypes.string
};

export default Topic;
