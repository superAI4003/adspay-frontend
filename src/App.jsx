import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AccountLevel from './pages/AccountLevel.jsx';
import IssueNewCard from './pages/IssueNewCard.jsx';
import MyCards from './pages/MyCards.jsx';
import CardOverview from './pages/CardOverview.jsx';
import Profile from './pages/Profile.jsx';
import Affiliate from './pages/Affiliate.jsx';
import AddFunds from './pages/AddFunds.jsx';
import AnimatedPageWrapper from './components/animations/AnimatedPageWrapper.jsx';
function PrivateRoute({ path, element }) {
  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/auth/login" replace />
  );
}


function App() {
  
  return (
    <Router>
      <div className='font-poppins '>
      <AnimatedPageWrapper>
      <Routes>   
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/account-level" element={<AccountLevel/>}/>
        <Route path='/issue-new-card' element={<IssueNewCard/>}/>
        <Route path='/my-cards' element={<MyCards/>}/>
        <Route path='/card-overview' element={<CardOverview/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/add-funds" element={<AddFunds/>}/>
      </Routes>
</AnimatedPageWrapper>
     
      </div>
    </Router>
  )
}

export default App
