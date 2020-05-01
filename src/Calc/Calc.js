import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate}
    }

    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({result: ((countCurrency) / this.state.rate[typeCurrency]).toFixed(2)})
    }

    render() {
        return (
            <div className="Calculator">
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу обменять</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" name='count-currency'/>
                            <select name="type-currency" id="">
                                {Object.keys(this.props.rate).map((keyName) =>
                                    (
                                        <option key={keyName} value={keyName}>{keyName}</option>
                                    )
                                )}
                            </select>
                            <button>Рассчитать</button>
                        </form>
                    </div>
                    <div>
                        <h4 className="calc-res">Результат</h4>
                        <p className="calc-res">USD {this.state.result}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;
