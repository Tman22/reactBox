import React from 'react';
import ReactDOM from 'react-dom'; 
import CreateIdea from './createIdea.jsx';

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      ideas: [] 
    }
  }

  componentDidMount(){
    let storedIdeas = localStorage.getItem('ideas');

    this.setState({
      ideas: storedIdeas ? JSON.parse(storedIdeas) : []
    })
  }

  storeIdea(idea) {
    this.state.ideas.push(Object.assign(idea, { id: Date.now() }))

    this.setState(
      {ideas: this.state.ideas}, 
      () => {
        localStorage.setItem('ideas', JSON.stringify(this.state.ideas))
      }
    )
  }

  render(){
    return(
      <div className='IdeaBox'>
        <section className='sidebar'>
          <header>
            <h1>{this.props.title}</h1>
          </header>
          <CreateIdea sendIdea={this.storeIdea.bind(this)} /> 
          <IdeasList ideas={this.state.ideas}/>
        </section>
      </div>
    )}  
}

const IdeasList = ({ideas}) => {
  return (
    <div className= "IdeaList"> 
      <ul>
      {ideas.map((idea) => {
         return <Idea key={idea.id} {...idea}/>
       })
      }      
      </ul>
    </div>
    )
} 

const Idea = ({title, body}) => {
  return (
    <div>
      <h3 className="IdeasListItem-title"> {title}</h3> 
      <div className= "IdeasListItem-body">{body}</div>
    </div>
    )
}

ReactDOM.render(<Main title='RodeoShow: ReactBox'/>, document.querySelector('.application'));