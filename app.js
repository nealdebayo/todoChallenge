const todos = [
  { id: 1, name: 'Buy soup', completed: false },
  { id: 2, name: 'Bathe the dog', completed: true },
  { id: 3, name: 'Get oil changed', completed: true },
  { id: 4, name: 'Feed the cat', completed: false },
  { id: 5, name: 'Complete todo challenge', completed: false }
];

const TodoListItem = (props) => {
     if (props.todo.show===true){
      return (
        <div>
        <p>Name:{props.todo.name}</p>
        <p>Completed:{String(props.todo.completed)}</p>
     </div>
      );  
     }
     
     
 
    
}
class TodoList extends React.Component {
  constructor(props){
      super()
      
     const todos = props.todos.map(todo=>{
        return {...todo, show: true, showbtn: true}
      })
      this.state = {
        todos
      }
    }
   
   toggleItem = (id) => {
    let newtodos = this.state.todos.map(todo=>{
      if (todo.id == id){
        return {...todo, show: !todo.show}
      }
      return {...todo}
      })
    
    this.setState({
      todos: newtodos
    })
 }
   showItem = (value) => {

     if (value === "all"){
        let newtodos = this.state.todos.map(todo=>{
        return {...todo, show: true, showbtn: true}
      })
    
    this.setState({
      todos: newtodos
    })
     }
     if (value === "complete"){
        let newtodos = this.state.todos.map(todo=>{
          if (todo.completed===true)
             return {...todo, show: true, showbtn:true}
          else
            return {...todo, show: false, showbtn: false}
      })
    
    this.setState({
      todos: newtodos
    })
     }
    if (value === "incomplete"){
      let newtodos = this.state.todos.map(todo=>{
        if (todo.completed===false)
           return {...todo, show: true, showbtn: true}
        else
          return {...todo, show: false, showbtn: false}
      })
    
      this.setState({
        todos: newtodos
      })
     } 

   }
   
   todoList = (todo) => {
     if (todo.show===true){
        return (
             <TodoListItem todo={todo} show={todo.show} key={todo.id} />

        )
     }
   }
     todoListBtn = (todo) => {
          if (todo.showbtn===true){
        return (
             <button onClick={()=>this.toggleItem(todo.id)}>Toggle</button>
     )
     }
     
    
   }
  render () {    
    return (
      <div>
        <button onClick={()=>this.showItem("all")}>all</button>
        <button onClick={()=>this.showItem("complete")}>completed</button>
        <button onClick={()=>this.showItem("incomplete")}>incomplete</button>
        
        { this.state.todos.map(todo=>{        
        return (<div>
            {this.todoList(todo)}
            {this.todoListBtn(todo)}
            </div>
            );}
        )}
      </div>
    );
  }
}

ReactDOM.render(
	<TodoList todos={todos}/>,
  document.getElementById('root')
);