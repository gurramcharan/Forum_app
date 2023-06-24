import './App.css';
import { CommentPage } from './pages/CommentPage';
import { HomePage } from './pages/HomePage';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>My Forum</h1>
      </div>
      <hr />
      <div>
        <Routes>
          <Route path='/'  element={<HomePage />} />
          <Route path='/post/:postId'  element={<CommentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
