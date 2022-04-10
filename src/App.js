import Nav from './Components/Nav/Nav.js'
import About from './Components/About /About.js'
import Projects from './Components/Projects/Projects.js'
import Resume from './Components/Resume/Resume.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'



function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Routes>
          <Route path='/' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
