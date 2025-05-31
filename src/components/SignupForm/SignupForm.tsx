import React from 'react'

export default function SignupForm() {
  return (
<div >
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
          />
        </div>

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

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
