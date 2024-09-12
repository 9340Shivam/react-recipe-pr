
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Pnf from './Pnf';
import ExpenseTracker from './Pagr/ExpenseTracker';
import ConditionalRendaring from './Pagr/ConditionalRendaring';
import Navbar from './Componenets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Effect from './Pagr/Effect';
import Recipe from './Pagr/Recipe';
import ViewRecipe from './Pagr/ViewRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/*' element={<Pnf />} />
          <Route path='/Expense' element={<ExpenseTracker />} />
          <Route path='/Conditional' element={<ConditionalRendaring />} />
          <Route path='/effect' element={<Effect />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/view' element={<ViewRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
