import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LogoNav from './components/LogoNav';

export default function App() {    
  const AppStyle = {
    backgroundColor: '#F3F3F3'
  }

  return (
    <div className="App" style={AppStyle}>
      <header/>
      <LogoNav></LogoNav>
      <NavBar></NavBar>                
      <Footer></Footer>
    </div>
  );
}