import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';
import { it } from 'node:test';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<MyComponent />);
  });
  it("should render initial layout", () => { 
    //when
    const component = shallow(<MyComponent />);
    //then
    expect(component.getElements()).toMatchSnapshot();
  });
});
