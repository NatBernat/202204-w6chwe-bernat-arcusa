import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 4 listitems'", () => {
      const robotExample = {
        _id: "627e93e63ccb21d8cae171b2",
        name: "Terminator",
        speed: 2,
        resistance: 8,
        creation: 1984,
      };
      const listitemsNumber = 4;

      render(<Robot robot={robotExample} />);
      const listedItems = screen.getAllByRole("listitem");

      expect(listedItems).toHaveLength(listitemsNumber);
    });
  });
});
