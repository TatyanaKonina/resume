import { Component } from 'react'
import ItemList from "../itemList"
import Error from '../error'
import PersonDetails,{Field} from "../personDetails"
import gotService from '../../services/gotServices'
import RowBlock from '../rowBlock'

export default class CharacterPage extends Component {
    gotService = new gotService();
    state = {
        selectedChar:130,
        error:false
    }
    componentDidCatch(){
        this.setState({error:true})
    }
    onItemSelected = (id) => {
        this.setState({selectedChar:id})
    }
    render (){
        if (this.state.error) {
            return <Error/>
        }
        const charDetails = (
        <PersonDetails charId={this.state.selectedChar}>
            <Field field='gender' label='Gender'></Field>
            <Field field='born' label='Born'></Field>
        </PersonDetails>
        )
        const itemList = ( <ItemList 
                            renderItem={( {name,gender}) => `${name} (${gender})`}
                            getData={this.gotService.getAllCharacters}
                            onItemSelected={this.onItemSelected}/>)
        return (
           <RowBlock left={itemList} rigth={charDetails}></RowBlock>
        )
    }

}