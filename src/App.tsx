import './App.css';
import Landing from './pages/landing';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
