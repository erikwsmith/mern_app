import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Records from './pages/Records';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className = 'pages'>
          <Routes>
            <Route 
              path='/' 
              element={<Home />}
            />
            <Route 
              path='/records' 
              element={<Records />}
            />
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
