import React from "react";

const RecipeContext = React.createContext({
  Recipes: [],
  ingredients: [],
});

export const RecipeContextProvider = (props) => {
  const IngredientList = [
    { name: "Cereal Grains", list: ["wheat flour", "basmati rice"] },
    { name: "Poultry", list: ["chicken", "egg"] },
    {
      name: "Vegetables",
      list: [
        "cilantro",
        "garlic",
        "ginger",
        "lemon",
        "onion",
        "peas",
        "potatoe",
        "tomatoe",
      ],
    },
    { name: "Dairy", list: ["yogurt", "coconut milk", "milk"] },
    { name: "Oil", list: ["oil"] },
  ];
  const RecipeList = [
    {
      id: 1,
      name: "Chapati",
      ing: [{ name: "wheat flour", quantity: 2.5, unit: "cups" }],
      src: "./images/RecipeImages/chapati.jpg",
      direction:
        "Mix flour and salt together in a bowl. Stir in water to form a soft dough. Turn dough out onto a lightly floured work surface and knead several times. Divide into 8 pieces and roll each into a ball. Roll each ball into a very thin round using a rolling pin. Heat a griddle over medium-high heat. Cook each dough round on griddle until dough bubbles and blisters appear, about 2 minutes. Flip and cook until lightly browned on the other side.",
    },
    {
      id: 2,
      name: "Tandoori Chicken",
      ing: [
        { name: "chicken", quantity: 2, unit: "pounds" },
        { name: "cilantro", quantity: 2, unit: "teaspoons " },
        { name: "garlic", quantity: 1, unit: "clove" },
        { name: "ginger", quantity: 1, unit: "teaspoon" },
        { name: "lemon", quantity: 1, unit: "medium" },
        { name: "onion", quantity: 0.5, unit: "medium" },
        { name: "yogurt", quantity: 1.25, unit: "cups" },
      ],
      src: "./images/RecipeImages/Tandoori_Chicken.jpg",
      direction:
        "Remove and discard skin from chicken pieces. Cut slits into meat and place into a shallow dish. Season chicken on both sides with lemon juice and salt. Let sit for 20 minutes. Mix yogurt, onion, garlic, garam masala, ginger, and cayenne pepper together in a medium bowl until smooth, then stir in food coloring. Spread yogurt mixture over chicken, cover, and refrigerate for 6 to 24 hours (the longer the better). When ready to cook, preheat an outdoor grill for medium-high heat and lightly oil the grate. Remove chicken from marinade. Discard remaining marinade. Cook chicken on the preheated grill until no longer pink and the juices run clear. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Garnish with cilantro and lemon wedges.",
    },
    {
      id: 3,
      name: "Lassi",
      ing: [{ name: "yogurt", quantity: 1.75, unit: "cups" }],
      src: "./images/RecipeImages/Lassi.jpg",
      direction:
        "Fill 6 tall glasses with ice cubes. Place yogurt, ice water, crushed ice, sugar, and salt in a blender; blend until frothy. Pour over ice cubes in the glasses to serve.",
    },
    {
      id: 4,
      name: "Kheer",
      ing: [
        { name: "basmati rice", quantity: 0.5, unit: "cups" },
        { name: "coconut milk", quantity: 2, unit: "cups" },
        { name: "milk", quantity: 2, unit: "cups" },
      ],
      src: "./images/RecipeImages/Kheer.jpg",
      direction:
        "Bring coconut milk, milk, and sugar to a boil in a large saucepan over medium heat. Add rice, reduce the heat to low, and simmer until mixture thickens and rice is tender, about 20 minutes. Stir in raisins, cardamom, and rose water; cook for a few more minutes. Ladle into serving bowls and garnish with almonds and pistachios.",
    },
    {
      id: 5,
      name: "Samosa",
      ing: [
        { name: "egg", quantity: 2, unit: "" },
        { name: "oil", quantity: 1.25, unit: "cup" },
        { name: "onion", quantity: 2, unit: "chopped" },
        { name: "peas", quantity: 1.5, unit: "cup" },
        { name: "wheat flour", quantity: 2, unit: "cups" },
        { name: "potatoe", quantity: 4, unit: "cubed" },
        { name: "tomatoe", quantity: 2, unit: "chopped" },
      ],
      src: "./images/RecipeImages/Samosa.jpg",
      direction:
        "Place potatoes into a large pot and cover with salted water; bring to a boil. Reduce heat to medium-low and simmer until tender, about 20 minutes. Drain and transfer potatoes to a bowl; coarsely mash. Preheat oven to 400 degrees F (200 degrees C). Heat oil in a skillet over medium-high heat; cook and stir onions, coriander seed, curry powder, ginger, salt, turmeric, cumin, allspice, cayenne pepper, and cinnamon until onion is lightly browned, about 5 minutes. Remove skillet from heat and stir tomatoes and peas into onion mixture; pour into mashed potatoes and thoroughly mix. Cool completely. Cut each pie crust into 8 even triangles. Spoon filling onto the wide end of each triangle; fold corners over filling creating a triangular 'hat' shape. Pinch the dough together to form a seal. Brush egg white over each samosa and arrange on a baking sheet. Bake in the preheated oven until samosas are golden brown, about 15 minutes.",
    },
  ];
  return (
    <RecipeContext.Provider
      value={{
        Recipes: RecipeList,
        ingredients: IngredientList,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
