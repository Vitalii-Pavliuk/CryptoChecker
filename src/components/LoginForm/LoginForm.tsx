// import React from 'react'

export default function LoginForm() {
  return (
 <div>
      <h2>Login</h2>
      <form >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
