import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { getEmotionImgById } from './util';
import Home from './page/Home';
import Diary from './page/Diary';
import New from './page/New';
import Edit from './page/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>

    </div>
  );
}

export default App;
