import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './Pages/Auth/Register.jsx';
import Login from './Pages/Auth/Login.jsx';
import Home from './Pages/home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Verify from './Pages/Auth/Verify.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './Pages/About/About.jsx';
import Account from './Pages/Account/Account.jsx';
import { UserData } from './Context/UserContext.jsx';
import Loading from './components/Loading/Loading.jsx';
import Courses from './Pages/courses/Courses.jsx';
import CourseDescription from './Pages/coursedescription/CourseDescription.jsx';
import PaymentSuccess from './Pages/paymentsuccess/PaymentSuccess.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import CourseStudy from './Pages/coursestudy/CourseStudy.jsx';
import Lecture from './Pages/lecture/Lecture.jsx';
import AdminDashboard from './admin/Dashboard/AdminDashboard.jsx';
import AdminCourses from './admin/Courses/AdminCourses.jsx';
import AdminUsers from './admin/Users/AdminUsers.jsx';



function App() {

const { isAuth, user, loading } = UserData();

  return (
    <div >
  {loading ? (
    <Loading/>
  )
  :(<BrowserRouter >
  <Header isAuth={isAuth} />
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/account' element={isAuth ?<Account user={user} />:<Login/>}/>
  <Route path='/login' element={isAuth ? <Home/> : <Login/>}/>
  <Route path='/register' element={isAuth ? <Home/> : <Register/>}/>
  <Route path='/verify' element={isAuth ? <Home/> : <Verify/>}/>
  <Route path="/course/:id" element={isAuth ? <CourseDescription user={user} /> : <Login />} />
  <Route path='/payment-success/:id' element={isAuth ? <PaymentSuccess user={user}/>: <Login/>}></Route>
  <Route path='/:id/dashboard' element={isAuth ? <Dashboard user={user}/>: <Login/>}></Route>
  <Route path='/course/study/:id' element={isAuth ? <CourseStudy user={user}/>: <Login/>}></Route>
  <Route path='/lectures/:id' element={isAuth ? <Lecture user={user}/>: <Login/>}></Route>
  <Route path='/admin/dashboard' element={isAuth ? <AdminDashboard user={user}/>: <Login/>}></Route>
  <Route path='/admin/course' element={isAuth ? <AdminCourses user={user}/>: <Login/>}></Route>
  <Route path='/admin/users' element={isAuth ? <AdminUsers user={user}/>: <Login/>}></Route>

  </Routes>
  <Footer/>
  </BrowserRouter>)}
  </div>
  );
};

export default App;
