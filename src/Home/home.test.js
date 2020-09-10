import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe(`Home Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})