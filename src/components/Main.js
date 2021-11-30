import React, { Component } from "react"
import Header from "./Header"
import Content from "./Content"
import Weather from "./Weather"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            date: new Date(),
            loading: true
        }
    }
    async componentDidMount() {
        await Weather.Weather()
            .then((res) => {
                this.setState({ data: res.data, loading: false })
            })
    }
    render() {
        if (this.state.loading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else {
            let temperature = Math.round(this.state.data.main.temp);
            let feelsLike = Math.round(this.state.data.main.feels_like)
            let humidity = this.state.data.main.humidity
            let wind = this.state.data.wind.speed;
            //let test = this.state.data.main.cloud;
            let description = this.state.data.weather[0].description
            let Weathericon = `http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@2x.png`;

            return (
                <div className="main">
                    <Header />
                    <Content>
                        <div className="container">
                            <h1 className="toronto">{this.state.data.name}</h1>
                            <text className="date">{this.state.date.toDateString()}</text>
                            <img className="Weathericon" src={Weathericon} />
                            <text className="description">{description}</text>
                            <text className="temperature">{temperature}&deg;C</text>
                            <text className="feelsLike">Feels like: {feelsLike}&deg;C</text>
                            <text className="Humidity">Humidity: {humidity} %</text>
                            <text className="Wind">Wind: {wind} km/h</text>
                        </div>
                    </Content>
                </div>
            )
        }

    }
}
export default Main