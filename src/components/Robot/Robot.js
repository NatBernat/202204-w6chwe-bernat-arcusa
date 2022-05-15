import RobotStyled from "./RobotStyled";

const Robot = ({ robot: { name, image, speed, resistance, creation } }) => {
  return (
    <RobotStyled className="robot">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <ul className="robot__stats">
        <li>Speed: {speed}</li>
        <li>Resistance: {resistance}</li>
        <li>Creation: {creation}</li>
      </ul>
    </RobotStyled>
  );
};

export default Robot;
