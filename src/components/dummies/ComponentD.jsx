import React, { useState } from 'react';

const ComponentD = ({ onHandleGetMessage }) => {
  const [message, setMessage] = useState('hello from KSA');
  onHandleGetMessage(message);
  return (
    <div>
      <h2>Component D</h2>
    </div>
  );
};

export default ComponentD;
