import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantsListWithPagination from './RestaurantsListWithPagination'
describe("<RestaurantsListWithPagination />", () => {

  test("RestaurantsListWithPagination component renders correctly with texts", () => {

    render(<RestaurantsListWithPagination />);

    const h2Text = screen.getByText("Restaurants")
    const buttonAnterior = screen.getByText("Anterior")
    const buttonSiguiente = screen.getByText("Siguiente")

    expect(h2Text).toBeInTheDocument();
    expect(buttonAnterior).toBeInTheDocument();    
    expect(buttonSiguiente).toBeInTheDocument();
    
    fireEvent.click(buttonSiguiente)
    fireEvent.click(buttonAnterior)

  });
})