import './App.css';
import Header from './MyComponents/Header/Header';
import Footer from './MyComponents/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import FAQ  from './MyComponents/FAQ/FAQ';
import SupportAdmin from './MyComponents/Chat/SupportAdmin';
import SupportEngine from './MyComponents/Chat/SupportEngine';
import {Route, Routes, useLocation} from "react-router-dom";
import Admin from './MyComponents/Dashboards/AdminDashboard/Admin';
import FAQDash from './MyComponents/Dashboards/AdminDashboard/FAQDash';
import ResultDash from './MyComponents/Dashboards/AdminDashboard/ResultDash';
import Signup from './MyComponents/Registration/Signup/Signup';
import Login from './MyComponents/Registration/Login/Login';
import Signout from './MyComponents/Registration/Signout';
import Home from './MyComponents/Pages/Home/Home';
import About from './MyComponents/Pages/About/About';
import NotFound from './MyComponents/Pages/NotFound';
import StudentDash from './MyComponents/Dashboards/ClientDashboard/StudentDash';
import Mainpg from './MyComponents/Dashboards/ClientDashboard/Mainpg';
import Result from './MyComponents/Dashboards/ClientDashboard/Result';
import StudentResult from './MyComponents/Dashboards/ClientDashboard/StudentResult';
import JobDash from './MyComponents/Dashboards/ClientDashboard/JobDash';
import {Navigate} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Previous from './MyComponents/Dashboards/ClientDashboard/Previous';
import UserDash from './MyComponents/Dashboards/ClientDashboard/UserDash';
import Personality from './MyComponents/Dashboards/ClientDashboard/Personality';
import Finance from './MyComponents/Dashboards/ClientDashboard/Finance';
import JobAcademicDash from './MyComponents/Dashboards/ClientDashboard/JobAcademicDash';
import JobQuesDash from './MyComponents/Dashboards/ClientDashboard/JobQuesDash';
import EditProfile from './MyComponents/Dashboards/ClientDashboard/EditProfile';

function App() {

  const [hasNavigated, setNavigated] = useState(false);
  const [navigationCount, setCount] = useState(0);

  let changeNavigation = () => {
    setNavigated(true);
  }

  let changeCount = () => {
    let count = navigationCount + 1;
    setCount(count);
  }

  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname === '/admindashboard' || localStorage.getItem('role') != 'admin' || loc.pathname === '/support' || loc.pathname === '/login' || loc.pathname === '/resultdashboard' || loc.pathname === '/faqdashboard') {
      changeNavigation();
    }
  }, [])



  return (
    <>
    {loc.pathname === '/admindashboard'? '' : <Header /> }
    
    <Routes>
      <Route exact path="/faq" element={<FAQ />}/>
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/signout" element={<Signout />}/>
      <Route exact path="/" element={<Home hasNavigated={hasNavigated} changeNavigation={changeNavigation} navigationCount={navigationCount} changeCount={changeCount} />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/support" element={<SupportAdmin />} />
      <Route exact path='/admindashboard' element={<Admin/>} />
      <Route exact path='/faqdashboard' element={<FAQDash/>} />
      <Route exact path='/resultdashboard' element={<ResultDash/>} />
      <Route exact path="/studentdashboard" element={<StudentDash/>} />
      <Route exact path="/user" element={<Mainpg/>} />
      <Route exact path="/studentmain" element={<UserDash />} />
      <Route exact path="/jobsearch" element={<JobDash/>} />
      <Route exact path="/result" element={<Result/>} />
      <Route exact path="/studentresult" element={<StudentResult/>} />
      <Route exact path='/previous-results' element={<Previous/>} />
      <Route exact path='/personality' element={<Personality />} />
      <Route exact path='/finance' element={<Finance />} />
      <Route exact path='/jobmain' element={<JobAcademicDash />} />
      <Route exact path='/jobques' element={<JobQuesDash />} />
      <Route exact path='/editProfile' element={<EditProfile />} />
      <Route exact path="*" element={<NotFound/>} />
    </Routes>
    <Footer />
    {loc.pathname === "/support"? '': <SupportEngine/>}
    </>
  );
}

export default App;
