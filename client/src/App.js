import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Contact } from "./pages/Contact";
import { AboutPage } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
