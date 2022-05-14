import { render } from "@testing-library/react";

const Robot = ({ robot: { name, image, speed, resistance, creation } }) => {
  render(
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <ul className="robot__stats">
        <li>Speed: {speed}</li>
        <li>Resistance: {resistance}</li>
        <li>Creation: {creation}</li>
      </ul>
    </>
  );
};

export default Robot;
