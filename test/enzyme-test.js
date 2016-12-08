import { expect } from 'chai';
import React from 'react';
import Idea from '../lib/Idea'
import IdeasList from '../lib/IdeasList'
import Main from '../lib/Main'
import CreateIdea from '../lib/CreateIdea'
import { shallow, mount, render } from 'enzyme'

describe('<Main/>', () => {
  it('should have a prop of title', () => {
    const title = 'test title';
    const wrapper = shallow(<Main title={title}/>);
    expect(wrapper.contains(title)).to.equal(true);
  });

  it('should have IdeasList Components and Idea Component', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('CreateIdea')).to.have.length(1);
    expect(wrapper.find('IdeasList')).to.have.length(1);
  });

  it('should change state if I add ideas to the dom', () => {
    const wrapper = mount(<Main/>);
    const title = wrapper.find('.CreateIdea-title');
    title.simulate('change', title.node.value = 'testing title');

    const body = wrapper.find('.CreateIdea-body');
    body.simulate('change', body.node.value = 'testing body');
    wrapper.find('.CreateIdea-submit').simulate('click');

    expect(wrapper.state().ideas.length).to.equal(1);
    expect(wrapper.state().ideas[0].title).to.equal('testing title');
    expect(wrapper.state().ideas[0].title).to.equal('testing title');
  })

  it('should allow me to delete an idea', () => {
    const wrapper = mount(<Main/>);

    const title = wrapper.find('.CreateIdea-title');
    title.simulate('change', title.node.value = 'testing title');

    const body = wrapper.find('.CreateIdea-body');
    body.simulate('change', body.node.value = 'testing body');

    wrapper.find('.CreateIdea-submit').simulate('click');

    expect(wrapper.state().ideas.length).to.equal(1);
    expect(wrapper.state().ideas[0].title).to.equal('testing title');
    expect(wrapper.state().ideas[0].title).to.equal('testing title');

    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state().ideas.length).to.equal(0);
  });
});

describe('<IdeasList/> && <Idea/>', () => {
  it('should take an array of ideas', () => {
    const ideas = [{ id:1, title: 'title', body: 'body'}, { id:2, title: 'title2', body: 'body2' }];
    const wrapper = shallow(<IdeasList ideas = {ideas}/>);
    let { id, body, title } = wrapper.find('Idea').get(0).props;

    expect(wrapper.find('ul').children().length).to.equal(2);
    expect(wrapper.find('Idea').get(0).props.id).to.equal(id);
    expect(wrapper.find('Idea').get(0).props.body).to.equal(body);
    expect(wrapper.find('Idea').get(0).props.title).to.equal(title);

    id = wrapper.find('Idea').get(1).props.id;
    title = wrapper.find('Idea').get(1).props.title;
    body = wrapper.find('Idea').get(1).props.body;

    expect(wrapper.find('Idea').get(1).props.id).to.equal(id);
    expect(wrapper.find('Idea').get(1).props.body).to.equal(body);
    expect(wrapper.find('Idea').get(1).props.title).to.equal(title);
  });
});
