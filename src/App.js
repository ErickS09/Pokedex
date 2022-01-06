import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail/:pokemonName' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
