import React from 'react';
import ReactDOM from 'react-dom';
import OpenBrewery from './OpenBrewery';

describe(`OpenBrewery Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<OpenBrewery />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})