import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter.js';

describe('<Counter/>', () => {
  
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('section').exists()).toBeTruthy();
  });

  it('changes state on click', () => {
    let app = mount(<Counter />);
    let upClick = app.find('.up');
    upClick.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
