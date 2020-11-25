// import jwt from "jwt-simple";

// describe("ROUTES: Todo", () => {
//   const Users = app.db.models.Users;
//   const Todos = app.db.models.Todos;
//   const jwtSecret = app.libs.config.jwtSecret;
//   let token;
//   let fakeTodo;
//   beforeEach(done => {
//     Users
//       .destroy({ where: {} })
//       .then(() => Users.create({
//         name: "viet",
//         email: "viet@gmail.com",
//         password: "12345"
//       }))
//       .then(user => {
//         Todos
//           .destroy({ where: {} })
//           .then(() => Todos.bulkCreate([{
//             id: 1,
//             title: "Work",
//             user_id: user.id
//           }, {
//             id: 2,
//             title: "Study",
//             user_id: user.id
//           }]))
//           .then(todos => {
//             fakeTodo = todos[0];
//             token = jwt.encode({ id: user.id }, jwtSecret);
//             done();
//           });
//       });
//   });
//   describe("GET /todos", () => {
//     describe("status 200", () => {
//       it("returns a list of Todos", done => {
//         request.get("/todos")
//           .set("Authorization", `JWT ${token}`)
//           .expect(200)
//           .end((err, res) => {
//             expect(res.body).to.have.length(2);
//             expect(res.body[0].title).to.eql("Work");
//             expect(res.body[1].title).to.eql("Study");

//             done(err);
//           })
//       });
//     });
//     describe("status 401", () => {
//       it("returns unautherized if user not login yet", () => {
//         request.get("/todos")
//           .expect(401)
//           .end((err, res) => {
//             done(err);
//           });
//       });
//     });
//   });
//   describe("POST /todos/", () => {
//     describe("status 200", () => {
//       it("creates a new todo", done => {
//         request.post("/todos")
//           .set("Authorization", `JWT ${token}`)
//           .send({ title: "Run" })
//           .expect(200)
//           .end((err, res) => {
//             expect(res.body.title).to.eql("Run");
//             expect(res.body.done).to.be.false;

//             done(err);
//           });
//       });
//     });
//   });
//   describe("GET /todos/:id", () => {
//     describe("status 200", () => {
//       it("returns one todo", done => {
//         request.get(`/todos/${fakeTodo.id}`)
//           .set("Authorization", `JWT ${token}`)
//           .expect(200)
//           .end((err, res) => {
//             expect(res.body.title).to.eql("Work");

//             done(err);
//           });
//       });
//     });
//     describe("status 404", () => {
//       it("throws error when todo not exist", done => {
//         request.get("/todos/0")
//           .set("Authorization", `JWT ${token}`)
//           .expect(404)
//           .end((err, res) => done(err));
//       });
//     });
//   });
//   describe("PUT /todos/:id", () => {
//     describe("status 204", () => {
//       it("updates a todo", done => {
//         request.put(`/todos/${fakeTodo.id}`)
//           .set("Authorization", `JWT ${token}`)
//           .send({
//             title: "Travel",
//             done: true
//           })
//           .expect(204)

//           .end((err, res) => done(err));
//       });
//     });
//   });
//   describe("DELETE /todos/:id", () => {
//     describe("status 204", () => {
//       it("removes a todo", done => {
//         request.delete(`/todos/${fakeTodo.id}`)
//           .set("Authorization", `JWT ${token}`)
//           .expect(204)
//           .end((err, res) => done(err));
//       });
//     });
//   });
// });