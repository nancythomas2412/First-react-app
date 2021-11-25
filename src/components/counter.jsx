import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Counter extends Component {
    state = {
        count : 0,
        imageUrl : "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
    };

    // styles = {
    //     fontSize: 15,
    //     fontWeight: 'bold'
    // };
  render() { 
    return ( 
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="11111111111" /> */}  
        <span style={{ fontSize: 16 }} className= {this.getBadgeClasses}>{this.formatCount()}</span>
        <button className= "btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount (){
      //return this.state.count==0 ? 'zero' : this.state.count; OR 
      const { count } = this.state;
      return count === 0 ? "Zero" : count;
  }
}

export default Counter;