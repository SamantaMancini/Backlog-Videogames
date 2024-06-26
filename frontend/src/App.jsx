import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/edit" element={<Add/>}/>
      </Routes>
    </>
  )
}

export default App
