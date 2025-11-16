import express from "express";
import cors from "cors";
import serverless from "serverless-http";

import authRoutes from "./routes/authRoutes.js";
import mobileRoutes from "./routes/mobileRoutes.js";
import ventasRoutes from "./routes/ventasRoutes.js";
import entregasRoutes from "./routes/entregasRoutes.js";
import combustibleRoutes from "./routes/combustibleRoutes.js";
import syncRoutes from "./routes/syncRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use("/api/mobile/auth", authRoutes);
app.use("/api/mobile", mobileRoutes);
app.use("/api/mobile/ventas", ventasRoutes);
app.use("/api/mobile/entregas", entregasRoutes);
app.use("/api/mobile/combustible", combustibleRoutes);
app.use("/api/mobile/sync", syncRoutes);

// Endpoint raíz para probar
app.get("/", (req, res) => {
  res.json({ message: "Backend Mobile funcionando correctamente 🚀" });
});

// EXPORTACIÓN SERVERLESS (OBLIGATORIO PARA VERCEL)
export const handler = serverless(app);

export default app;
