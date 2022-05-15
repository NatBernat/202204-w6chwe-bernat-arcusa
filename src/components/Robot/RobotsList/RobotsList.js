import Robot from "../Robot";

const RobotsList = ({ robots }) =>
  robots.map((robot) => {
    return <Robot robot={robot} key={robot._id} />;
  });

export default RobotsList;
