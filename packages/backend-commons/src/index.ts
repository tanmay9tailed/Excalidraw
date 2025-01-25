const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

console.log("jwt = ", JWT_SECRET);

module.exports = JWT_SECRET;
