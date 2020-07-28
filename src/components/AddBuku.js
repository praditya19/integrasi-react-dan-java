import React, { Component } from 'react'
import API from '../axios/API'

export default class AddBuku extends Component {
    state = {
        judul: '',
        pengarang: '',
        penerbit: '',
        tahun: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = (e) => {
        e.preventDefault()
        API.post('/blog', this.state)
        this.props.history.push('/')
        window.location.reload()
    }

    render() {
        return (
            <div className="container">
                <h2>Tambah Buku</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Judul</td>
                                <td><input type="text" name="judul" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Pengarang</td>
                                <td><input type="text" name="pengarang" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Penerbit</td>
                                <td><input type="text" name="penerbit" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Tahun</td>
                                <td><input type="text" name="tahun" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Add" className="btn btn-primary" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
