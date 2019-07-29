import React, { Component } from 'react';

import './DataTable.css';
import TopControls from './TopControls/TopControls';
import Row from './Row/Row';
import Button from '../UI/Button/Button';

class DataTable extends Component {
    state = {
        data: null,
        length: 10,
        page: 1
    }

    componentWillMount() {
        this.setState({data: this.props.data});
    }

    validate(l, p) {
        let start = (p-1)*l+1;
        return start <= this.state.data.length && start > 0;
    }

    changePage(newPage) {
        if (this.validate(this.state.length, newPage)) {
            this.setState({page: newPage});
        }
    }

    onPageChangeHandler = (event) => {
        this.changePage(event.target.value);
    }

    onLengthChangeHandler = (event) => {
        this.setState({length: event.target.value, page: 1});
    }

    onDeleteEntry = (id) => {
        this.setState( ( prevState ) => {
            return { data: prevState.data.filter(entry => entry.id !== id)}
        } );
    }

    render() {
        const headings = this.props.head.map((value, index) => {
            return (
                <th key={index} type={value.type}>{value.heading}</th>
            );
        });

        const data = this.state.data.map((entry, index) => {
            if (index >= (this.state.page-1)*this.state.length && index < this.state.page*this.state.length) {
                return (
                    <Row key={entry.id} data={entry.data} editClick={() => this.onEditEntry(entry.id)} delClick={() => this.onDeleteEntry(entry.id)}/>
                );
            } else {
                return null;
            }
        });

        let totalPages = Math.ceil(this.state.data.length/this.state.length);
        let pages = [<option key="1" value="1">1</option>];
        for(let i = 2; i <= totalPages; i++) {
            pages.push(<option key={i} value={i}>{i}</option>) ;
        }
        

        return (
            <div className="dataTable">
                <TopControls default={this.state.length} selected={this.onLengthChangeHandler}/>
                <div className="tableWrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                {headings}
                                <th type="action">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                        <tfoot>
                            <tr>
                                {headings}
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <p>Showing {(this.state.page-1)*this.state.length+1} to {this.state.page*this.state.length} of {this.state.data.length} entries</p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Button clicked={() => this.changePage(this.state.page-1)}>Prev</Button>
                        <select onChange={this.onPageChangeHandler} value={this.state.page}>
                            {pages}
                        </select>
                        <Button clicked={() => this.changePage(this.state.page+1)}>Next</Button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default DataTable;
