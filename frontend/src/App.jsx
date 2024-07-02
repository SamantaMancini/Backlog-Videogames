import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/:id" element={<Edit/>}/>
      <Route path="/add" element={<Add/>} />
      </Routes>
    </>
  )
}

export default App
