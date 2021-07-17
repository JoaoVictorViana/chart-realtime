import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart , XAxis, Bar, YAxis} from 'recharts';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '4d2196525ad745969024',
//     cluster: 'us2',
//     // encrypted: true,
// });

// window.Echo.channel(`feedbacks`)
//     .listen('ServerExample', (e) => {
//         console.log(e);
//     });

Pusher.logToConsole = true;

var pusher = new Pusher('4d2196525ad745969024', {
    cluster: 'us2'
});



class Charts extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        this.getDatas = this.getDatas.bind(this);
    }

    async getDatas() {
        const response = await fetch(
            '/api/feedbacks',
            {
                method: 'GET'
            }
        )
        
        this.setState({
            data: await response.json()
        });
    }

    componentDidMount() {
        this.getDatas();
        var channel = pusher.subscribe('feedbacks');
        channel.bind('feedback-events', (function(data) {
            console.log()
            if (data) {
                this.setState({
                    data: data.feedbacks
                });
            }
        }).bind(this));
    }

    render() {
        return (
            <BarChart 
                width={400}
                height={400}
                data={this.state.data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="like" fill="#ff7300"/>
                <Bar dataKey="other" fill="#82ca9d"/>
            </BarChart >
        );
    }
}


const element = document.getElementById('Chart');
ReactDOM.render( <Charts token={element.dataset.token} />, element );