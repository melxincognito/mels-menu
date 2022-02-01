import React from "react";
import AddRecipeForm from "../components/forms/AddRecipeForm";
import Card from "../components/ui/Card";
import OtherRecipeDetailsForm from "../components/forms/OtherRecipeDetailsForm";
import AddIngredientsForm from "../components/forms/AddIngredientsForm";
// main page to add a recipe to the menu

export default function AddRecipe() {
  return (
    <div>
      {" "}
      <Card BackgroundColor="black" height="400px">
        <AddRecipeForm />
      </Card>
      <Card>
        {" "}
        <AddIngredientsForm />
      </Card>
      <Card height="400px">
        <OtherRecipeDetailsForm />
      </Card>
    </div>
  );
}

// Add Recipe Form is the first form displayed that contains
// main questions such as the recipe name, description,
// a photo and the category(breakfast, lunch, dinner, whatever)
