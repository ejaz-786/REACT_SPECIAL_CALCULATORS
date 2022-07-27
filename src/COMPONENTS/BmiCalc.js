import React, { Component } from "react";
 import '../CSS/BmiCalc.css'

class BmiCalculator extends Component {

    state= {
       bmiVal:'',
       Status:''
    }

  checkBmi = () => {
    let x = document.getElementById("select").value;
    if (x === "0") {
      alert("select the type");
    }

    if (x === "meter") {
      let height_val = document.getElementById("height").value;
      let weight_val = document.getElementById("weight").value;

      if (height_val === "" || weight_val === "") {
        alert("fill height and weight both");
      }
      
      else 
      {
        let bmi_val = weight_val / (height_val * height_val);
        bmi_val = bmi_val.toFixed(2);

        if (isNaN(bmi_val)) {
          alert("please enter the numbers only");
        } else {
          if (bmi_val < 18.5) {
    
            this.setState({bmiVal:bmi_val,Status:"You are underweight"})
          } else if (bmi_val > 18.5 && bmi_val < 24.9) {
         
            this.setState({bmiVal:bmi_val,Status:"You are healthyweight"})
          } else if (bmi_val > 25.0 && bmi_val < 29.9) {
 
            this.setState({bmiVal:bmi_val,Status:"You are overweight"})
          } else {
      
            this.setState({bmiVal:bmi_val,Status:"You are obesity"})
          }
        }
      }
    }
    if (x === "inch") {
      let height_val = document.getElementById("height").value;
      let weight_val = document.getElementById("weight").value;
      height_val = height_val / 39.3701;
      weight_val = weight_val / 2.20462;

      if (height_val == null) {
        alert("fill the height");
      }
      if (weight_val == null) {
        alert("fill the weight");
      } else {
        let bmi_val = weight_val / (height_val * height_val);
        bmi_val = bmi_val.toFixed(2);

        if (isNaN(bmi_val)) {
          alert("please enter the numbers only");
        } else {
          if (bmi_val < 18.5) {
            document.getElementById("result").innerHTML = bmi_val;
            document.getElementById("outcome").innerHTML = "underweight";
          } else if (bmi_val > 18.5 && bmi_val < 24.9) {
            document.getElementById("result").innerHTML = bmi_val;
            document.getElementById("outcome").innerHTML = "healthyweight";
          } else if (bmi_val > 25.0 && bmi_val < 29.9) {
            document.getElementById("result").innerHTML = bmi_val;
            document.getElementById("outcome").innerHTML = "overweight";
          } else {
            document.getElementById("result").innerHTML = bmi_val;
            document.getElementById("outcome").innerHTML = "obesity";
          }
        }
      }
    }
  };

  render() {
    return (
    <>
        <div className="container">
     
          <div id="heading">
          <h1 >BMI CALCULATOR</h1>
          <p>calculate your body mass index value </p>

          </div>
       
          <div id="div-1" >
          <label>Input type:</label>

            <select name="select" id="select" style={{height:"6.5vh",width:"30%"}}>
              <option value="0">----select type---</option>
              <option value="meter">kg-meters</option>
              <option value="inch">ponds-inches</option>
            </select>

          </div>
        

           <div style={{paddingTop:"55px"}}>
           <label >Height :</label>
           <input type="text" id="height" />
           </div>


            <div>
              <label>Weight :</label>
              <input type="text" id="weight" />
            </div>    
        
        

            <button id="bmi_btn" onClick={this.checkBmi}>
              check BMI
            </button>
            
           <div>
            
            <div id="result">YOUR BMI VALUE IS:   {this.state.bmiVal}</div>
            <div>YOUR STATUS IS:    {this.state.Status} </div>
           </div>


        </div>
      </>
    );
  }
}

export default BmiCalculator;