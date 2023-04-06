import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import {Home} from "./pages/Home";
import {Auth} from "./pages/Auth"
import {Creat} from "./pages/Creat"
import {Saved} from "./pages/Saved"
import {Navbar} from "./components/navbar"

function App() {
  return (
    <div className="App">
     <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/Auth" element={<Auth/>}/>
        <Route path ="/Create" element={<Creat/>} />
        <Route path = "/Saved" element ={<Saved/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
