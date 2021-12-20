import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseWork from './routes/CourseWork/CourseWork';
import Home from './routes/Home/Home';
import Resume from './routes/Resume/Resume';
import Portfolio from './routes/Portfolio/Portfolio';
import Athletics from './routes/Athletics/Athletics';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "home" element = {<Home/>}/>
          <Route path = "coursework" element = {<CourseWork/>}/>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
