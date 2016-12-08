import React, {Component} from 'react';
export default class CreateIdea extends Component{
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.props.sendIdea(this.state);
    this.setState({ title: '', body: '' });
  }


  render() {
    return (
      <div>
        <input
          type='text'
          className='CreateIdea-title'
          name= 'title'
          onChange={(e) => {
            this.updateProperties(e);
          }}
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
        <button className="CreateIdea-submit"
                onClick={ () => {
                  this.handleSubmit();
                }}
                >
        Submit
        </button>
      </div>
    );
  }
}
