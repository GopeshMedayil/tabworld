import WorldClock from './components/WorldClock';
import Modal from './components/Modal';
import ToDo from './components/ToDo';
import BookMark from './components/Bookmark';
import Notes from './components/Notes/Notes';

export default function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <WorldClock></WorldClock>
      <ToDo></ToDo>
      <BookMark></BookMark>
      <Notes></Notes>
    </div>
  );
}
