import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.css";
import Canvas from "./components/canvas";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Canvas />
      </div>
      <Footer />
    </>
  );
}

export default App;
