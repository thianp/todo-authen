import { TodoContextProvider } from './contexts/TodoContext';
import Header from './components/layout/Header';
import Router from './route/Router';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <TodoContextProvider>
      <Header />
      <div className="container max-w-xs pt-5">
        <Router />
      </div>
    </TodoContextProvider>
    </AuthContextProvider>
  );
}

export default App;
