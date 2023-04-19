import { getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import Home from "../components/Home";
import App from "../App";
import '@testing-library/jest-dom';
import { toHaveStyle } from '@testing-library/jest-dom/dist/to-have-style';
expect.extend({toHaveStyle})


describe("Home Test", () => {
  // Testing the Home component is rensering
  test("Home Page", () => {
    const homeComponent = render(<Home />);
    expect(homeComponent).toBeTruthy();
  });

  //Testing the text is rendering in Home component
  test("header renders with welcome to home page", () => {
    render(<Home />);
    const linkElement = screen.getByText(/welcome to home page/i);
    expect(linkElement).toBeInTheDocument();
  });

  //Testing the App component is rendering
  test("App Component", () => {
    const appComponent = render(<App />);
    expect(appComponent).toBeTruthy();
  });

  //Testing the props value in app component
  test("Props passing In app component", () => {
    const component = render(
      <App 
        id='1' 
        name='abc' 
        username='xyz' 
        email='abc@gmail.com'
       />
    );
    expect(component).toBeTruthy();
  });

  //Testing html container in App component
  test('Container Navbar', () => {
     render(<App />);
    expect(screen.getByTestId('containerNav')).toBeInTheDocument();
  })


  //Testing Navbar backgroung color in App component
  test('Test Navbar color', () => {
    render(<App/>);
    expect(screen.getByTestId('navbar')).toHaveStyle('background-color: rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))');

  })
});
