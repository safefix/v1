import React, { Component } from "react";
import CalendlyWidget from '../components/CalendlyWidget';
import ContractorForm from '../components/ContractorForm';
import Footer from '../components/Footer';
import GDrive from '../components/GDrive';
import Nav from '../components/Nav';
import Hero from "../components/Hero";
import ProgressBar from '../components/ProgessBar';


class ContractorPage extends Component{

    render(){
        return(
            <div>
            <Hero />
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-4">
                    <ProgressBar />
                    </div>
                    <div className="col-lg-8">
                    <ContractorForm />
                    </div>
                    <div className='row'  >
                        <GDrive />
                    </div>
                </div>
                <Footer />
            </div>
            </div>
        )
    }
}

export default ContractorPage;