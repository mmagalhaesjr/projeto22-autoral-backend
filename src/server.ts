import app from "./app.js";
import "dotenv/config"

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`***Server running in port: ${PORT}***`));