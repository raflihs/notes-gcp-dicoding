const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.start();

  server.route(routes);

  console.log(`Server started on ${server.info.uri}`);
};

init();
