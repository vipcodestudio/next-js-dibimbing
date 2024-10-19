import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const url = 'https://api-bootcamp.do.dibimbing.id/api/v1/login';
    const config = {
      headers: {
        'Content-Type': 'application/json',
        apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
      },
    };

    axios
      .post(url, payload, config)
      .then((res) => {
        setCookie('token', res.data.token);
        alert('Login success');
        router.push('/dashboard');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center justify-center w-screen h-screen gap-4"
    >
      <h1>Login</h1>
      <label htmlFor="email">
        Email
        <input id="email" type="text" name="email" className="ml-2 border-2" />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          className="ml-2 border-2"
        />
      </label>
      <button type="submit" className="px-2 py-1 text-white bg-blue-500">
        Login
      </button>
    </form>
  );
};

export default Login;
