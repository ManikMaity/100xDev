import fs from "fs"
import {Command} from "commander"
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });



  program.command("Add")
  .description("Add to todo")
  .arguments("<todoText>")
  .action((todoText) => {
    fs.readFile("./todoData.json", "utf8", (err, jsonData) => {
      if (err){
        console.log("Error :", err);
        return;
      }
      else {
        const data = JSON.parse(jsonData);
        const time = new Date();
        data.push({id: data.length + 1, text: todoText, time : time.toLocaleString(), isCompleted: false});
        const updatedJsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync("./todoData.json", updatedJsonData);
        console.log("Added to todo");
      }
    })
  })

  program.command("AllTodo")
  .description("Show all todos")
  .action(() => {
    fs.readFile("./todoData.json", "utf8", (err, data) => {
      if (err){
        console.log("Error :", err);
      }
      else {
        const objData = JSON.parse(data);
        console.table(objData);
      }
    })
  });

  program.command("Edit")
  .description("Edit todo by ID")
  .arguments("<id> <newText>")
  .action((id, newText) => {
    fs.readFile("./todoData.json", "utf8", (err, data) => {
      if (err){
        console.log(err);
      }
      else {
        let todoId = Number(id);
        const dataArr = JSON.parse(data);
        dataArr.forEach(todo => {
          if (todo.id == todoId){
            const time = new Date();
            todo.text = newText;
            todo.time = time.toLocaleString();
          }
        })
        const updatedJsonData = JSON.stringify(dataArr, null, 2);
        try {
          fs.writeFileSync("./todoData.json", updatedJsonData);
          console.log("Todo is updated");
        }
        catch(err){
          console.log(err);
        }
      }
    })
  })


  program.command("Mark")
  .description("Mark to completed")
  .argument("<todoId>", "Enter todo id to mark")
  .action((id) => {
    fs.readFile("./todoData.json", "utf8", (err, data) => {
      let found = false;
      if (err) {
        console.log(err);
      }
      else {
        const todoArr = JSON.parse(data);
        todoArr.forEach(todo => {
          if (todo.id == id){
            todo.isCompleted = !todo.isCompleted;
            found = true;
          }
        })
        const updatedJsonData = JSON.stringify(todoArr, null, 2);
        fs.writeFileSync("./todoData.json", updatedJsonData);
        if (found){
          console.log("Todo with id :", id, "Marked");
        }
        else{
          console.log("Todo with id :", id, "Not found")
        }
      }
    })
  })

  program.command("Delete")
  .description("Delete Todo")
  .argument("<todoId>", "Enter todo id to delete")
  .action((id) => {
    fs.readFile("./todoData.json", "utf8", (err, data) => {
      let found = false;
      if (err) {
        console.log(err);
      }
      else {
        const todoArr = JSON.parse(data);
        const filteredTodo = todoArr.filter(todo => {
          if (todo.id == id){
            found = true;
            return false;
          }
          else{
            return true;
          }

        })
        const updatedJsonData = JSON.stringify(filteredTodo, null, 2);
        fs.writeFileSync("./todoData.json", updatedJsonData);
        if (found){
          console.log("Todo with id :", id, "Deleted");
        }
        else{
          console.log("Todo with id :", id, "Not found")
        }
      }
    })
  })




program.parse();