import React, {useState} from 'react';

const App = () => {

    const [resource, setResource ] = useState('post');
  
    return (
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Posts</button>
        </div>
        {resource}
      </div>
    );
}

export default App;
