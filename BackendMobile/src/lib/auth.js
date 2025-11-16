import jwt from "jsonwebtoken";

export function generarToken(usuario) {
  return jwt.sign(
    {
      id: usuario.id,
      rol: usuario.rol,
      estado: usuario.estado,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

export function verificarToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token faltante" });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = data;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token no válido" });
  }
}
