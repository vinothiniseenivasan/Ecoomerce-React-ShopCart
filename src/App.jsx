
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Button } from 'reactstrap';

function App() {
  
  return (
    <div  className='app-wrapper'>
    <Header color="light" light={true}  expand = "md"   container = "md"  />

    <div style={{marginTop : '100px' }}>
      Some Content
    </div>

    <Footer />
    </div>
  )
}

export default App
