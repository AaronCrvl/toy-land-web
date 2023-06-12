import './App.css';
import LoginPage from './pages/LoginPage';

export default function App() {    
  const AppStyle = {            
    width: '100vh',
    heigh: '100vh',
  }

  return (
    <div className="App" style={AppStyle}>
      <header/>
      <LoginPage />
    </div>
  )
}