import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Trailer from './Trailer';
import Header from './Header';




function App() {

  
  return (
    <div className="App">
    <Header />
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
