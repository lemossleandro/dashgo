import { Modal } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    //factory, metodo pra gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.name.findName(); //`User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase(); //"lemos.leandro@outlook.com";
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    //metodo para alimentar os dados
    seeds(server) {
      server.createList("user", 100);
    },
    routes() {
      this.namespace = "api"; //todas as rodas do mirage precisam chamar o api, ex api/users
      this.timing = 750; // timig para testar o carregamento

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );
        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.get("/users/:id");
      this.post("/users/");

      this.namespace = "";
      this.passthrough(); //passa para rota origina caso não exista rota no mirage
    },
  });
}
