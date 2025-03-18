import { useEffect, useState } from 'react';

const useAuth = () => {
  const [username, setUsername] = useState<string | null>(null);

  const login = (username: string) => {
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setUsername(null);
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  };

  const isAuth = () => username;

  const getUsername = () => username || localStorage.getItem('username');

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return { username, userId, login, logout, isAuth, getUsername };
};

export default useAuth;
