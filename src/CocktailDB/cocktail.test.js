import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cocktail from './Cocktail';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe(`Cocktail Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Cocktail />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    it(`onSubmit callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Cocktail onClick={callback} />);
        wrapper.find('#random').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});