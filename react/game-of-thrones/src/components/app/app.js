
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';
import Error from '../error';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import gotService from '../../services/gotServices';
import './app.css';

export default class App extends Component {
    gotService = new gotService()
    state = {
        showRandomChar: true,
        
        error: false
    }
    componentDidCatch(){
        this.setState({error:true})
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }
    
    render() {
        if (this.state.error) {
            return <Error/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            renderItem={(item) => (<><span>{item.name}</span><button>Click me</button> </>)}
                            onItemSelected={this.onItemelected} 
                            getData={this.gotService.getAllBooks}>
                            
                            </ItemList>
                        </Col>
                       
                        <Col md='6'>
                            <ItemList 
                            renderItem={ (item) => item.name}
                            onItemSelected={this.onItemSelected} 
                            getData={this.gotService.getAllHouses}>
                            
                            </ItemList>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};