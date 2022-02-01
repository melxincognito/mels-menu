import React from "react";
import Card from "../components/ui/Card";

export default function Home() {
  // seperating items below in seperate divs by the content
  // with the top being header content and the following being recipe content
  return (
    <>
      <div>
        <Card BackgroundColor="PaleVioletRed" height="50px">
          <label>Browse through our assortment of Menu Items</label>
        </Card>
      </div>

      <div className="recipeContent">
        <Card BackgroundImage="https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
          <button className="btn btn-outline-light">
            <h1> See All Menu Items </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://kristineskitchenblog.com/wp-content/uploads/2018/02/waffle-recipe-1200-square-8505.jpg">
          <button className="btn btn-outline-light">
            <h1> Breakfast </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://www.floatingkitchen.net/wp-content/uploads/2015/05/Eggplant-Zucchini-Sandwich-2-748x520.jpg">
          <button className="btn btn-outline-light">
            <h1> Lunch </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80">
          <button className="btn btn-outline-light">
            <h1> Dinner </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://blessingsandgoodfood.files.wordpress.com/2015/02/img_8155.jpg">
          <button className="btn btn-outline-light">
            <h1>Sweet Treats </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://images.unsplash.com/photo-1625928490857-5c894875a1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwYW5kJTIwbWVhdCUyMGJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60">
          <button className="btn btn-outline-light">
            <h1>Healthy Snacks </h1>
          </button>
        </Card>
        <Card BackgroundImage="https://images.unsplash.com/photo-1588539543889-20cc7ce4df55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJvd25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60">
          {" "}
          <button className="btn btn-outline-light">
            <h1>Desserts </h1>
          </button>{" "}
        </Card>
        <Card BackgroundImage="https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21vb3RoaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60">
          {" "}
          <button className="btn btn-outline-light">
            <h1>Smooties </h1>
          </button>{" "}
        </Card>
        <Card BackgroundImage="https://images.unsplash.com/photo-1561668048-fe9c092832e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYW1pJTIwYW5kJTIwYnJpZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60">
          <button className="btn btn-outline-dark">
            <h1>Depression Meals </h1>
          </button>{" "}
        </Card>
      </div>
    </>
  );
}
