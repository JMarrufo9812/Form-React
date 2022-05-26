import "./App.css";
import { Card } from "./Components/Card";
import { Input } from "./Components/Input";
import { useArray } from "./Hooks/useArray";
import { useState } from "react";

function App() {
  const { array: fields, push: pushField } = useArray([
    {
      id: "0",
      type: "TEXT",
      required: false,
      placeholder: "Test",
    },
  ]);

  const initialValues = {
    placeholder: "",
    type: "",
    isRequired: false,
    options: [],
  };

  const [field, setField] = useState(initialValues);

  const handleInputChange = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const addField = (event) => {
    event.preventDefault();
    console.log(field);
    // aqui validaria los errores pero ya no me alcanzo el tiempo
    // valide que si no vienen los datos se pongan unos por default para evitar errores
    if (!field.type) {
      field.type = "TEXT";
    }
    if (field.type === "RADIO" || field.type === "SELECT") {
      field.options = [{ text: "Opcion 1", value: "1" }];
    }
    pushField(field);
    setField(initialValues);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-2 gap-2">
        <div className="justify-self-end">
          <Card>
            <form className="row" onSubmit={addField}>
              <h5>Agregar campo</h5>
              <Input
                type="TEXT"
                required={true}
                placeholder="Placeholder"
                onChange={handleInputChange}
                name="placeholder"
              ></Input>
              <Input
                type="SELECT"
                required={true}
                placeholder="Tipo de texto"
                options={[
                  { text: "Texto", value: "TEXT" },
                  { text: "Selector", value: "SELECT" },
                  { text: "Radio", value: "RADIO" },
                ]}
                onChange={handleInputChange}
                name="type"
              ></Input>
              <Input
                type="RADIO"
                required={true}
                placeholder="¿Es requerido?"
                options={[
                  { text: "Si", value: true },
                  { text: "No", value: false },
                ]}
                onChange={handleInputChange}
                name="isRequired"
              ></Input>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar campo
              </button>
            </form>
          </Card>
        </div>

        <div className="justify-self-start">
          <Card>
            <h5>Formulario</h5>
            {fields.map(({ id, type, required, placeholder, options }) => (
              <div>
                <Input
                  id={id}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  name={`${id}-${placeholder}`}
                  options={options}
                ></Input>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
