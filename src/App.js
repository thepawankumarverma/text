import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom"
function App() {
  return (
    <>
    
   <Router>
   <Navbar></Navbar>
       <div>
       <Routes>
          <Route path="/about" element={<About></About>}>
          
          </Route>
          <Route path="/" element={ <Textarea></Textarea>}>
          
          </Route>
        </Routes>
       
       </div>
       </Router>
       
    </>
  );
}

export default App;

