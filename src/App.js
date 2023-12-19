import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useNavigate} from 'react-router-dom';
import Login from './Components/Login';
import Friends from './Components/Friends';
import Logout from './Components/Logout';
import AddFriend from './Components/AddFriends';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const navigate = useNavigate();

  return (
    

    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/friends">Friends List</Link>
        <Link className='link' to="/friends/add">Add Friends</Link>
        <Link className='link' to="/logout">Logout</Link>
      </header>
      
      {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendsList">Friends List</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
      </ul> */}
      <Routes>
        <Route path= '/login' element={<Login push={navigate} />}/>
        <Route path= '/' element= {<Login push={navigate} />}/>
        {/* { PrivateRoute( { component: <Friends />, path: '/friends'} ) } */}
        <Route path='/friends' element={<PrivateRoute><Friends/></PrivateRoute> }/>
        <Route path= '/logout' element= {<Logout/>}/>
        <Route path= '/friends/add' element= {<AddFriend/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
