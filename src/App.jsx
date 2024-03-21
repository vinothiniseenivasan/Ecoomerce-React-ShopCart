
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Button } from 'reactstrap';
import Home from './pages/Home/Home';
import MainRoutes from './routes/MainRoutes';

function App() {
  
  return (
    <div  className='app-wrapper'>
      {/* common header for all pages */}
    <Header 
        color="light" 
        light={true}  
        expand = "md"   
       container = "md"  />

   
        <MainRoutes />


           {/* common Footer for all pages */}

    <Footer />
    </div>
  )
}

export default App
