// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Ojingeo Muchim",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "easy",
      qualification: 5.0,
      image: "/assets/Ojingeo-Muchim.png",
    },
    {
      name: "Cola Chicken",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "easy",
      qualification: 5.0,
      image: "/assets/Cola-Chicken.png",
    },
    {
      name: "Roasted Carrot",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "easy",
      qualification: 4.5,
      image: "/assets/Roasted-Carrot.png",
    },
    {
      name: "Sweet Cherries",
      portion: "1",
      cookTime: 10,
      ingredients: [{ name: "rice", quantity: "1" }],
      level: "easy",
      qualification: 4.0,
      image: "/assets/Sweet-Cherries.png",
    },
  ]);
}
