// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import openai from './openai.js';


import generateText from "../openai.js";
const prompt = "Write coverletter ";
const response = generateText;

return (
    <div>
      <h1 style={{ textAlign: "center" }}>Heading</h1>
      <p style={{ textAlign: "center" }}>instructions </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            placeholder="user1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            placeholder="password1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">Log in</button>
        <button type="button" className="btn btn-secondary" onClick={props.onSignupClick}>
          Sign up
        </button>
      </form>
    </div>
  );


export default coverLetter