import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyled>
      {robots.map((robot) => {
        return <Robot robot={robot} key={robot._id} />;
      })}
    </RobotsListStyled>
  );
};

export default RobotsList;
