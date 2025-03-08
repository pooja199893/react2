import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import CounterContextProvider from './context/CounterContext';
import store from './redux/store.jsx';
import { Provider } from 'react-redux';
import ThemeContextProvider from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <CounterContextProvider>
          <Provider store={store}>
             <ThemeContextProvider>
                <App />
              </ThemeContextProvider>
          </Provider>
        </CounterContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
