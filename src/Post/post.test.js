import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from './Post';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe(`Post Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Post />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    it(`onSubmit callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Post onClick={callback} />);
        wrapper.find('#submit-btn').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});