// App.js
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Contest from './Pages/Contest';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import PageNotfound from './Pages/PageNotfound';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<PageNotfound />} />
        {/* private routes */}
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="/category" element={<PrivateRoute element={Category} />} />
        <Route path="/contest" element={<PrivateRoute element={Contest} />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
