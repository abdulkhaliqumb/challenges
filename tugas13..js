function get_data() {
  const readline = require("node:readline");
  const fs = require('node:fs');
  const result=fs.readFileSync('task.json', 'utf8');
  const dataTask = JSON.parse(result);
  return dataTask;
}


  
function save_data(data) {
  const readline = require("node:readline");
  const fs = require('node:fs');    
  let status =false;
  fs.writeFile(
      "task.json",
      JSON.stringify(data),
      err => {
          if (err) throw err;
         
      }); 
}
  
function deleteTask( id,tasks){
  const idDelete = Number(id);
  const idToDelete = tasks.findIndex(task => task.id == idDelete);
  let retTaskDesc=tasks[idToDelete].taskDesc;
  if (idDelete !== -1) {
   tasks.splice(idToDelete, 1);
  }
x
  console.log("deletesava",tasks);
  save_data(tasks); 
  return retTaskDesc;

}
  
  
function findOutstanding( id,tasks,order){
  tasks = tasks.filter(task => task.complete === false);
  listTask(tasks,order);    
}

function findComplete( id,tasks,order){
  tasks = tasks.filter(task => task.complete === true);
  listTask(tasks,order);    
}

function findTask( id,tasks){
  tasks = tasks.filter(task => task.id === id);
  listTask(tasks);    
}
  
function filterTag(filterText,tasks){
  const tasksFilter = tasks.filter(task => task.tag.includes(filterText));
  listTask(tasksFilter);    
}
  
function updateTask( id,newDescTask,tasks){
  const idFind = id;
  const idToFind = tasks.findIndex(task => task.id === idFind);
  let retTaskDesc=tasks[idToFind].taskDesc;
  if (idToFind !== -1) {
      tasks[idToFind].task = newDescTask;   
  }

  return retTaskDesc;
  
}
function updateStatus( id,status,tasks){
  const idFind = id;
  const idToFind = tasks.findIndex(task => task.id === idFind);
 
  if (idToFind !== -1) {
      tasks[idToFind].complete = status; 
      var retTaskDesc=tasks[idToFind].task;  
  }  
  save_data(tasks); 
  //console.log('return',retTaskDesc);
  return retTaskDesc;
}
function updateTag( id,tags,tasks){
  const idFind = id;
  const idToFind = tasks.findIndex(task => task.id === idFind);
 
  if (idToFind !== -1) {
      //var quotedAndCommaSeparated =  tags.join('","') ;
      tasks[idToFind].tag[0]=tags;   
      var retTaskDesc=tasks[idToFind].task;  
  }
  save_data(tasks); 
  return retTaskDesc;
  
}

function addTask( newTask,tasks){
  //console.log(tasks);
  //console.log(newTask);
  const  member=tasks.push(newTask);
  //console.log(member);
  save_data(tasks) ;
  //listTask(tasks);    
}
  
function listTask(tasks,sort="asc"){
  console.log("Daftar Pekerjaan");
  sort=="asc" ?tasks.sort((a, b) => a.id - b.id): tasks.sort((a, b) => b.id - a.id);
  tasks.forEach(task => {      
          const checked = task.complete===false? " [ ] " : " [X] ";
          console.log(`${task.id}. ${checked} ${task.task}  ${task.tag}`);
  });   
}
function task(){
let task="";
let dataTask=[];
let argvList=[];
process.argv.forEach(function (val, index, array) {

  if (index > 1 )argvList.push(val);

});
//console.log(argvList);
task=argvList.join(" ");



var pilihan=task.split(" ").at(0);
let tagFind="";
console.log ("pertama",pilihan.split(":").at(0));

if (pilihan.split(":").at(0)=='filter'){
  pilihan='filter';
  tagFind=task.split(" ").at(0).split(":").at(1);

}

console.log ("pilihan",pilihan,tagFind);
switch(pilihan) {
  case "list":
      dataTask=get_data();
      listTask(dataTask);    

      break;
  case "task":
      var id=Number(task.split(" ").at(1));
      dataTask=get_data();
      //console.log("dataTask",dataTask);
      findTask(id,dataTask);
      break;
  case "add":  
      console.log("task ",task);        
      var taskDesc = task.split(" ").filter((val,index) => index > 0).join(" ");
      dataTask=get_data();  
           
      var nextId=(dataTask[dataTask.length-1].id)+1;
      const newTask={ id: 0, task: "", complete: false,tag:[]}
      newTask.id=nextId;
      newTask.task=taskDesc;
      addTask(newTask,dataTask);
      console.log(`Task baru '${taskDesc}' berhasil ditambahkan!`);
      break;    
  case "delete":
      var id=Number(task.split(" ").at(1));
      //console.log("task",id);
      dataTask=get_data();
      //console.log("delete x",JSON.stringify(dataTask));
      var delTaskDesc=deleteTask(id,dataTask);
      console.log("Task  '",delTaskDesc.trim,"' berhasil dihapus!");
      break;  
  case "complete":
      var id=Number(task.split(" ").at(1));
      var status =true;
      //console.log("task",id);
      dataTask=get_data();
      var completeTask=updateStatus( id,status,dataTask)
      console.log("Task  '",completeTask.trim,"' telah selesai!");
      break;  
  case "uncomplete":
      var id=Number(task.split(" ").at(1));
      var status =false;
      //console.log("task",id);
      dataTask=get_data();
      
      var completeTask=updateStatus( id,status,dataTask)
      console.log("Task  '",completeTask.trim,"' selesai telah dibatalkan!");
      break;      
  case "list:outstanding" :
      var  order=task.split(" ").at(1);
      //console.log("task",id);
      dataTask=get_data();
      findOutstanding( id,dataTask,order);
      break;          
  case "list:complete" :
      var  order=task.split(" ").at(1);
      //console.log("task",id);
      dataTask=get_data();
      findComplete( id,dataTask,order);
      break;      
  case "tag":  
      console.log("task ",task);   
      var id=Number(task.split(" ").at(1));     
      var tags = task.split(" ").filter((val,index) => index > 1);
      dataTask=get_data();  
           
      var descTask=updateTag(id,tags,dataTask);
      console.log(`tag '${tags}' telah ditambahkan ke daftar '${descTask}'`);
      break;   
    
  case "filter" :
      console.log('tagFind',tagFind);
      dataTask=get_data();  
      filterTag(tagFind,dataTask)

           
  default:
      console.log(">>>  JS TODO <<<");
      console.log("$ node todo.js <command>");
      console.log("$ node todo.js list");
      console.log("$ node todo.js task <task_id>");
      console.log("$ node todo.js add <task_content>");
      console.log("$ node todo.js delete <task_id>");
      console.log("$ node todo.js complete <task_id>");
      console.log("$ node todo.js uncomplete <task_id>");
      console.log("$ node todo.js list:outstanding asc|desc");
      console.log("$ node todo.js list:completed asc|desc");
      console.log("$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
      console.log("$ node todo.js filter:<tag_name>");
}

}
//console.clear();
task();

