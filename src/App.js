import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./common-component/footer/Footer";
import Navbar from "./common-component/nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
