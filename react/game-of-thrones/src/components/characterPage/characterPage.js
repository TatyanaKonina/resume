import { Component } from 'react'
import {Col,Row} from 'reactstrap'
import ItemList from "../itemList"
import Error from '../error'
import PersonDetails from "../personDetails"
import gotService from '../../services/gotServices'

const RowBlock = ({left,rigth})=>{
    return(<Row>
                        <Col md='6'>
                           {left}
                        </Col>
                        <Col md='6'>
                            {rigth}
                        </Col>
            </Row>)
}
export default class CharacterPage extends Component {
    gotService = new gotService();
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
        const charDetails = (<PersonDetails charId={this.state.selectedChar}/>)
        const itemList = ( <ItemList 
                            renderItem={( {name,gender}) => `${name} (${gender})`}
                            getData={this.gotService.getAllCharacters}
                            onCharSelected={this.onCharSelected}/>)
        return (
           <RowBlock left={itemList} rigth={charDetails}></RowBlock>
        )
    }

}