import { useState } from "react";

import FormField from "./components/FormField";

import "./App.css";

function App() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const [message, setMessage] = useState("");


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    function validateForm() {

        const newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name =
                "El nombre es obligatorio.";
        }

        if (formData.email.trim() === "") {
            newErrors.email =
                "El email es obligatorio.";
        }
        else if (!formData.email.includes("@")) {
            newErrors.email =
                "Introduce un email válido.";
        }

        if (formData.password === "") {
            newErrors.password =
                "La contraseña es obligatoria.";
        }
        else if (formData.password.length < 6) {
            newErrors.password =
                "La contraseña debe tener al menos 6 caracteres.";
        }

        return newErrors;
    }


    function handleSubmit(event) {

        event.preventDefault();

        const validationErrors =
            validateForm();

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors).length === 0
        ) {

            setMessage(
                "Registro realizado correctamente."
            );

            setFormData({
                name: "",
                email: "",
                password: ""
            });

        }
        else {

            setMessage("");
        }
    }


    return (
        <main className="app">

            <section className="form-container">

                <h1>Formulario de registro</h1>

                <form onSubmit={handleSubmit}>

                    <FormField
                        id="name"
                        label="Nombre"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Introduce tu nombre"
                        error={errors.name}
                    />

                    <FormField
                        id="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Introduce tu email"
                        error={errors.email}
                    />

                    <FormField
                        id="password"
                        label="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Introduce tu contraseña"
                        error={errors.password}
                    />

                    <button type="submit">
                        Registrarse
                    </button>

                </form>

                {message && (
                    <p className="success">
                        {message}
                    </p>
                )}

            </section>

        </main>
    );
}

export default App;