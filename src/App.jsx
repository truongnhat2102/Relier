import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import EventNews from './pages/EventNews';
import Home from './pages/Home';
import Investor from './pages/Investor';
import Login from './pages/Login';
import OurStartup from './pages/OurStartup';
import Service from './pages/Service';
import DetailsStartUp from './pages/DetailsStartUp';
function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-start-up' element={<OurStartup />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/events-news' element={<EventNews />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/start-up/:id' element={<DetailsStartUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
