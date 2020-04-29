import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddForm';


class App extends Component{



  state={

           todos: [
             {id:1, content:'buy milk'},
             {id:2, content:'buy fruits'},
           ]


  }
  

  deleteToDo=(id)=>{


    console.log(id);

    let todos=this.state.todos.filter(todo=>{   //not altering the state array;  //return the array after removing element with id;
                
      return id !== todo.id;   //remove element if false is returned

    })    //return new array


    this.setState({
      todos:todos
    })
     



  }
  addToDo=(todo)=>{


        todo.id=Math.random();
        let todos=[...this.state.todos,todo];
        this.setState({
          todos:todos
        })
     

  }
  

     render(){

            return(


              <div className="todo-app container">
                   

                   <h1 className="center blue-text">Todo's</h1>

                   <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
                     <AddToDo addToDo={this.addToDo}/>
               


              </div>



            );

           


     }



}

export default App;
