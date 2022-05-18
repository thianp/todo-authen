import { TodoContextProvider } from './contexts/TodoContext';
import Header from './components/layout/Header';
import Router from './route/Router';

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <div className="container max-w-xs pt-5">
        <Router />
      </div>
    </TodoContextProvider>
  );
}

export default App;
