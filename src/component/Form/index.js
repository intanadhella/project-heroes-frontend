import React from 'react'
import axios from 'axios';
import { useFormik} from 'formik';
import { Card, Button, Form } from 'react-bootstrap';
import './index.css';
import foto from './indonesia.jpg'

const FormHeroes = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            born: '',
            dead: '',
            description: '',
            establishment: ''
        },
        onSubmit: (values, action) => {
            const apiURL = process.env.REACT_APP_APIURL
            axios.post(`${apiURL}/heroes/post`, values);
            action.resetForm();
        }
    })
    
    return (
       <>
            <Card className="text-left">
                <Card.Img variant="top" src={foto}></Card.Img>
                <Card.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="name" 
                            onChange={formik.handleChange} 
                            value={formik.values.name}
                            placeholder="Nama Pahlawan">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lahir</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="born" 
                            onChange={formik.handleChange} 
                            value={formik.values.born}
                            placeholder="Tahun Lahir">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wafat</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="dead" 
                            onChange={formik.handleChange} 
                            value={formik.values.dead}
                            placeholder="Tahun Wafat">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Keterangan</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="description" 
                            onChange={formik.handleChange} 
                            value={formik.values.description}
                            placeholder="Keterangan">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Penetapan</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="establishment" 
                            onChange={formik.handleChange} 
                            value={formik.values.establishment}
                            placeholder="Tahun Jadi Pahlawan">
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" block>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
    
}
export default FormHeroes;