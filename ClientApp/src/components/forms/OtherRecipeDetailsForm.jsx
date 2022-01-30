import React from "react";

export default function OtherRecipeDetailsForm() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label> Prep + Cook Time:</label>
          <select className="form-select" aria-label="prepAndCookTime">
            <option value="1"> 15 minutes or less </option>
            <option value="2">15-30 minutes</option>
            <option value="3">30-45 minutes</option>
            <option value="4">1 hour or more</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cooking Difficulty</label>
          <select className="form-select" aria-label="cookingDifficulty">
            <option value="1">Beginner </option>
            <option value="2">Intermediate</option>
            <option value="3">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label>Main Food Category</label>
          <select className="form-select" aria-label="foodCategory">
            <option value="1">Beef </option>
            <option value="2">Chicken</option>
            <option value="3">Turkey</option>
            <option value="4"> Vegetarian</option>
            <option value="5"> Vegan</option>
            <option value="6"> Healthy Bites</option>
            <option value="7"> Comfort Foods</option>
            <option value="8"> Quick Fix</option>
          </select>
        </div>
      </form>
    </div>
  );
}
