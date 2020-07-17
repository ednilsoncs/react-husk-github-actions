import React from 'react';
import Home from './index'
import { render } from '@testing-library/react';

describe('@Screen/Home',()=>{
  it('should render one item content label Hello Ednilson',()=>{
    const { getByText } = render(
        <Home/>
    );

    expect (
       getByText('Hello Ednilson')
    ).toBeTruthy()
  })
})