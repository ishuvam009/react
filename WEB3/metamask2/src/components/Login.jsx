import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Handle successful login, e.g., store the token, redirect, etc.
        console.log('Login successful:', response.data);
        // Redirect or update the UI accordingly
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your username and password.');
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className="pt-10">
        <div className="mx-auto max-w-sm rounded-sm shadow-xl bg-white">
          <p className="font-bold text-2xl text-center">Login</p>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Username
              </label>
              <input
                className="shadow-xl appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Password
              </label>
              <input
                className="shadow-xl appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**************"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
