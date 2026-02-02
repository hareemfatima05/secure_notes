require("dotenv").config();     // loads .env variables
const app = require("./app");  // imports Express app

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
