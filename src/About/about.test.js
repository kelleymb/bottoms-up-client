import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

describe(`About Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<About />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
});