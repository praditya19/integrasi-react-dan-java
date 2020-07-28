import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/API'

export default class CardBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.buku,

        }
    }

    deleteBuku = (id) => {
        API.delete('blog/' + id)
        let buku = [];
        for (let b = 0; b < this.props.buku.length; b++) {
            if (this.props.buku[b].id !== id) {
                buku.push(this.props.buku[b]);
            }
        }
        this.props.refresh(buku);
    }

    render() {
        return (
            <div style={{ width: '50%', margin: '0 auto ' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Judul</th>
                            <th scope="col">Pengarang</th>
                            <th scope="col">Penerbit</th>
                            <th scope="col">Tahun</th>
                            <th style={{ width: 100 }} scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.buku !== undefined &&
                            this.props.buku.map(books =>
                                <tr key={books.id}>
                                    <td>{books.id}</td>
                                    <td>{books.judul}</td>
                                    <td>{books.pengarang}</td>
                                    <td>{books.penerbit}</td>
                                    <td>{books.tahun}</td>
                                    <td>
                                        <Link to={"/edit/" + books.id}>
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </Link>
                                        <i style={{ marginLeft: 20 }} className="fa fa-trash" aria-hidden="true" onClick={() => this.deleteBuku(books.id)}></i>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}
