import './App.css'

import { Home, Map, Doctor, MentalHealth, FAQ, Contact, MoodBoost } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={ <Home/>} />
          <Route exact path="/map" element={<Map/>} />
          <Route exact path="/ai-doctor" element={<Doctor/>} />
          <Route exact path="/mental-health" element={<MentalHealth/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/faq" element={<FAQ/>} />
          <Route exact path="/mood-boost" element={<MoodBoost/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App