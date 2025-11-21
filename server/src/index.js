import express from "express";
import {fromNodeHeaders, toNodeHandler, } from 'better-auth/node'
import cors from 'cors'
import { auth } from "./lib/auth.js";
const app = express();

// Fallback PORT if environment variable is missing
const PORT = process.env.PORT || 8080;

app.use(
   cors({
     origin: 'http://localhost:3002',
     methods: ['GET','POST','PUT','DELETE'],
     credentials: true
   })
)
app.all('/api/auth/*splat', toNodeHandler(auth))
app.use(express.json())


app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers)
  });

  return res.json(session);
});


app.listen(PORT, () => {
  console.log(`🔥[HELLFIRE]: Server running at http://localhost:${PORT}`);
});
