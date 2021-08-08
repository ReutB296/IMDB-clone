import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Trailer from './Trailer';




function App() {

  
  return (
    <div className="App">
    {/* <h1>Asaf remote test</h1> */}
   <Router>
        <MoviesProvider>
            <Trailers/>
        <Route path="/trailers">
          <Trailer/>
        </Route>
        </MoviesProvider>
    </Router>
    </div>
  );
}

export default App;
