// import React from 'react'
// import { Link } from 'react-router-dom'
// import API from '../axios/API'

// function CardBuku({ buku, refresh }) {

//     async function deleteBuku() {
//         await API.delete('blog/' + buku.id)

//         return refresh()
//     }
//     return (
//         <div className="col.md-3 card" style={{ margin: 5 }}>
//             <h3>{buku.judul}</h3>
//             <small>{buku.pengarang}</small>
//             <p>{buku.penerbit}</p>
//             <p>{buku.tahun}</p>
//             <hr />
//             <Link to={"/edit/" + buku.id}>
//                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
//             </Link>

//             <i className="fa fa-trash" aria-hidden="true" onClick={deleteBuku}></i>
//             <br />
//         </div>
//     )
// }

// export default CardBuku

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/API'

export default class CardBuku extends Component {
    constructor(props) {
        console.log(props);
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
        console.log("mmmmm", this.props.buku);
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
