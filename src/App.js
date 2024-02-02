import NoteContext from "./Components/NoteContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import InsideContact from './Components/InsideContact';
import InsideSecContact from './Components/InsideSecContact';

function App() {
  return (
    <NoteContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="contact" element={<Contact />}>
            <Route path="insidecontact" element={<InsideContact />}/>
            <Route path="insidecontact2" element={<InsideSecContact />}/>
          </Route>
        </Routes>
      </Router>
    </NoteContext>
  );
}

export default App;
