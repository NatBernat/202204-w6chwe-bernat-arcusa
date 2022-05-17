import RobotsList from "./components/RobotsList/RobotsList";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadRobotsThunk());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <h1>FS Robots</h1>
      <LoginForm />
      <RobotsList />
    </div>
  );
};

export default App;
