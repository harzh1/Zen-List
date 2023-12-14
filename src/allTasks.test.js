const { todo } = require("../src/allTasks");

test("Create a new todo with valid properties", () => {
  const todo1 = todo({
    title: "Task 1",
    description: "This is task 1",
    dueDate: new Date(),
    check: true,
    priority: "red",
  });

  // Add your assertions here to verify the properties of the created todo
  expect(todo1.title).toBe("Task 1");
  expect(todo1.description).toBe("This is task 1");
  expect(todo1.dueDate).toBeInstanceOf(Date);
  expect(todo1.check).toBe(true);
  expect(todo1.priority).toBe("red");
});
