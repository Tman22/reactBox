import React from 'react'
import Idea from './Idea'
const IdeasList = ({ ideas, destroy }) => {
  return (
    <div className= "IdeaList">
      <ul>
      {ideas.map((idea) => {
        return <Idea key={idea.id} {...idea} destroy={destroy}/>;
      })
      }
      </ul>
    </div>
  );
};
module.exports = IdeasList
