import React from "react";
import { Link, useNavigate } from "react-router-dom";

import InputRegister from "./components/InputRegister";
import { register } from "../../utils/network-data";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun</h2>
      <InputRegister register={onRegisterHandler} />
      <p>
        Sudah punya akun <Link to="/">Login di sini</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
