import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Friends from './components/Home/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';
import ShowUserDetail from './components/ShowUserDetail/ShowUserDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/friend/:friendId" element={<ShowUserDetail></ShowUserDetail>}></Route>

        {/* Nested Route  does not working*/}
        
        <Route path="/posts" element={<Posts></Posts>}>
            <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        

        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

// yarn create react-app my-app79
// yarn add react-router-dom@6 (install)
// import { BrowserRouter } from "react-router-dom" and wrap App;/index.js;
// import { Routes} from "react-router-dom";/App.js;
// import {Route} from "react-router-dom";/App.js;
// inside Route setup path="/" name in App.js;
// inside Route setup element={<Home/>} in App.js;
