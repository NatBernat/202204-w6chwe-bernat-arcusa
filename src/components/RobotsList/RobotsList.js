import Robot from "../Robot/Robot";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = ({ robots }) => {
  return (
    <RobotsListStyled>
      {robots.map((robot) => {
        return <Robot robot={robot} key={robot._id} />;
      })}
    </RobotsListStyled>
  );
};

export default RobotsList;
