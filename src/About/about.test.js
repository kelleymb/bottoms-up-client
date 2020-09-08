import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe(`About Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<BrowserRouter><About /></BrowserRouter>, section);
        ReactDOM.unmountComponentAtNode(section);
    });
});