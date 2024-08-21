
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    // When you lazy load a componenent, to bring out the component you need to use Suspense
    <div className="App">
      {/* <LazyLoadComponent/> */}
      <Navigation />
    </div>
  );
}

export default App;
