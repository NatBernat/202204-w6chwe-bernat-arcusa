import RobotsList from "./components/RobotsList/RobotsList";

const robotsList = [
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

function App() {
  return (
    <div className="App">
      <h1>Robotitus</h1>
      <RobotsList robots={robotsList} />
    </div>
  );
}

export default App;
