import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Vietoje useHistory naudojame useNavigate

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        if (!response.ok) {
          throw new Error('Neteisingas vartotojo vardas arba slaptažodis');
        }
        console.log('Vartotojas prisijungė sėkmingai');
        setUsername('');
        setPassword('');
  
        // Naudodami useNavigate nukreipiame vartotoją į kitą puslapį
        navigate('/introduction'); 
      } catch (error) {
        setError(error.message); // Nustatomas klaidos pranešimas
      }
  };

  return (
    <div>
      <h1>Sveiki atvykę į mūsų svetainę!</h1>
      <h2>Prisijungimas</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Klaidos pranešimo rodymas */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Vartotojo vardas:
            <input type="text" name="username" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Slaptažodis:
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <div>
          <input type="submit" value="Prisijungti" />
        </div>
      </form>
      <p>Jeigu neturite paskyros, galite <Link to="/register">registruotis čia</Link>.</p>
    </div>
  );
};

export default LoginPage;



