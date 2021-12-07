import styles from "./Recipes.module.scss";
import Recipe from "./elements/Recipe";

const Recipes = (props) => {
  const recipes = [
    {
      name: "Ojingeo Muchim",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "fácil",
      qualification: "5.0",
      image: "/assets/Ojingeo-Muchim.png",
    },
    {
      name: "Cola Chicken",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "fácil",
      qualification: "5.0",
      image: "/assets/Cola-Chicken.png",
    },
    {
      name: "Roasted Carrot",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "fácil",
      qualification: "4.5",
      image: "/assets/Roasted-Carrot.png",
    },
    {
      name: "Sweet Cherries",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "fácil",
      qualification: "4.0",
      image: "/assets/Sweet-Cherries.png",
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.title}>Nuevas Recetas</span>
      <div className={styles.recipes}>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
