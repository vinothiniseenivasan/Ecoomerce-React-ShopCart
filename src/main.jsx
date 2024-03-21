
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';



// custom components
import App from './App.jsx'

// css imports
// for css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //  document.getElementById('root')
)
