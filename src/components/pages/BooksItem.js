import React from 'react';
import gotService from "../../services/gotService";
import ItemList from "../itemList";
import {Field} from "../itemDetails";
import ItemDetails from "../itemDetails";

export default class BooksItem extends React.Component {
    gotService = new gotService();

    render () {
        return (
            <ItemDetails itemId={this.props.bookId} function={this.gotService.getBook.bind(this, this.props.bookId)}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}
