import React from 'react';
import { css, keyframes } from '@emotion/core'
import logo from './logo.svg';


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

function App() {
  return (
    <div css={
      css`
      text-align: center;
      header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
      header img {
        height: 40vmin;
        pointer-events: none;
        animation: ${spin} infinite 20s linear;
      }
      header div a {
        color: #d36ec2;
        margin: 5px;
      }
    `}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Starter Create-React-App with Emotion.
          <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
        </a>
          <a
            href="https://emotion.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emotion
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
