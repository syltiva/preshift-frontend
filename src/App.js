import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;