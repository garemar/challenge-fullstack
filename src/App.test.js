import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("Tests for App", () => {
    test('renders Todos los Restaurantes text', () => {
        render(<App />);
        const linkElement = screen.getByText("Todos los Restaurantes");
        expect(linkElement).toBeInTheDocument();
      });
})

