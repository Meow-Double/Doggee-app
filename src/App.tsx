import { ReactNode } from 'react';

// import viteLogo from '../../../../vite.svg';

import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Registration, LoginPage, NotFoundPage } from 'pages';

const AuthRoutes = (): ReactNode => (
  <Routes>
    <Route path="/auth" element={<LoginPage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/*" element={<Navigate to="/auth" />} />
  </Routes>
);

const MainRoutes = (): ReactNode => (
  <Routes>
    <Route path="/" element={<NotFoundPage />} />
  </Routes>
);
const App = (): ReactNode => {
  const isAuth = false;

  return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default App;
