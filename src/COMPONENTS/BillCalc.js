import React, { Component } from "react";
import '../CSS/BillCalc.css'


class BillCalculator extends Component {

    state = {
        billAmount:''
    }



  calulateBill = () => {
    let unit = document.getElementById("unit").value;

    if (unit === "") {
      alert("please enter the unit");
    } 
    
    else {
      if (isNaN(unit)) {
        alert("please enter the numbers only");
      }
      else {
     
        if(unit>=0 && unit<= 50){

            let bill = unit *3.50;

            this.setState({
                billAmount:bill
            })
           
        }
        else if(unit>50 && unit<=150){

            let bill = (50*3.50) +(unit-50)*4.00;
            this.setState({
                billAmount:bill
            })

        }

        else if(unit>150 && unit<=250){

            let bill = (50*3.50)+(100*4.00)+(unit-150)*5.20;
            this.setState({
                billAmount:bill
            })

        }
        else{

      let bill = (50*3.50)+(100*4.00)+(150*5.20)+(unit-250)*6.50;
        this.setState({
          billAmount:bill
       })
        }

      }
    }
  };

  render() {
    return (
      <>

      <div id="bill_calc">
        <h1 style={{marginTop:"15px"}}>BILL CALCULATOR</h1>
        <p>Calculate your Bill-amount</p>
       UNITS: <input type="text" id="unit" />

       <div>  <button onClick={this.calulateBill}>calculate Bill</button></div>

        <p id="pid">Total Amount to be paid:</p>

        <div id="result">₹: {this.state.billAmount}</div>

        </div>
      </>
    );
  }
}

export default BillCalculator;