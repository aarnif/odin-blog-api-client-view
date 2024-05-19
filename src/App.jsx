import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/archive" element={<div>Archive</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
