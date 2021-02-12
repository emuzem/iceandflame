import React, {Component} from 'react';
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import {withRouter} from 'react-router-dom';

 class BookPage extends Component {
    gotService = new gotService();
    state = {
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllBooks}
                      renderItem={(item) => item.name}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedBook} function={this.gotService.getBook.bind(this, this.state.selectedBook)}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        return (
            <ItemList onItemSelected={(id) => {
                this.props.history.push(id)
            }}
                      getData={this.gotService.getAllBooks}
                      renderItem={(item) => item.name}/>
        )
    }
}

export default withRouter(BookPage);

