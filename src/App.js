import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
