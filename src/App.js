import WorldClock from './components/WorldClock';
import Modal from './components/Modal';
import ToDo from './components/ToDo';
export default function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <WorldClock></WorldClock>
      <ToDo></ToDo>
    </div>
  );
}
