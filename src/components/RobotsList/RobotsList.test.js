import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should match this snapshot", () => {
      const robots = [
        {
          _id: "627e93e63ccb21d8cae171b2",
          name: "Terminator",
          image: "https://m.media-amazon.com/images/I/51hm4aPEGGL._SY445_.jpg",
          speed: 2,
          resistance: 8,
          creation: 1984,
        },
        {
          _id: "627e96883ccb21d8cae171b3",
          name: "Optimus Prime",
          image:
            "https://pm1.narvii.com/7617/0e3da39327724c32a5639bae88d64ad9c60dfecer1-752-1131v2_hq.jpg",
          speed: "5",
          resistance: "7",
          creation: "1973",
        },
      ];

      const renderedList = TestRenderer.create(
        <Provider store={store}>
          <RobotsList robots={robots} />
        </Provider>
      );

      expect(renderedList).toMatchSnapshot();
    });
  });
});
