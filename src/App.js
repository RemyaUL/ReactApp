
import './App.css';
import Create from './components/Create/Create';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Read from './components/Read/Read';
import Update from './components/Update/Update';


function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <nav>
          <ul>
            <li><Link to='/read'>Home</Link></li>
            <li><Link to='/create'>Add a new record</Link></li>
          </ul>
        </nav>
        <Routes>
      
          <Route path='/' exact element={<Read/>} />
       
      
          <Route path='/create'exact element={<Create/>} />
        
        
          <Route path='/read' exact element={<Read/>} />
       

        <Route path='/update' exact element={<Update/>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
