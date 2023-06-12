import { MainRouter } from './routes/main';
// import '@resources/css/custom.module.scss';


const App = () => {
  return (
    <>
      <MainRouter />
    </>
    // <Routes>
    //   {/* Root Route */}
    //   <Route element={<Redirector />} path='/' />
    //   {/* Unprotected routes */}
    //   <Route element={<Outlet />}>
    //     <Route element={<Login />} path='/login' />
    //     <Route element={<SignUp />} path='/signup/1' />
    //     <Route element={<SignUp />} path='/signup/2' />
    //     <Route element={<SignUpSuccess />} path='/signup/3' />
    //     <Route element={<ForgotPassword />} path='/forgotPassword' />
    //     <Route element={<NewPassword />} path='/newPassword/*' />
    //   </Route>
    //   {/* Protected Routes */}
    //   <Route element={<Layout />}>
    //     <Route element={<Home />} path='/home' />
    //     <Route element={<Usage />} path='/usage' />
    //     {/* <Route element={<SignUp />} path='/signup/1' />
    //   <Route element={<SignUpOTP />} path='/signup/2' />
    //   <Route element={<SignUpSuccess />} path='/signup/3' />
    //   <Route element={<ForgotPassword />} path='/forgotPassword' />
    //   <Route element={<NewPassword />} path='/newPassword/*' /> */}
    //   </Route>
    //   {/* 404 Route */}
    //   <Route element={<>Not found</>} path='*' />
    // </Routes>
  );
};

export default App;
