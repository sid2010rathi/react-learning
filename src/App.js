import './App.css';
import Greet from "./components/Greet"
import Welcome from './components/Welcome'
import {Home, NewHome} from './components/Home'
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <Greet name="Sid"><p>This is child element</p></Greet>
      <Greet name="Varun"/>
      <Greet name="Alia"/>
      <Welcome name="Kabir"/>
      <Welcome name="Farhan"/>
      <Welcome name="Arjun"/>
      <Home />
      <NewHome />
      <Message />
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
