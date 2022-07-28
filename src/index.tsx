import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { NotFound } from './components/NotFound';
import { FirebaseSetup } from './components/FirebaseSetup';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Classes } from './components/Classes';
import { Resume } from './components/Resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <FirebaseSetup>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </FirebaseSetup>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);