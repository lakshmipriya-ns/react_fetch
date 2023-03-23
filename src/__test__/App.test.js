import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';
import '@testing-library/jest-dom'

describe('Home Test', () => {

  test('Home Page', ()=>{
   const welcome=render(<Home/>);
   expect(welcome).toBeTruthy();
  })


  test('header renders with welcome to home page', () => {
    render(<Home />);
    const linkElement = screen.getByText(/welcome to home page/i);
    expect(linkElement).toBeInTheDocument();
  });

  
})


