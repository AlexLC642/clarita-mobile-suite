import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../../lib/prisma.js";
import { generarToken } from "../../lib/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { correo, password } = req.body;

    if (!correo || !password) {
      return res.status(400).json({ error: "Credenciales incompletas" });
    }

    const usuario = await prisma.usuario.findFirst({
      where: { correo },
    });

    if (!usuario) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }

    const passwordValida = await bcrypt.compare(password, usuario.passwordHash);

    if (!passwordValida) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }

    const token = generarToken(usuario);

    return res.json({ token, usuario });
  } catch (error) {
    console.error("Error en login movil:", error);
    return res.status(500).json({ error: "Error interno al iniciar sesion" });
  }
});

export default router;
