import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './pages/firstPage';
import Home from './pages/home'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page/>}/>
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
