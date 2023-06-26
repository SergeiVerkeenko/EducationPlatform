import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/auth' element={<AuthPage />} />

      <Route path='/reg' element={<RegistrationPage />} />

    </Routes>
  );
}

export default App;
