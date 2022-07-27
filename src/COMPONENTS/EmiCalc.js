import React, { Component } from "react";
// import "../CSS/EmiCalculator.css";
import '../CSS/EmiCalc.css'

class EmiCalculator extends Component {

  state = {

    TotalPayment:'',
    emiVal:'',
    SimpleInterest:'',
    table_click:'none',
    Rs:'₹'

  }


  calculate_emi = () => {

    let loan_amount = document.getElementById("loan_amount").value;
    let interest = document.getElementById("interest").value;
    let tenure_month = document.getElementById("tenure_month").value;
    let tenure_year = document.getElementById("tenure_year").value;

    if (tenure_month === "") {
      if (tenure_year === "") {
        alert("fill the full details");
      } 
      else
      {
        if (isNaN(tenure_year)) {
          alert("please enters numbers only");
        } 
        else 
        {
          tenure_year = tenure_year * 12;
          interest = interest / 12 / 100;

          let emi_val =
            (loan_amount * interest * Math.pow(1 + interest, tenure_year)) /
            (Math.pow(1 + interest, tenure_year) - 1);

            emi_val = Math.round(emi_val);

            let simple_interest = (emi_val*tenure_year-loan_amount);
            let total_payment = (simple_interest+loan_amount);
            this.setState({
              emiVal:emi_val,
              SimpleInterest:simple_interest,
              TotalPayment:total_payment
            })
          
        }
      }
    }
    else
    {
      if (tenure_month === "") {
        alert("enter full details");
      } 
      else 
      {
        if (isNaN(tenure_month)) {
          alert("please fill numbers only");
        } 
        else 
        {
          interest = interest / 12 / 100;
          let emi_val =
            (loan_amount * interest * Math.pow(1 + interest, tenure_month)) /
            (Math.pow(1 + interest, tenure_month) - 1);

            emi_val = Math.round(emi_val)

            let simple_interest = (emi_val*tenure_month-loan_amount);
            let total_payment = (simple_interest+loan_amount);

            this.setState({
              emiVal:emi_val,
              SimpleInterest:simple_interest,
              TotalPayment:total_payment
            })

          }
      }
    }
  }

  reset_emi = ()=>{

      document.getElementById("loan_amount").value = '';
      document.getElementById("interest").value = '';
      document.getElementById("tenure_month").value = '';
      document.getElementById("tenure_year").value = '';

      document.getElementById('Mytable').style.display = 'none';
      document.getElementById('result').innerHTML = '';
 }

 emi_details = ()=>{
    
  this.setState({
  table_click:'block'

  })

 }

  render() {
    return (
      <>
        <div className="container">
  
         <h1>EMI CALCULATOR</h1>

          <div>
            Loan amount:- <input type="text" id="loan_amount" />{" "}
          </div>
          <div>
            Interest(%):
            <input type="text" id="interest" />
          </div>
          <div>
            Tenure:
            <input type="text" id="tenure_year" placeholder="in years" />
            <input type="text" id="tenure_month" placeholder="in months" />
          </div>

          <div>
            <button onClick={this.calculate_emi}>Calculate EMI</button>
            <button onClick={this.reset_emi}>Reset EMI</button>
            <button onClick={this.emi_details}>Details</button>
          </div>
         

          <div id="result">MONTHLY EMI : {this.state.emiVal} {this.state.Rs}</div>
        <center>
        <table id="Mytable" style={{display:this.state.table_click}}>
          <tr>
            <td>Monthly Emi</td>
            <td>{this.state.emiVal}</td>
          </tr>
          <tr>
            <td>Total Interest</td>
            <td>{this.state.SimpleInterest}</td>
          </tr>
          <tr>
            <td>Total payment</td>
            <td>{this.state.TotalPayment}</td>
          </tr>
          </table>
          </center>
        </div>
      </>
    );
  }
}

export default EmiCalculator;