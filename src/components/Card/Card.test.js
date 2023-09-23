import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {

  test("Card component renders with correct props", () => {
    const props = {
      allCategories: "Empanadas,Pizzas,Tartas,Pastas",
      deliveryTime: "Entre 30' y 45'",
      discount: 0,
      logo: "https://source.unsplash.com/random/?food,restaurant",
      name: "Pizzería Squzi",
      opened: true,
      ratingScore: 4.42,
      shippingAmount: 89
    };
  
    render(<Card {...props} />);
  
    expect(screen.getByText(/89/i)).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toHaveAttribute(
      "src",
      props.logo
    );
    expect(screen.getByText(/Entre 30' y 45'/i)).toBeInTheDocument();
    expect(screen.getByText("Pizzería Squzi")).toBeInTheDocument();
  });
})