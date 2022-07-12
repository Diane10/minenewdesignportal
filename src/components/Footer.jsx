import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/home.css'

function Footer() {
    return (
        <footer>
            <Container className='footer'>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; mine
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
