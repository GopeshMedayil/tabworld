import WorldClock from './components/WorldClock';
import Modal from './components/Modal';
import ToDo from './components/ToDo';
import BookMark from './components/Bookmark';
export default function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <WorldClock></WorldClock>
      <ToDo></ToDo>
      <BookMark></BookMark>
    </div>
  );
}
