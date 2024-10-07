import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/dashboard';
import AccountLevel from './pages/AccountLevel';
import IssueNewCard from './pages/IssueNewCard';
import MyCards from './pages/MyCards';
import CardOverview from './pages/CardOverview';
import Profile from './pages/Profile';
import Affiliate from './pages/Affiliate';

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
