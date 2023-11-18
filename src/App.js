import {Button} from '@primer/react'
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <Navbar/>
        
        <Content/>
        <SideBar/>
    </div>
  );
}

export default App;
