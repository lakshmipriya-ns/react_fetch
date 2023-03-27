import { render, screen,  } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';
import App from '../App';
import '@testing-library/jest-dom'

describe('Home Test', () => {
// Testing the Home component is rensering
  test('Home Page', ()=>{
   const homeComponent=render(<Home/>);
   expect(homeComponent).toBeTruthy();
  });

//Testing the text is rendering in Home component 
  test('header renders with welcome to home page', () => {
    render(<Home />);
    const linkElement = screen.getByText(/welcome to home page/i);
    expect(linkElement).toBeInTheDocument();
  });


  //Testing the App component is rendering
  test('App Component', ()=>{
    const appComponent=render(<App/>);
    expect(appComponent).toBeTruthy();
  });
})


