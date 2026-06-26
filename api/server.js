const express = require("express");
const app = express();

// Log ALL incoming requests
app.use((req, res, next) => {
  console.log("---- Incoming Request ----");
  console.log("Path:", req.path);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  console.log("--------------------------");
  next();
});

// Example route
app.get("/", (req, res) => {
  res.json({
    message: "Hello from API root",
    path: req.path,
    headers: req.headers,
  });
});

// More realistic route
app.get("/users", (req, res) => {
  res.json({
    users: ["Alice", "Bob"],
    forwardedFor: req.headers["x-forwarded-for"],
    host: req.headers["host"],
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
