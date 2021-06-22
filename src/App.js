import './App.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
       <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/team/:teamKey">
              <TeamDetail/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
