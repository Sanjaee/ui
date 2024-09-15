import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindJob from "./pages/FindJob";
import DetailJob from "./pages/DetailJob";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/findjob/:id" element={<DetailJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
