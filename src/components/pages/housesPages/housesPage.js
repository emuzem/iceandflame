import React, {Component} from 'react';
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import RowBlock from "../../rowBlock";

export default class HousesPage extends Component {
    gotService = new gotService();
    state = {
        selectedHouse: null,
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
            selectedHouse: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllHouses}
                      renderItem={(item) => item.name}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedHouse} function={this.gotService.getHouse.bind(this, this.state.selectedHouse)}>
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

