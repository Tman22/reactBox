import React from 'react';
import Idea from '../lib/Idea';
import IdeasList from '../lib/IdeasList'
import CreateIdea from '../lib/CreateIdea'
import Main from '../lib/Main'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai';

describe('<Main/>', () => {
  it('should have a prop of title', () => {
    // we are going to need a title
    const title = 'test title';
    // we then need to pass that title to the Main as a prop
    const wrapper = shallow(<Main title={title}/>);
    // we need to assert that the dom contains the title
    expect(wrapper.contains(title)).to.equal(true);
  });
});
