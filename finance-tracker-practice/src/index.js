import ReactDOM from 'react-dom';

// CSS injection
import './index.css';
// Local import
import App from './App';

// First arg: Acts like a custom html element. Second arg: selects 'root' from index.html. React builds off this div
ReactDOM.render(<App />, document.getElementById('root'));
