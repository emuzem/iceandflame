import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import NewRandomChar from "../newRandomChar";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import CharacterPage from "../pages/characterPage";
import BooksItem from "../pages";
import HousesPage from "../pages/housesPages";
import BookPage from "../pages/booksPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

export default class App extends Component {

    gotService = new gotService();

    constructor(props) {
        super(props);
        this.state = {
            randomCharShown: true,
            error: false,
            selectedHouse: 20
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    componentDidCatch(error, errorInfo) {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar() {
        let status;
        if (this.state.randomCharShown === true) {
            status = false;
        } else {
            status = true;
        }
        this.setState({
            randomCharShown: status,
        });
    }

    render() {
        const randomCharToShow = this.state.randomCharShown ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}} className='d-flex justify-content-center'>
                                {randomCharToShow}
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <NewRandomChar onToggle={this.toggleRandomChar}/>
                            </Col>
                        </Row>

                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};
