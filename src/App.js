import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { GithubProvider } from "./components/context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between max-w-[730px] mx-auto pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          <Navbar />
          <Home />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
