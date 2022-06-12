import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "../post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
