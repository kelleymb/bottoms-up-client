import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

describe(`Home Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Home />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})