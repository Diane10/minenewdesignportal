import React from 'react'
import { Container, Image, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <header className='header'>
                <Navbar bg='primary' variant='dark' sticky='top'>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href='/'><Image src='/Images/mine.jpg' 
                            alt='Mine Logo' width='50' height='50' 
                            className='d-inline-block align-top' rounded/> </Navbar.Brand>
                        </LinkContainer>
                    </Container>
                </Navbar>
            </header>          
        </div>
    )
}

export default Header
