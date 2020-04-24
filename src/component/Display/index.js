import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHeroes, deleteHeroes } from './../../actioncreator';
import './index.css';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Data = (props) => {
    const { data } = props;
    
    const handleRemove = (heroesId) => {
        props.deleteHeroes(heroesId);
    }

    useEffect(() => {
        if(data && !data.length) {
            props.getHeroes()
        }
    }, [])
    
    return (
        <>
            <Row>
                { 
                    data.map((item) => {
                        return (
                            <Col md={12} className="mb-4" key={item._id}>
                                <Card>
                                    <Card.Header className="text-center">
                                        <h4>{item.name} <small>({item.born} - {item.dead})</small></h4>
                                        <Button variant="danger" block size="sm" onClick={() => handleRemove(item._id)}>
                                            Hapus
                                        </Button>
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
                    })
                }
            </Row>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.heroes
    }
}

const mapDispatchToProps = {
    getHeroes,
    deleteHeroes
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)