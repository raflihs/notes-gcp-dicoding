const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.start();

  server.route(routes)

  console.log(`Server started on ${server.info.uri}`);
};


init();

// const http = require("http");

// const requestLIsterner = (req, res) => {
//   res.setHeader("Content-Type", "text/html");

//   res.statusCode = 200;
//   const { method } = req;
//   const { url } = req;

//   if (url === "/") {
//     if (method === "GET") {
//       console.log("Ini adalah homepage");
//     } else {
//       console.log(`Halaman tidak dapat diakses dengan ${method} request`);
//     }
//   } else if (url === "/about") {
//     if (method === "GET") {
//       console.log("Halo, ini adalah halaman about");
//     } else if (method === "POST") {
//       let body = []; //

//       req.on("data", (chunk) => {
//         body.push(chunk);
//       });

//       req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         const { name } = req;
//         res.end(`${name}`);
//       });
//     } else {
//       console.log(`Halaman tidak dapat diakses dengan ${method} request`);
//     }
//   } else {
//     console.log("Halaman tidak ditemukan!")
//   }
// };

// const server = http.createServer(requestLIsterner);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server started on ${host}:${port}`);
// });
