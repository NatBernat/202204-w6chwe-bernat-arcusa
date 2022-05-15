import styled from "styled-components";

const RobotStyled = styled.li`
  width: 250px;
  height: 500px;
  text-align: center;
  color: white;
  list-style: none;
  padding: 20px;
  background-color: darkslateblue;
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 black;
  h3 {
    margin: 0 0 10px 0;
    size: 1.2em;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .robot__stats {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }
`;
export default RobotStyled;
