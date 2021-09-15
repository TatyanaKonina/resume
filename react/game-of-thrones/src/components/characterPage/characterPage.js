import { Component } from 'react'
import {Col,Row} from 'reactstrap'
import ItemList from "../itemList"
import Error from '../error'
import PersonDetails from "../personDetails"

export default class CharacterPage extends Component {
    state = {
        selectedChar:130,
        error:false
    }
    componentDidCatch(){
        this.setState({error:true})
    }
    onCharSelected = (id) => {
        this.setState({selectedChar:id})
    }
    render (){
        if (this.state.error) {
            return <Error/>
        }
        return (
            <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <PersonDetails charId={this.state.selectedChar}/>
                        </Col>
            </Row>
        )
    }

}