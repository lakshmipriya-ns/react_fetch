import { render, screen } from "@testing-library/react"
import Home from "./components/Home"

test('Check home component renders', () => {
    render(<Home />);
    const linkElement = screen.getByText('Welcome to Home page');
    expect(linkElement).toBeInTheDocument();
})