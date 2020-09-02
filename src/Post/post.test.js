import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

describe(`Post Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Post />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})