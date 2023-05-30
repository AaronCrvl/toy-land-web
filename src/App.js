import './App.css';
import LoginPage from './pages/LoginPage';

export default function App() {    
  const AppStyle = {        
    backgroundColor: '#932432'
  }

  return (
    <div className="App" style={AppStyle}>
      <header/>
      <LoginPage />
    </div>
  );
}