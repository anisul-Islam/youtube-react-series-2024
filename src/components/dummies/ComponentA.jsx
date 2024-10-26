import React from 'react';
import ComponentD from './ComponentD';
import ComponentC from './ComponentC';

const ComponentA = ({ onHandleGetMessage }) => {
  return (
    <div>
      <ComponentC />
      <ComponentD onHandleGetMessage={onHandleGetMessage} />
    </div>
  );
};

export default ComponentA;
