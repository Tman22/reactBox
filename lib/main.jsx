// lib/main.jsx

import React from 'react';
import ReactDOM from 'react-dom'; 
// ReactDOM was pulled out of the React library
// Because we can use React in mobile, the DOM, etc

class Main extends React.Component{
  render(){
    return(
      <div className='IdeaBox'>
        <section className='sidebar'>
          <header>
            <h1>{this.props.title}</h1>
          </header>
          <CreateIdea />
        </section>
      </div>
      // <div> !! <--- No good! Only one parent element per return
    )  // we have () here so we can return multiple lines
  }
}

// React has built in event listeners

class CreateIdea extends React.Component{
  constructor(){
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  // CreateIdea.prototype.updateProperties = function(){} --- es5

  updateProperties(e){
    const { name, value } = e.target
    // var name = e.target.name (if this is true it will assign the value to name)
    // var value = e.target.value (if this is true it will assign the value to value)
    // whats nice about this is you can just call the const 'name' and get the same value

    // in order for the state to persist you have to set the state 
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div>
        <input 
          type='text'
          className='CreateIdea-title' 
          name= 'title' 
          onChange={(e)=>{
            this.updateProperties(e);

          }}  // onChange needs to get a function
           // the arrow function does the bind this for you
              // but is more verbose
            // if we used function instead of an arrow function
              // then this 'this' wouldn't be what we want it to be
          value={this.state.title}
        />
        <textarea 
          className='CreateIdea-body'
          name= 'body'
          onChange={
            this.updateProperties.bind(this)
          }
          value={this.state.body}
        />
      </div> 
    )
  }
}

//ReactDOM.render('first arg: one main component', 'second arg: where we want to put it')
ReactDOM.render(<Main title='RodeoShow: ReactBox'/>, document.querySelector('.application'));
// We will only do this once!



//Q: How do you know when you should start a new component?

//A: React is great because you can reuse a lot of code easily. 
// A. I've done this a lot, so I kind of know off the top of my head
// But React has a lot of, basically, boxes
//  ------------
// | --------- |
// | |       | |
// | --------- |
// |           |
// |           |
//  ------------

// And the rendering depends on the boxes that you create through React
// I know that creating an Idea will have a change of state - so I know I don't want to rerender everything
// So it makes sense to break this functionality out, right?
// So when I input text, the entire page doesn't rerender 
// Ideally, 95% of components will NOT hold state. Pure, stateless components