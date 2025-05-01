const express = require("express");
const cors = require("cors");
const app = express();

// 🟡 Add these middlewares
app.use(cors());
app.use(express.json()); // 🔥 This is required to read req.body

const aiRoutes = require("./src/routes/ai.routes");
app.use("/", aiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
