import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Components/Detail";
// import Category from "./Components/Category";
// import Games from "./Components/Games";
import Home from "./Home";

function App() {
  return (
    <div>
      {/* <Games /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/:game" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
