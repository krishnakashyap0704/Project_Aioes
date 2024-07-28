import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { Dashboard } from './Components/Dashboard';
import { Certificates } from './Components/Certificates';
import { AboutUs } from './Components/AboutUs';
import { ContactUs } from './Components/ContactUs';
import { Footer } from './Components/Footer';

function App() {
  return (
    <BrowserRouter basename='/allinoneengineeringsolution'>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/certificates' element={<Certificates/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
