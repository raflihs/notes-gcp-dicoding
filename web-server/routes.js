const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "homepage";
    },
  },
  {
    method: "POST",
    path: "/",
    handler: (request, h) => {
      return "cek";
    },
  },
  {
    method: "GET",
    path: `/user/{username?}`,
    handler: (request, h) => {
      const { username = "Dicoding" } = request.params;
      return `Hello ${username}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "strager" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hello ${name}!`;
      }

      return `Hai ${name}!`;
    },
  },
];

module.exports = routes;
