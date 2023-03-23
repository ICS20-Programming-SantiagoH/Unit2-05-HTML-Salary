// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the amount of money you receive after taxes.
 */
function calculate() {  
  
  const TAX_RATE = 0.2005
  
  // Data being collected 
  let hoursWorked = parseFloat(document.getElementById('hours').value);
  let rate = parseFloat(document.getElementById('rate').value);
  let totalPay = hoursWorked * rate;
  let tax = totalPay * TAX_RATE;
  let takeHomeSalary = totalPay - tax;
  
  // Data being shown
  document.getElementById('takeHomeSalary').innerHTML = 'After taxes, your take home salary is $' + takeHomeSalary.toFixed(2)
  document.getElementById('taxPaid').innerHTML = 'Your tax owed is $' + tax.toFixed(2)
}