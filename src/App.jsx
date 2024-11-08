import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Mailer from './Mailer';
import Profile from './Profile';



const App = () => {

  return (
  
    <Router>
      <Routes>

     {/* <Route path={`/`} element={<Home />} /> */}
     <Route path={`/dashboard`} element={<Dashboard />} />
     <Route path={`/`} element={<Login />} />
     <Route path={`/afrimailer`} element={<Mailer />} />
     <Route path={`/profile`} element={<Profile />} />

        {/* <Route path={`/loader`} element={<Loader />} />
        <Route path={`/page-title`} element={<PageTitle />} />
        <Route path={`/sign-in`} element={<SignIn />} />
        <Route path={`/sign-up`} element={<SignUp />} />
        <Route path={`/calendar`} element={<Calendar />} />
        <Route path={`/chart`} element={<Chart />} /> */}

        {/* <Route path={`/about-us`} element={<About />} />
        <Route path={`/faqs`} element={<Faqs />} />
        <Route path={`/contact-us`} element={<Contact />} />
        <Route path={`/terms-of-use`} element={<TermsOfUse />} />
        <Route path={`/privacy-policy`} element={<PrivacyPolicy />} /> */}

      </Routes>
    </Router>

  );
};

export default App;