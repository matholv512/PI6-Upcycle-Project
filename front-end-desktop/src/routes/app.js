import React from "react";
import Routes from "./routes";
import Navbar from "../layout/navBar";
import { AuthProvider } from "../context/userContext"; // Substitua pelo caminho real

import '../bootstrap.css';

class App extends React.Component {
    render() {
      return (
        <AuthProvider>
          <>
            <Navbar />
            <div className="container">
              <Routes />
            </div>
          </>
        </AuthProvider>
      );
    }
}

export default App;