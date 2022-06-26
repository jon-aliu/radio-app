import './App.css';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import Navbar from './components/subcomponents/Navbar'
import Footer from './components/subcomponents/Footer'
import Main from './components/pages/Main'
import Radio from './components/pages/Radio';
import Music from './components/pages/Music';
import News from './components/pages/News';
import Sport from './components/pages/Sport';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Listen from './components/pages/Listen';
import Profile from './components/pages/Profile';

import { AuthContextProvider } from "./context/AuthContext";
import {ProtectedRoute} from "./context/ProtectedRoute"

function App() {
  return (
    <AuthContextProvider>
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path={`/`} element={<Main/>}/>
          <Route path={`/radio/:stationuuid`} element={<Radio/>}/>
          <Route path={`/music`} element={<Music/>}/>
          <Route path={`/news`} element={<News/>}/>
          <Route path={`/sport`} element={<Sport/>}/>
          <Route path={`/login`} element={<SignIn/>}/>
          <Route path={`/categories`} element={<Listen/>}/>
          <Route path={`/register`} element={<Register/>}/>
          <Route path={`/profile`} element={(
            <ProtectedRoute>
                  <Profile/>
            </ProtectedRoute>
          )}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </AuthContextProvider>
  );
}

export default App;
