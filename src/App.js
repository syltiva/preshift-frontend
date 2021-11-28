import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddMessageView from "./views/AddMessageView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/newpreshift" element={<AddMessageView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;