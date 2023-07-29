import {
  BrowserRouter as Router,
  Route,
  Routes,
//   Switch,
} from "react-router-dom";
// import { Navbar, Home, CreatePost, PostDetail } from "./";
import Navbar from "./Navbar";
import Home from "./Home";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:postId" element={<PostDetail />} />
          <Route exact path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
