
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    
    <Router>
      <>
      <div>
        <h1>Fibbonaci Calculator</h1>
          <Link to ="/">Home</Link>
          <br />
          <Link to ="/otherpage">Other Page</Link>
      </div>
      <br />
      <div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
    
      </div>
      </>
    </Router>
  );
}

export default App;
