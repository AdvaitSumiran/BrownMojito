let tasks = [];
let idCounter = 1;

const TaskModel = {
  getAll: () => tasks,
  getById: (id) => tasks.find((task) => task.id === parseInt(id)),
  create: (data) => {
    const newTask = {
      id: idCounter++,
      title: data.title,
      description: data.description,
    };
    tasks.push(newTask);
    return newTask;
  },
  update: (id, data) => {
    const task = tasks.find((task) => task.id === parseInt(id));
    if (task) {
      task.title = data.title || task.title;
      task.description = data.description || task.description;
    }
    return task;
  },
  delete: (id) => {
    const index = tasks.findIndex((task) => task.id === parseInt(id));
    if (index !== -1) {
      return tasks.splice(index, 1);
    }
    return null;
  },
};

module.exports = TaskModel;
