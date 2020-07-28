import React from 'react';
import CardBuku from './CardBuku'
import API from '../axios/API';

export default class DaftarBuku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }
    componentDidMount = async () => {
        await API.get('/blog')
            .then(res => this.setState({
                books: res.data
            }))
    }

    refreshData = (books) => {
        console.log(books)
        this.setState({
            books
        })
    }

    render() {
        return (
            <CardBuku buku={this.state.books} key={this.state.books.id} refresh={(data) => this.refreshData(data)} />
        )
    }
}