import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('AppComponent', () => {
  it('should render correctly ', () => {
    const component = shallow(<App />);

    expect(component.find('h1')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});