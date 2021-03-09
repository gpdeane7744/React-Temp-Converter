import React, {Component} from 'react'

class TempConverter extends Component{
    constructor() {
        super()
        this.state = {
            userInput: null,
            convertFrom: 'Fahrenheit',
            convertTo: 'Fahrenheit',
            convertedTemp: null 
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRadioChangeFrom = this.handleRadioChangeFrom.bind(this)
        this.handleRadioChangeTo = this.handleRadioChangeTo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
            this.setState({ userInput: event.target.value })
    }

    handleRadioChangeFrom(event) {
        this.setState({ convertFrom: event.target.value })
    }

    handleRadioChangeTo(event) {
        this.setState({ convertTo: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.convertFrom === 'Fahrenheit') {
            if (this.state.convertTo === 'Celsius') {
                this.setState({
                    convertedTemp: ((this.state.userInput - 32) * 0.559).toFixed(2)
                })
            } else if (this.state.convertTo === 'Kelvin') {
                this.setState({
                    convertedTemp: ((this.state.userInput - 32) * (5 / 9) + 273.15).toFixed(2)
                })
            } else {
                this.setState({ convertedTemp: this.state.userInput })
            }
        } else if (this.state.convertFrom === 'Celsius') {
            if (this.state.convertTo === 'Fahrenheit') {
                this.setState({
                    convertedTemp:
                        (this.state.userInput * 1.8 + 32).toFixed(2)
                })
            } else if (this.state.convertTo === 'Kelvin') {
                this.setState({
                    convertedTemp:
                        (this.state.userInput + 273.15).toFixed(2)
                })
            } else {
                this.setState({
                    convertedTemp:
                        (this.state.userInput).toFixed(2)
                })
            }
        } else {
            if (this.state.convertTo === 'Fahrenheit') {
                this.setState({
                    convertedTemp:
                        ((this.state.userInput - 273.15) * 1.8).toFixed(2)
                })
            } else if (this.state.convertTo === 'Celsius') {
                this.setState({
                    convertedTemp:
                        (this.state.userInput - 273.15).toFixed(2)
                })
            } else {
                this.setState({
                    convertedTemp:
                        (this.state.userInput).toFixed(2)
                })
            }
        }
    }

    render() {
        return (
            <div className="container">
                <form className="tempCard">
                    <div>
                        <input
                            type="number"
                            id="userTemp"
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleSubmit}>Convert</button>
                    </div>
                    <div>
                        <h3>Convert From</h3>
                        <input type="radio"
                            name="tempFrom"
                            id="Fahrenheit"
                            checked={this.state.convertFrom === "Fahrenheit"}
                            value="Fahrenheit"
                            onChange={this.handleRadioChangeFrom}
                        />
                        <label htmlFor="Fahrenheit">Fahrenheit</label>
                        <input type="radio"
                            name="tempFrom"
                            id="Celsius"
                            value="Celsius"
                            checked={this.state.convertFrom === "Celsius"}
                            onChange={this.handleRadioChangeFrom}
                        />
                        <label htmlFor="Celsius">Celsius</label>
                        <input type="radio"
                            name="tempFrom"
                            id="Kelvin"
                            value="Kelvin"
                            checked={this.state.convertFrom === "Kelvin"}
                            onChange={this.handleRadioChangeFrom}
                        />
                        <label htmlFor="Kelvin">Kelvin</label>
                    </div>
                    <div>
                        <h3>Convert To</h3>
                        <input
                            type="radio"
                            name="tempTo"
                            id="Fahrenheit"
                            checked={this.state.convertTo === "Fahrenheit"}
                            value="Fahrenheit"
                            onChange={this.handleRadioChangeTo} />
                        <label htmlFor="Fahrenheit">Fahrenheit</label>
                        <input
                            type="radio"
                            name="tempTo"
                            id="Celsius"
                            value="Celsius"
                            checked={this.state.convertTo === "Celsius"}
                            onChange={this.handleRadioChangeTo}
                        />
                        <label htmlFor="Celsius">Celsius</label>
                        <input
                            type="radio"
                            name="tempTo"
                            id="Kelvin"
                            value="Kelvin"
                            checked={this.state.convertTo === "Kelvin"}
                            onChange={this.handleRadioChangeTo}
                        />
                        <label htmlFor="Kelvin">Kelvin</label>
                    </div>
                </form>
                <p>{this.state.convertedTemp}</p>
            </div>
        )
    }
    
}

export default TempConverter