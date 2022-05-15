import styled from "styled-components";

const RobotStyled = styled.li`
  width: 250px;
  height: 450px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  list-style: none;
  padding: 20px;
  background-color: darkslateblue;
  box-shadow: 0 5px 10px 0 black;
  h3 {
    margin: 0 0 15px 0;
    size: 1.2em;
  }
  img {
    width: 210px;
    height: 300px;
    object-fit: cover;
  }
  .robot__stats {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }
`;
export default RobotStyled;
