import { Route, Routes } from 'react-router-dom';
// pages imports
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import LoginPage from './pages/auth/login/LoginPage';
import NotificationPage from './pages/notification/NotificationPage';
import ProfilePage from './pages/profile/ProfilePage';
// components imports
import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel';

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* Common component we dont need to wrap it inside Routes */}
      <Sidebar /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/notifications' element={<NotificationPage/>} />
        <Route path='/profile/:username' element={<ProfilePage/>} />
      </Routes>
      {/* Common component we dont need to wrap it inside Routes */}
      <RightPanel />
    </div>
  );
}

export default App;
