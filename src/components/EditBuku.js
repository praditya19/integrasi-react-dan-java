import React, { Component } from 'react'
import API from '../axios/API'

export default class EditBuku extends Component {
    state = {
        id: '',
        judul: '',
        pengarang: '',
        penerbit: '',
        tahun: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (e) => {
        e.preventDefault()
        await API.put('/blog/' + this.state.id, this.state)
        this.props.history.push('/')
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        API.get('blog/' + id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    judul: res.data.judul,
                    pengarang: res.data.pengarang,
                    penerbit: res.data.penerbit,
                    tahun: res.data.tahun
                })
            })
    }


    render() {
        const { judul, pengarang, penerbit, tahun } = this.state
        return (
            <div className="container">
                <h2>ini adalah edit</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Judul</td>
                            <td><input type="text" name="judul" value={judul} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Pengarang</td>
                            <td><input type="text" name="pengarang" value={pengarang} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Penerbit</td>
                            <td><input type="text" name="penerbit" value={penerbit} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Tahun</td>
                            <td><input type="text" name="tahun" value={tahun} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="button" value="Edit" className="btn btn-primary" onClick={this.handlerSubmit} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

