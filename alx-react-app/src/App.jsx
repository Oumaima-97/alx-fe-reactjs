/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // Task 1
import Header from './components/Header'; // Task 2
import MainContent from './components/MainContent'; // Task 2
import Footer from './components/Footer'; // Task 2

function App() {
  return (
    <div>
      <WelcomeMessage />  {/* From Task 1 */}
      <Header />          {/* From Task 2 */}
      <MainContent />     {/* From Task 2 */}
      <Footer />          {/* From Task 2 */}
    </div>
  );
}

export default App;


