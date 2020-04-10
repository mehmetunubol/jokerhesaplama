import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addCalculation } from '../../store/actions/calculationActions';
import { Redirect } from 'react-router-dom'

import './styles/joker.css';

const Result = (props) => {

  const pairs = props.calculations;
  if (pairs === undefined) {
    return (<Redirect to="/"/>);
  }
  let results = [];
  let totalResult = {"calcTotal": 0,"new": 0, "old": 0, "joker": 0, "percent":0};
  let valid = 1;
  let allPairNames = [];
  pairs.map( pair => {
    if (pair.name === "" || pair.price === "" || pair.price === "0") {
      valid = 0;
    } else {
      allPairNames.push(pair.name);
    }
    return 1;
  });
  if(valid === 0) {
    alert("Tüm alanlar doldurulmalı...");
    return 0;
  }
  totalResult = pairs.reduce((previousValue, currentValue) => {
    return ({
      price: parseInt(previousValue.price) + parseInt(currentValue.price),
    })
  });
  totalResult.old = totalResult.price;

  if (totalResult.old >= 120) {
    totalResult.joker = 45;
  } else if (totalResult.old >= 70) {
    totalResult.joker = 25;
  } else if (totalResult.old >= 40) {
    totalResult.joker = 15;
  } else if (totalResult.old >= 30) {
    totalResult.joker = 10;
  } else {
    totalResult.joker = 0;
  }
  totalResult.new = totalResult.old - totalResult.joker;
  totalResult.percent = Math.round( ( (totalResult.old - totalResult.new) * 100) / totalResult.old) + "%";

  if (1) {
    const calculation_percentage = totalResult.new / totalResult.old;
    totalResult.calcTotal = 0;
    results = pairs.map( (pair, i) => {
      let newPrice = Math.round(calculation_percentage * parseInt( pair.price));
      let percent = Math.round(( (parseInt(pair.price) - newPrice) * 100) / parseInt(pair.price));
      let gain = parseInt(pair.price) - newPrice;
      totalResult.calcTotal += newPrice;
      return {"name": pair.name, "old":pair.price, "new": newPrice, "gain":  gain, "percent": percent + '%'};
    });
  } else {

  }
  const resultList = results ? (
    results.map( (pair, i) => {
      return (
        <tr key={"pair-" + i}>
          <td>{pair.name}</td>
          <td>{pair.old} TL</td>
          <td>{pair.gain} TL</td>
          <td>{pair.percent}</td>
          <td>{pair.new} TL</td>
        </tr>
      )
    })
  ) : (
    <tr key="noResult"/>
  );

  const total = totalResult ? (
        <tr key="total-row" className="totalRow">
          <td>Toplam</td>
          <td>{totalResult.old} TL</td>
          <td>{totalResult.joker} TL</td>
          <td>{totalResult.percent}</td>
          <td>{totalResult.calcTotal} TL</td>
        </tr>
      
  ) : (
    <tr key="noTotal"/>
  );
  
  props.addCalculation({...totalResult, "pairs": allPairNames});

  return (
    <div className="container topMargin">
      <div className="row">
        <div className="card-panel">
        { results &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ortak</th>
              <th>Jokersiz</th>
              <th>İndirim</th>
              <th>Kazanç (%)</th>
              <th>Ödenecek</th>
            </tr>
          </thead>
          <tbody>
            {resultList}
            {total}
          </tbody>
        </Table>
        }
        </div>
      </div>
      <div className="row">
        <Link to='/' className="waves-effect waves-light btn-large red darken-4 right">Done</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    calculations: state.localcalc.calculations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCalculation: (calculation) => dispatch(addCalculation(calculation)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);