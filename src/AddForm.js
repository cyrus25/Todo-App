import React, {Component} from 'react'



class AddToDo extends Component{



    state={

         content:''

    }


     handleChange=(e)=>{
        

        console.log(e.target.value);
         this.setState({

            content:e.target.value

         })

     }
     handleSubmit = (e)=>{



        e.preventDefault();

        console.log(this.state.content);

        this.props.addToDo(this.state);

        this.setState({
            content:''
        })

     }



     render(){


      return(


        <div>


        <form onSubmit={this.handleSubmit}>


          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}></input>
          


        </form>



        </div>





      )





     }





}
export default AddToDo;