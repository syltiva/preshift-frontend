import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddMessageView from "./views/AddMessageView";
import EditMessageView from "./views/EditMessageView";
import SignupView from "./views/SignUpView"
import LoginView from "./views/LoginView";
import AdminRoute from "./components/AdminRoute";
import AuthRoute from "./components/AuthRoute";
import { isAuthenticated } from './services/authService'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/signup" element={<SignupView/>} />
          <Route path="/login" element={<LoginView/>} />

          <Route element={<AdminRoute/>}>
            <Route path="/newpreshift" element={<AddMessageView />} />
            <Route path="/editpreshift/:id" element={<EditMessageView />} />
          </Route>
          
          <Route element={<AuthRoute/>}>
            <Route path="/" element={<HomeView />} />
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;