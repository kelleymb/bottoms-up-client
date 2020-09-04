import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OpenBrewery from './OpenBrewery';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe(`OpenBrewery Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<OpenBrewery />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    it(`onSubmit callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<OpenBrewery onClick={callback} />);
        wrapper.find('#submit-bttn').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});