import { render, screen } from "@testing-library/react";
import CardItem from "../components/CardItem";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom';

describe("Card Component test", () => {
  test("CardComponent", () => {
    const cardElement = render(<CardItem />);
    expect(cardElement).toBeTruthy;
  });
  test("props value display", () => {
    const userData = render(
      <CardItem 
        id="2" 
        name="abc" 
        username="Leanne Graham" 
        email="abc@gmail.com" />
    );
    expect(userData).toBeTruthy();
    const nameelement = screen.getByText(/Leanne Graham/g);
    expect(nameelement).toBeInTheDocument();
  });

  test('testing image', ()=>{
    render(<CardItem/>);
    expect(screen.getByTestId('image')).toHaveAttribute('src', 'https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
  });
});
