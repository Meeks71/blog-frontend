import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react';
import Landing from './components/pages.js/Landing';
import Home from './components/pages.js/Home';
import About from './components/pages.js/About';
import UpdateBlog from './components/forms.js/UpdateBlog';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1>Blogs Frontend</h1>

      <Switch>
        <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser}/> } />
        <Route path='/home' render={routerProps => <Home {...routerProps} user={user} />} />
        <Route path='/about' component={About} />
        <Route path='/update/:id' component={UpdateBlog}/>
      </Switch>
    </div>
  );
}

export default App;
