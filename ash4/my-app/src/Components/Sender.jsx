import React from 'react';
import Receiver from './Receiver';
function Sender() {
  const data = 'Hello, Receiver!';

  return (
    <div>
      <Receiver message={data} />
    </div>
  );
}

export default Sender;
