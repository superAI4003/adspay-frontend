import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import Dashboard from './pages/dashboard.jsx';
import AccountLevel from './pages/AccountLevel.jsx';
import IssueNewCard from './pages/IssueNewCard.jsx';
import MyCards from './pages/MyCards.jsx';
import CardOverview from './pages/CardOverview.jsx';
import Profile from './pages/Profile.jsx';
import Affiliate from './pages/Affiliate.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/account-level" element={<AccountLevel/>}/>
        <Route path='/issue-new-card' element={<IssueNewCard/>}/>
        <Route path='/my-cards' element={<MyCards/>}/>
        <Route path='/card-overview' element={<CardOverview/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/Affiliate" element={<Affiliate/>}/>
      </Routes>
    </Router>
  )
}

export default App
