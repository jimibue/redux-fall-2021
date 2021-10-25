import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Footer from "./Footer";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
