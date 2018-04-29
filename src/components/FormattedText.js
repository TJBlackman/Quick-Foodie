import React from 'react';

export default props => {
  return (
    <div className="formatted-text">
      <pre>{props.text}</pre>
    </div>
  );
};
