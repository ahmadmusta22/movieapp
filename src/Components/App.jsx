import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';

import Movies from './Movies';
import Register from './Register';
import Notfound from '../Notfound';
import Navbar from './Navbar';
import Login from './Signin';
import Showdetails from './Showdetails';
import Favorites from './Favorites';
import Footer from './Footer';
import { LanguageProvider } from '../Contexts/LanguageContext';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import store from '../Redux/store';

function App() {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <div className="dark-mode">
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/register" element={<Register />} />
              <Route path="/show/:id" element={<Showdetails />} />
              <Route path="*" element={<Notfound />} />
            </Routes>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"  
            />
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    </LanguageProvider>
  );
}

export default App;





