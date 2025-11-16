import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "API móvil Clarita funcionando" });
});

export default router;
