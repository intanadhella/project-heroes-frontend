import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Card, Row, Col } from 'react-bootstrap';

export default class Data extends Component {
    constructor(props){
        super(props)
        this.state = {heroes: []}
    }
    componentDidMount(){
        const apiURL = process.env.REACT_APP_APIURL
        axios.get(`${apiURL}/heroes/get`)
            .then(response =>{
                const heroes = response.data;
                this.setState({heroes})
            })
    }
    render() {
        let showData = this.state.heroes.map(item =>
            <Col md={12} className="mb-4" key={item._id}>
                <Card>
                    <Card.Header className="text-center">
                        <h4>{item.name} <small>({item.born} - {item.dead})</small></h4>
                    </Card.Header>
                    <Card.Body>
                        <div>Keterangan: </div>
                        <p><small>{item.description}</small></p>

                        <div>Penetapan: </div>
                        <div>{item.establishment}</div>
                    </Card.Body>
                </Card>
            </Col>
        )
        return (
            <>
                <Row>
                    { showData }
                </Row>
            </>
        )
    }
}
