import './App.css';
import Home from './componenets/Home';
import Header from './componenets/Header';
import categorySlice from './features/categories/category-slice';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
