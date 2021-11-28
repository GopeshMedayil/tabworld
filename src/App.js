import WorldClock from './components/WorldClock/WorldClock';
import Modal from './components/Modal';
import ToDo from './components/ToDo';
import BookMark from './components/Bookmark';
import Notes from './components/Notes/Notes';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <section className="header">
        Tab World
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 ">
            <NavBar></NavBar>
          </div>
          <div className="col-md-7">
            <div className="m-2 border">
              <div className="main-body">
                <Routes>
                  <Route path="/" element={<Notes />} />
                  <Route path="/todo" element={<ToDo />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/bookmark" element={<BookMark />} />
                </Routes>
              </div>
            </div>

          </div>
          <div className="col-md-3  ">
            <div className="m-2 p-1 border rounded">
              <WorldClock></WorldClock>

            </div>
          </div>
        </div>
      </div>
      {/* <section className="main-dashboard">
        <div className="column">Navbar</div>
        <div className="column">Body</div>
        <div className="column">
          <WorldClock></WorldClock>
        </div>
      </section> */}
      {/* 
      <ToDo></ToDo>
      <BookMark></BookMark>
      <Notes></Notes> */}
    </div>
  );
}
