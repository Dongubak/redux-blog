import './App.css';
import Todos from './components/Todos';
import CounterContainer from './container/CounterContainer';
import TodosContainer from './container/TodosContainer';
function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
