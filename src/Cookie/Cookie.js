import React from 'react';
import './Cookie.css';


class Cookie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('CookieAccept') === 'true') {
            this.setState({block: true})
        }
    }

    hideBlock = () => {
        if (this.state.block === false) {
            this.setState({block: true})
            localStorage.setItem('CookieAccept', 'true');
        }
    }

    render() {
        return (
            <div className="container" id="cookie_info">
                <div className="site-content">
                    <div className="well" hidden={this.state.block}>На нашем сайте мы используем cookie для сбора
                        информации технического
                        характера.<br/>В
                        частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                        местоположения.&nbsp;
                        <button className="btn btn-primary btn-sm" onClick={this.hideBlock}>OK</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cookie;
