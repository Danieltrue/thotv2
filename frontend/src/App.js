//Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
//style
import Global from "./style/components/Global";
//Components
import Login from "./screen/Login";
import Register from "./screen/Register";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
