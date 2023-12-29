import React, { useState } from "react";
import "./Login.scss";

const logins = [
  {
    id: "1",
    username: "user1",
    password: "pass1",
    email: "william.henry.harrison@example-pet-store.com",
  },
];

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = (event) => {
    event.preventDefault();

    // Проверяем, что все поля заполнены
    if (!name || !password || !email) {
      setMessage("Пожалуйста, заполните все поля");
      return;
    }

    // Проверяем, что пользователь с таким именем не зарегистрирован
    const userExists = logins.some((login) => login.username === name);
    if (userExists) {
      setMessage("Это имя пользователя уже занято");
      return;
    }

    // Создаем нового пользователя
    const newUser = {
      id: Date.now().toString(),
      username: name,
      password: password,
      email: email,
    };

    // Добавляем нового пользователя в массив
    logins.push(newUser);

    // Выводим сообщение об успешной регистрации
    setMessage("Регистрация успешна");
  };

  return (
    <form class="register-form" onSubmit={registerUser}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Электронная почта"
        autoComplete="email"
      />

      <button type="submit">Создать аккаунт</button>
      {message && <p class="message">{message}</p>}
      <button style={{ marginTop: '30px' }} type="submit">Войти</button>
    </form>
  );
};

// Добавьте здесь компонент LoginForm для входа пользователя

const Login = () => {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
