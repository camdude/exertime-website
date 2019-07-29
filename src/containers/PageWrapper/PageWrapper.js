import React, { Component } from 'react';

import './PageWrapper.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Modal from '../../components/UI/Modal/Modal';

class Page extends Component {
    render() {
        return (
            <div className="Site">
                <Modal show={this.props.showModal} modalClosed={this.props.modalClosed}/>
                <div className="siteContent">
                    <div className="appHeader">
                    <Header />
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    
}

export default Page;
