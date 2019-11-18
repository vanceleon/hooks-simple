import React, {useState} from 'react';
import './App.css';
import ResourceList from './components/ResourceList';

// import NoteList from './components/noteList';

// how to passthrough obj
// const [form, setValues] = useState({
//   username: '',
//   password: ''
// });

const initialState = {
  str: 'post'
}

function App() {
  const [resource, setResource] = useState(initialState);
  
  
  // const add1ToCounter = () => {
  //   const newCounterValue = state.resource + 1;
  //   setResource({resource: newCounterValue});
  // }

  const post = str => {
    // e.preventDefault();
    setResource({str: str})
  }
  
  return (
    <div>
      <div>
        <button onClick={() => post('post')}>Post</button>
        <button onClick={() => post('todos')}>Todos</button>
      </div>
      <ResourceList resource= {resource}/>
    </div>
  );
}

export default App;
