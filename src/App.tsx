import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './App.css';

import Routes from './components/utils/Routes';

const WebRoutes = () => useRoutes(Routes);

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <WebRoutes />
      </Router>
    </div>
  );
}

export default App;
