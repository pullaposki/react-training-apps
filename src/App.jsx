import "./App.css"
import Counter from "./counter/Counter.jsx"
import Todo from "./todo/Todo.jsx"
import Greeting from "./greeting/Greeting.jsx"

function App() {
    return (
        <div className="App">
            <h1>React Training</h1>
            <div className="Greeting">
                <Greeting/>
            </div>
            <div className="Counter">
                <Counter/>
            </div>
            <div className="Todo">
                <Todo/>
            </div>
        </div>
    )
}

export default App
