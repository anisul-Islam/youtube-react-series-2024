import React from 'react';

const Message = () => {
  // return (
  //   <article>
  //     <h2>Hello everyone</h2>
  //     <p>lorem10</p>
  //   </article>
  // );
  return React.createElement(
    'article',
    {},
    React.createElement('h2', {}, 'Hello everyone'),
    React.createElement('p', {}, 'lorem10')
  );
};

export default Message;
