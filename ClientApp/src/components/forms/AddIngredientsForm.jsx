import React, { useState } from "react";

import { Button, FormControl } from "react-bootstrap";

export default function AddIngredientsForm() {
  const [ingredientInputFields, setIngredientInputFields] = useState([
    {
      ingredientName: "",
      ingredientMeasurement: "",
    },
    {
      ingredientName: "",
      ingredientMeasurement: "",
    },
  ]);

  const pressedButton = () => {
    console.log(ingredientInputFields.ingredientName.value);
  };

  const handleChangeInput = (index, event) => {
    const values = [...ingredientInputFields];
    values[index][event.target.ingredientName] = event.target.value;
    setIngredientInputFields(values);
  };

  return (
    <>
      <form>
        {ingredientInputFields.map((ingredientInputField, index) => (
          <div key={index}>
            <FormControl
              id="ingredientName"
              placeholder="Ingredient Name"
              value={ingredientInputField.ingredientName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <FormControl
              id="ingredientMeasurement"
              placeholder="Amount"
              value={ingredientInputField.ingredientMeasurement}
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        ))}
        <Button onClick={pressedButton}> Press me</Button>
      </form>
    </>
  );
}
