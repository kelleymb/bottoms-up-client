import React from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';

describe(`Collection Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Collection />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})