import React from 'react';
function Receiver(props) {
  const message = props.message;

  return (
    <div>
      <p>Received Message: {message}</p>
    </div>
  );
}

export default Receiver;
