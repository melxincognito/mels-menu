import React, { useState } from "react";

import { Button, FormControl } from "react-bootstrap";

export default function AddIngredientsForm() {
  const [ingredientNameField, setIngredientNameField] = useState("");

  const [ingredientMeasurementField, setIngredientMeasurementField] =
    useState("");

  // learn how to set this into it's object instead of two seperate states

  // grabbing info from the form and able to put it on the screen

  const updateInputFields = () => {
    console.log(ingredientNameField);
    console.log(ingredientMeasurementField);
  };

  // for ingredientName and amount form control it's holding the value on the onChange to set the empty
  // state of ingredientInputField to the state of whatever you put in

  return (
    <>
      <form>
        <div>
          <FormControl
            id="ingredientName"
            placeholder="Ingredient Name"
            onChange={(e) => setIngredientNameField(e.target.value)}
          />
          <FormControl
            id="ingredientMeasurement"
            placeholder="Amount"
            onChange={(e) => setIngredientMeasurementField(e.target.value)}
          />
        </div>

        <Button onClick={updateInputFields}> Press me</Button>
      </form>
    </>
  );
}
