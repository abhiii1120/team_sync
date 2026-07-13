import { useForm } from "react-hook-form";

export let useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data)
  }
  const onLoginSubmit = (data) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit
  }
};
