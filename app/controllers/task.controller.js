const db = require("../models");
const { generateTitles } = require("./faker.controller");
const Task = db.tasks;

// Generate N new tasks
exports.generate = async (req, res) => {
  const nTasks = req.query.n ?? process.env.N_DEFAULT;
  const newTitles = await generateTitles(nTasks);
  const titleArray = Array.from(newTitles);
  const taskArray = titleArray.map((title) => {
    return {
      title,
      uuid: require('uuid').v4(),
      done: false,
    };
  });
  Task.insertMany(taskArray)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while generating Tasks."
      });
    });
};

// Update a Task by uuid
exports.update = (req, res) => {
  const uuid = req.params.uuid;
  Task.findOneAndUpdate({ uuid }, { done: true }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Task with uuid=${uuid}. Maybe Task was not found!`
        });
      } else res.send({ message: "Task was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with uuid=" + uuid
      });
    });
};
