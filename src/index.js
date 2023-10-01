import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <Suspense  fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
  
    </Provider>
    
  </React.StrictMode>
);
