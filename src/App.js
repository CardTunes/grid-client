import React, {Component} from 'react';
import axios from 'axios';

class Form extends React.Component {
   state = { 
          row: '' ,
          column: '',
          x1: '',
          y1: '',
          x2: '',
          y2: '',
          x3: '',
          y3: ''};
   handleSubmitRowColumn = async (event) => {
      event.preventDefault();

      // const res = await axios.get('https://localhost:5001/grid/triangle?row=A&column=1');
      const url = `https://localhost:5001/grid/triangle?row=${this.state.row}&column=${this.state.column}`;

      const res = await axios.get(url);
       
      const triangle = res.data;
      this.setState({ 
          x1:triangle.x1,
          y1:triangle.y1,
          x2:triangle.x2,
          y2:triangle.y2,
          x3:triangle.x3,
          y3:triangle.y3

      });
  };
     handleSubmitTriangle = async (event) => {
      event.preventDefault();

      // const res = await axios.get('https://localhost:5001/grid/triangle?row=A&column=1');
      const url = `https://localhost:5001/grid/position?x1=${this.state.x1}&y1=${this.state.y1}&x2=${this.state.x2}&y2=${this.state.y2}&x3=${this.state.x3}&y3=${this.state.y3}`;
      const res = await axios.get(url);
       
      this.setState({ 
          row:res.data.row,
          column:res.data.column

      });  

  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmitRowColumn}>
      <div >Get Triangle Vertices</div>
      <input 
          type="text" 
          value={this.state.row}
          onChange={event => this.setState({ row: event.target.value })}
          placeholder="Enter Row" 
          required 
        />

      <input 
          type="text" 
          value={this.state.column}
          onChange={event => this.setState({ column: event.target.value })}
          placeholder="Enter Column" 
          required 
        />  
    <p/>      
    <button>Submit Position!</button>
    <p/>
      <div>
          <input 
            type="text" 
            value={this.state.x1}
            onChange={event => this.setState({ x1: event.target.value })}
            placeholder="x1" 
          />     

          <input 
            type="text" 
            value={this.state.y1}
            onChange={event => this.setState({ y1: event.target.value })}
            placeholder="y1" 
          />         
        </div>
        <div>
        <input 
          type="text" 
          value={this.state.x2}
          onChange={event => this.setState({ x2: event.target.value })}
          placeholder="x2" 
        /> 
        <input 
          type="text" 
          value={this.state.y2}
          onChange={event => this.setState({ y2: event.target.value })}
          placeholder="y2" 
        />         
        </div>
        <div>

          <input 
            type="text" 
            value={this.state.x3}
            onChange={event => this.setState({ x3: event.target.value })}
            placeholder="x3" 
          /> 
          <input 
            type="text" 
            value={this.state.y3}
            onChange={event => this.setState({ y3: event.target.value })}
            placeholder="y3" 
          />         
        </div>
  


   
       
      </form>
  
     <form onSubmit={this.handleSubmitTriangle}>
           <p/> 
        <button>Submit Triangle!</button>
      </form>      
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  } 
}

export default App;