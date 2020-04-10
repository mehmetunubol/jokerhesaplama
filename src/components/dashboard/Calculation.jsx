import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addlocalCalc } from '../../store/actions/localCalcAction';

class Calculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: {
        datas: [{ name: "Ortak 1", price: ""}, { name: "Ortak 2", price: ""}, { name: "Ortak 3", price: ""}],
        result: [],
        total: {},
        optionPercent: 1,
        optionPayment: 1,
      },
      error: null,
    };
  }  
  addNewPair = () => {
    let newDatas = this.state.entity.datas;
    newDatas.push({name: "Ortak ", price: ""  });
    this.setState(
      {
        ...this.state,
        entity: {datas: newDatas}
      }
    );
  }

  removePair = (id) => {
    let newDatas = this.state.entity.datas;
    newDatas.splice(id, 1);
    this.setState(
      {
        ...this.state,
        entity: {datas: newDatas}
      }
    );
  }

  onChange = ( target, id) => {
    let option = 0;
    if (target.id === "pairName") {
      this.setState({
        ...this.state,
        entity: { 
          datas:  this.state.entity.datas.map((s, _idx) => {
            if (_idx !== id) return s;
            return { ...s, name: target.value };
          })
      }});
    } else if (target.id === "pairPrice") {
      this.setState({
        error: null,
        entity: { 
          datas:  this.state.entity.datas.map((s, _idx) => {
            if (_idx !== id) return s;
            return { ...s, price: target.value };
          })
      }});
    } else if (target.id === "formCheckboxPercent") {
      if (target.checked) {
        option = 1;
      } else {
        option = 0;
      }
      this.setState({
        entity: {
          ...this.state.entity,
          optionPercent: option
        }
      });
    } else if (target.id === "formCheckboxPayment") {
      if (target.checked) {
        option = 1;
      } else {
        option = 0;
      }
      this.setState({
        ...this.state,
        entity: {
          ...this.state.entity,
          optionPayment: option
        }
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.calculateResult()){
      this.props.history.push('/result');
    }
    

  }

  calculateResult = () => {
    let valid = true
    this.state.entity.datas.map( pair => {
      if (pair.name === "" || pair.price === "" || pair.price === "0" || !pair.price.match(/^-{0,1}\d+$/) ) {
        valid = 0;
        console.log("valid 0");
      }
      return null;
    });
    if(valid === 0) {
      this.setState({
        ...this.state.entity,
        error: "Tüm alanlar doldurulmalı, Ücret sadece rakamları içermeli"
      });
      return false;
    } else {
      this.props.addLocalCalcs(this.state.entity.datas);
      return true;
    }
  }

  render() {
    console.log(this.state.error);
    let datas = this.state.entity.datas;
    const dataList = datas ? (
      datas.map( (data, i) => {
        return (
          <div className="row" key={i} >
            <button href="" type="button" className="center right btn-floating btn-small waves-effect waves-light red darken-4" onClick={() => {this.removePair(i)}}>
              <i className="material-icons">remove</i>
            </button>            
            <div className="input-field col s6">
              <input id="pairName" type="text" className="validate" onChange={(e) => {this.onChange(e.target, i)}} />
              <label htmlFor="pairPrice">Ortak {i + 1}</label>
            </div>
            <div className="input-field col s5">
              <input id="pairPrice" type="text" className="validate" onChange={(e) => {this.onChange(e.target, i)}}/>
              <label htmlFor="pairPrice">Ücret</label>
              <i className="material-icons prefix">attach_money</i>
            </div>
          </div>
        )
      })
    ) : (
      <p className="center"> Unexpected error</p>
    );

    return (
      <div className="card-panel">
        <div className="row">
          { this.state.error && <div className="red">{this.state.error}</div>}
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col">
              </div>
              <div className="col right">
                <label>
                  <input disabled id="formCheckboxPercent" type="checkbox" defaultChecked={this.state.entity.optionPercent} onChange={(e) => {this.onChange(e.target)}} />
                  <span>Eşit Dağılım</span>
                </label>
              </div>
              <div className="col right">
                <label>
                  <input disabled id="formCheckboxPayment" type="checkbox" defaultChecked={this.state.entity.optionPercent} onChange={(e) => {this.onChange(e.target)}} />
                  <span>Kredi Kartı</span>
                </label>
              </div>
            </div>
            {dataList}
            <div className="row">
              <button className="btn waves-effect waves-light red darken-4" type="button" name="action" onClick={() => {this.addNewPair()}}>Ortak Ekle
                <i className="material-icons right">person_add</i>
              </button>
              <button className="btn waves-effect waves-light red darken-4 right" type="submit" name="action">Hesapla
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculations: state.localcalc.calculations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLocalCalcs: (calculations) => dispatch(addlocalCalc(calculations)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Calculation));