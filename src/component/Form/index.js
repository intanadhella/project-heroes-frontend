import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHeroes } from './../../actioncreator';
import { Card, Button, Form } from 'react-bootstrap';
import './index.css';
import foto from './indonesia.jpg';

const FormHeroes = (props) => {
    const initialState = {
        name: '',
        born: '',
        dead: '',
        description: '',
        establishment: ''
    }
    const [data, setData] = useState(initialState);

    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        props.addHeroes(data);
    }
    
    return (
       <>
            <Card className="text-left">
                <Card.Img variant="top" src={foto}></Card.Img>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="name" 
                            onChange={handleChange} 
                            value={data.name}
                            placeholder="Nama Pahlawan">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lahir</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="born" 
                            onChange={handleChange} 
                            value={data.born}
                            placeholder="Tahun Lahir">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wafat</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="dead" 
                            onChange={handleChange} 
                            value={data.dead}
                            placeholder="Tahun Wafat">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Keterangan</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="description" 
                            onChange={handleChange} 
                            value={data.description}
                            placeholder="Keterangan">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Penetapan</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="establishment" 
                            onChange={handleChange} 
                            value={data.establishment}
                            placeholder="Tahun Jadi Pahlawan">
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" block>Tambah</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.heroes
    }
}

const mapDispatchToProps = {
    addHeroes
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHeroes)