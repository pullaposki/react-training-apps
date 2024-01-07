import "./App.css"
import Counter from "./counter/Counter.jsx"
import Todo from "./todo/Todo.jsx"
import Greeting from "./greeting/Greeting.jsx"

function App() {
    return (
        <div>
            <Greeting />
            <Counter />
            <Todo />
        </div>
    )
}

export default App
