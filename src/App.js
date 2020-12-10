import './css/App.css';
import Project_container from './components/project_container'
import Header from './components/header'

function App() {
  document.title="Portfolio";
  return (
    <div className="App">
      <Header />
      <Project_container />
    </div>
  );
}

export default App;
