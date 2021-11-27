import WorldClock from './components/WorldClock/WorldClock';
import Modal from './components/Modal';
import ToDo from './components/ToDo';
import BookMark from './components/Bookmark';
import Notes from './components/Notes/Notes';
import './App.css';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <div className="App">
      <section className="header">
        Header
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 ">
            <NavBar></NavBar>
          </div>
          <div className="col-md-7">
            <div className="m-2 border">
              <div className="main-body">
                Body
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
