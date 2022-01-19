import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFount from "./components/NotFount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/all" element={<AllUser />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="*" element={<NotFount />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
