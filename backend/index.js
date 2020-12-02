const express = require("express");
require("express-async-errors");
const app = express();
const router = express.Router();
const path = require("path");
const port = process.env.PORT || 3000;

const tenancyRouter = require("./api/tenancy");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
router.use("/tenancy", tenancyRouter);
app.use("/api", router);

const buildPath = path.join(__dirname, "./../frontend/build");
app.use(express.static(buildPath));
app.get("/*", (req, res) => res.sendFile(path.join(buildPath, "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
