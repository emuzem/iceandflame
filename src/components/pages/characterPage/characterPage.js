import React, {Component} from 'react';
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import RowBlock from "../../rowBlock";

export default class CharacterPage extends Component {
    gotService = new gotService();
    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllCharacters}
                      renderItem={(item) => item.name}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedChar} function={this.gotService.getCharacter.bind(this, this.state.selectedChar)}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

