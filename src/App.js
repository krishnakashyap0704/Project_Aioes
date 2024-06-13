import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
