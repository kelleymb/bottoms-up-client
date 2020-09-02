import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

describe(`Nav Component`, () => {
    it(`renders without errors`, () => {
        const ul = document.createElement('ul');
        ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, ul);
        ReactDOM.unmountComponentAtNode(ul);
    })
})