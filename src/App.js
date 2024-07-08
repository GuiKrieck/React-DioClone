import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
