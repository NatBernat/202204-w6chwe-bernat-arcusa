import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/usersThunks/usersThunks";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emptyFields = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(emptyFields);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const resetForm = () => setFormData(emptyFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    resetForm();
  };

  return (
    <LoginFormStyled autoComplete="off" noValidate onSubmit={submitLogin}>
      <label htmlFor="username" />
      <input
        id="username"
        value={formData.username}
        onChange={changeData}
        placeholder="Username"
      />
      <label htmlFor="password" />
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
        placeholder="Password"
      />
      <button disabled={buttonDisabled} type="submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
