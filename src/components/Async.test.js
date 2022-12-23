import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async Component", () => {
  // test("renders posts if request succeeds", async () => {
  //   render(<Async />);

  //   //throws error since list items came after a rerender
  //   // const listItemEls = screen.getAllByRole("listitem");

  //   // below is a workaround for handling async requests in the component but should not be done. What we should do is mocking.
  //   // default exact: true and timeout 1000 ms
  //   const listItemEls = await screen.findAllByRole("listitem");
  //   // const listItemEls = await screen.findAllByRole(
  //   //   "listitem",
  //   //   {
  //   //     // exact: true
  //   //   },
  //   //   {
  //   //     timeout: "1000",
  //   //   }
  //   // );

  //   expect(listItemEls).not.toHaveLength(0);
  // });

  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first Post" }],
    });
    render(<Async />);

    const listItemEls = await screen.findAllByRole("listitem");
    expect(listItemEls).not.toHaveLength(0);
  });
});
