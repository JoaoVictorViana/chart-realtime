import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BarChart , XAxis, Bar, YAxis} from 'recharts';

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
    }

    render() {
        console.log(this.state.data);
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