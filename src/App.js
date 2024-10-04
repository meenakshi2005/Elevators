  import './App.css';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Status from './Status';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Status/>} />
        </Routes>
      </Router>
    );
  }



  export default App;
