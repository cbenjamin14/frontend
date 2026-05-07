import "./App.css";
import {React} from "react";
import ClassForm from './ClassForm';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', backgroundColor: '#084eda', padding: '10px', color: 'white' }}>
        <h1>Class Creation Form</h1>
      </header>
    <ClassForm name="ClassForm"
    />
    </div>
  );
}

export default App;
