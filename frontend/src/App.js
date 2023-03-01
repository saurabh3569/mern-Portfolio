import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Project';
import About from './pages/About';
import Header from './components/Header';
import AddProject from './pages/Admin/AddProject';
import UpdateAboutMe from './pages/Admin/UpdateAboutMe';
import Login from './pages/Admin/Login';
import Messages from './pages/Admin/Messages';


function App() {

  const token = localStorage.getItem("token")

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/addproject' element={!token ? <Navigate to='/' /> : <AddProject />} />
        <Route path='/editproject/:id' element={!token ? <Navigate to='/' /> : <AddProject />} />
        <Route path='/allproject' element={!token ? <Navigate to='/' /> : <Projects />} />
        <Route path='/update/aboutme' element={!token ? <Navigate to='/' /> : <UpdateAboutMe />} />
        <Route path='/messages' element={!token ? <Navigate to='/' /> : <Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
