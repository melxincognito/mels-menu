import React from "react";

export default function Form() {
  return (
    <div>
      <h2> Add a recipe to the menu!</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Recipe Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Spaghetti Bolgenese"
        />
      </div>
      <div className="mb-3">
        <label for="recipeDescription" className="form-label">
          Recipe Description:
        </label>
        <textarea
          className="form-control"
          id="recipeDescription"
          rows="3"
          placeholder="Spaghetti noodles with an easy but delicious homemade bolognese sauce"
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="recipePhoto" className="form-label">
          Photo of Recipe:
        </label>
        <input className="form-control" type="file" id="recipePhoto" />
      </div>
      <div>
        <select className="form-select" aria-label="recipeCategory">
          <option selected>Select Recipe Category...</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Desserts</option>
          <option value="5">Sweet Treats</option>
          <option value="6">Healthy Snacks</option>
          <option value="7">Smoothies</option>
        </select>
      </div>
    </div>
  );
}
