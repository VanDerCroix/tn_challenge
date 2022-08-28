module.exports = app => {
  const tasks = require("../controllers/task.controller.js");

  var router = require("express").Router();

  // generate default number of tasks
  router.get("/", tasks.generate);
  // Update a tasks with id
  router.put("/:uuid", tasks.update);

  app.use("/tasks", router);
};
