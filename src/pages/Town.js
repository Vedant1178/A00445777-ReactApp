import React from 'react';
import './town.css'

class Town extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: 0,
            unit: 'C',
            statusIconFileName: 'cold'
        }
        this.changeWeatherType = this.changeWeatherType.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);

    }

    changeWeatherType() {
        let currentTemp;
        if (this.state.unit === 'C') {
            currentTemp = (this.state.temp * (9 / 5)) + 32;
            this.setState({ unit: 'F' });
        } else {
            currentTemp = (this.state.temp - 32) * (5 / 9);
            this.setState({ unit: 'C' });
        }
        currentTemp =  Math.round(currentTemp);
        this.setState({ temp: currentTemp });
    }

    getWeatherData() {
        const api_key = '39e72aa7c206ec8aaca0c03ba76989b7';
        const city = 'Halifax';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

        fetch(url)
            .then(result => result.json())
            .then((data) => {
                const currentTemp = data['main']['temp'];
                this.setState({ temp: currentTemp });
                if (currentTemp <= 10) {
                    this.setState({ statusIconFileName: 'cold' });
                } else if (currentTemp > 10 && currentTemp < 20) {
                    this.setState({ statusIconFileName: 'mild' });

                } else {
                    this.setState({ statusIconFileName: 'sunny' });

                }
            })
    }
    componentDidMount() {
        this.getWeatherData();
    }

    render() {
        this.currentTotal += 1;
        return (
            <div className='about-me'>
                <img src='./town.jpg' alt='town' className='town-img' />
                <h1 className='about-heading'>I live in Halifax, NS, Canada</h1>
                <div className='about-text'>
            </div>
                <div className='weather-info'>
                    <div className='weather-data'>
                        <img src={'./' + this.state.statusIconFileName + '.png'} alt='weather status' className='weather-icon' />
                        <div
                            className='weather-data'
                        >
                            {this.state.temp} {this.state.unit}
                        </div>
                        <button
                            className='change-type'
                            onClick={this.changeWeatherType}
                        >
                            Change Unit
                    </button>
                    </div>


                </div>
            </div>
        );
    }
}

export default Town;