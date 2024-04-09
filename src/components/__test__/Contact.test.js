import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";

test("sholud load Contact us component", () => {
  render(<Contactus />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("sholud load button inside Contact us component", () => {
  render(<Contactus />);
  //   const button = screen.getByRole("button");
  // or
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("sholud load input name inside Contact us component", () => {
  render(<Contactus />);

  const input = screen.getByPlaceholderText("Name");
  expect(input).toBeInTheDocument();
});
test("sholud load 2 input boxes on Contact us component", () => {
  render(<Contactus />);

  const inputbox = screen.getAllByRole("textbox");
  console.log(inputbox);
  //   expect(inputbox).toBeInTheDocument();
});
