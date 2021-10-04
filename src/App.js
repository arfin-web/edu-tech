import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Enroll from './Components/Enroll/Enroll';
import Courses from './Components/Courses/Courses';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/enroll">
            <Enroll></Enroll>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
