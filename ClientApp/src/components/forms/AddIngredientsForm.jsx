import React, { useState } from "react";

import { Button, FormControl } from "react-bootstrap";

export default function AddIngredientsForm() {
  const [ingredientInputField, setIngredientInputField] = useState("");

  // grabbing info from the form and able to put it on the screen

  const pressedButton = () => {
    console.log(ingredientInputField);
  };

  // for ingredientName form control it's holding the value on the onChange to set the empty
  // state of ingredientInputField to the state of whatever you put in

  return (
    <>
      <form>
        <div>
          <FormControl
            id="ingredientName"
            placeholder="Ingredient Name"
            onChange={(e) => setIngredientInputField(e.target.value)}
          />
          <FormControl id="ingredientMeasurement" placeholder="Amount" />
        </div>

        <Button onClick={pressedButton}> Press me</Button>
      </form>
    </>
  );
}
