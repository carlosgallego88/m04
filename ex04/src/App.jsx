import { useState } from "react";

import "./App.css";

function App() {

    const [counter, setCounter] = useState(0);

    const [items, setItems] = useState([
        "HTML",
        "CSS",
        "JavaScript"
    ]);

    const [newItem, setNewItem] = useState("");

    function increaseCounter() {
        setCounter(counter + 1);
    }

    function decreaseCounter() {
        setCounter(counter - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    function addItem() {

        if (newItem.trim() === "") {
            return;
        }

        setItems([
            ...items,
            newItem
        ]);

        setNewItem("");
    }

    function removeItem(index) {

        const newList = items.filter(function (item, itemIndex) {
            return itemIndex !== index;
        });

        setItems(newList);
    }

    return (
        <main className="app">

            <section className="section">

                <h1>Contador</h1>

                <p className="counter">
                    {counter}
                </p>

                <div className="buttons">

                    <button onClick={increaseCounter}>
                        Plus
                    </button>

                    <button onClick={resetCounter}>
                        Zero
                    </button>

                    <button onClick={decreaseCounter}>
                        Minus
                    </button>

                </div>

            </section>

            <section className="section">

                <h2>Lista dinámica</h2>

                <div className="form">

                    <input
                        type="text"
                        value={newItem}
                        onChange={function (event) {
                            setNewItem(event.target.value);
                        }}
                        placeholder="Nuevo elemento"
                    />

                    <button onClick={addItem}>
                        Añadir
                    </button>

                </div>

                <ul>

                    {items.map(function (item, index) {
                        return (
                            <li key={index}>

                                <span>
                                    {item}
                                </span>

                                <button
                                    onClick={function () {
                                        removeItem(index);
                                    }}
                                >
                                    Eliminar
                                </button>

                            </li>
                        );
                    })}

                </ul>

            </section>

        </main>
    );
}

export default App;