import React from 'react'
const Idea = ({ title, body, id, destroy }) => {
  return (
    <div>
      <h3 className="IdeasListItem-title"> {title}</h3>
      <div className= "IdeasListItem-body">{body}</div>
      <button onClick={() => destroy(id) }>Destroy</button>
    </div>
  );
};

module.exports = Idea
