import './App.css';
import ChangeColor from './components/ChangeColor';
 import Login from './components/Login';
import Profile from './components/Profile';
import theme from './features/theme';
import user from './features/user';

function App() {
  return (
    <div className="App">
      <Profile/>
        <Login/>
        <theme/>
        <user/>
        <ChangeColor/>
        
    </div>
  );
}

export default App;
