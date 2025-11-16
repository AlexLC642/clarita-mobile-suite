import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Entregas móvil" });
});

export default router;
