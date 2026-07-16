import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee, registerEmployee } from "../state/auth/authAction";

export let useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    dispatch(registerEmployee(data));
  };
  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data))
  };

  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate
  };
};
