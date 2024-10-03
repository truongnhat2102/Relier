import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import StartUpContextProvider from './service/StartUpContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StartUpContextProvider>
      <App />
    </StartUpContextProvider>
  </BrowserRouter>
)
