import React from 'react';
import RegistrationForm from './RegistrationForm'; // Ensure this path matches your actual file location
import './index.css'; // Ensure this path matches your CSS file

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header>
        <h1>Fresh Food For All</h1>
      </header>

      {/* Navigation */}
      <nav>
        <ul className="navlist">
          <li><a href="/Home">Home</a></li>
          <li><a href="/Register">Register</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Help">Help</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <aside>
          <input type="text" className="search" id="search" name="search" placeholder="Search" /><br />
        </aside>
        <section>
          {/* The RegistrationForm component renders the form */}
          <RegistrationForm />
        </section>
      </main>
    </div>
  );
}

export default App;
