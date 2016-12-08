import React from 'react';
import ReactDOM from 'react-dom';
import CreateIdea from './createIdea.jsx';
import IdeasList from './IdeasList';
import Idea from './Idea'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    };
  }

  componentDidMount() {
    let storedIdeas = localStorage.getItem('ideas');

    this.setState({
      ideas: storedIdeas ? JSON.parse(storedIdeas) : [],
    });
  }

  storeIdea(idea) {
    this.state.ideas.push(Object.assign(idea, { id: Date.now() }));

    this.setState(
      { ideas: this.state.ideas },
      () => {
        localStorage.setItem('ideas', JSON.stringify(this.state.ideas));
      }
    );
  }

  destroy(id) {
    let ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    });
    this.setState({ ideas: ideas }, () => {
      localStorage.setItem('ideas', JSON.stringify(this.state.ideas));
    });
  }


  render() {
    return (
      <div className='IdeaBox'>
        <section className='sidebar'>
          <header>
            <h1>{this.props.title}</h1>
          </header>
          <CreateIdea sendIdea={this.storeIdea.bind(this)} />
          <IdeasList ideas={this.state.ideas}
                     destroy= {this.destroy.bind(this)}/>
        </section>
      </div>
    ) }
}
ReactDOM.render(<Main title='RodeoShow: ReactBox'/>, document.querySelector('.application'));
