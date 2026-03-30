import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking heading", () => {
  render(<App />);
  const heading = screen.getByText(/Little Lemon Table Booking/i);
  expect(heading).toBeInTheDocument();
});