import React from 'react';
import ReactDOM from 'react-dom';
import Cocktail from './Cocktail';

describe(`Cocktail Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Cocktail />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})