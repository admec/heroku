const http = require("http");
const app = require("./app");

// const port = process.env.port || 3000;

const server = http.createServer(app);

/* server.listen(port, () => {
 console.log("Server started at port " + port)
}); */

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});