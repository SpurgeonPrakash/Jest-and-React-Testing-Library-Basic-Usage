import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

// describe("<Greeting />", () => {
describe("Greeting Component", () => {
  test("renders hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act (Like Simulating Click EVENT or So)
    // For now We dont have any

    // Assert
    const helloWorldEl = screen.getByText("Hello World", { exact: true });
    expect(helloWorldEl).toBeInTheDocument();

    // We have three kinds of functions available on screen;
    // 1. getBy...() ---> throws An error when element is not found
    // 2. queryBy...() ---> do not throws an error when element is not found
    // 3. findBy...() ---> these will return a promise

    const helloEl = screen.queryByText("Hello Not In World", { exact: true });
    expect(helloEl).not.toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const goodToSeeYouEl = screen.getByText("It's good to see you!");
    expect(goodToSeeYouEl).toBeInTheDocument();
  });

  test("renders its changed if the button was clicked", () => {
    render(<Greeting />);
    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);
    const changedEl = screen.getByText("Its Changed!");
    expect(changedEl).toBeInTheDocument();
  });

  test("don't renders good to see you if the button was clicked", () => {
    render(<Greeting />);
    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);
    const goodToSeeYouEl = screen.queryByText("It's good to see you!");
    // expect(goodToSeeYouEl).not.toBeInTheDocument();
    expect(goodToSeeYouEl).toBeNull();
  });
});
