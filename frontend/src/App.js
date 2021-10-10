import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Header, Login, Dashboard } from '../src/index';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={() => <Login />} />
            <Route path='/dashboard' exact component={() => <Dashboard />} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
