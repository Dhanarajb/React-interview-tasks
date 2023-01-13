import React, { useState } from 'react';

export default function SignIN() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleForm = (e) => {
    setLoggedIn(true);
  };
  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  return (
    <div style={{ display: 'flex', 'justify-content': 'center' }}>
      <section
        style={{
          'background-color': 'skyblue',
          width: '150px',
          padding: '20px',
        }}
      >
        {!loggedIn ? (
          <div>
            <form action="" onSubmit={handleForm}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="username">Password</label>
              <input
                type="password"
                className="password"
                placeholder="password"
                vale={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <button>Sign in</button>
            </form>
          </div>
        ) : (
          <div>
            <h1>Welcome-{username}</h1>{' '}
            <button onClick={handleSignOut}>Signout</button>{' '}
          </div>
        )}
      </section>
    </div>
  );
}
