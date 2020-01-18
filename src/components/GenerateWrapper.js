import React, { Component } from 'react';

class GenerateWrapper extends Component {

    constructor() {
        super()

        this.state = {
            baseURL: "",
            jsonNames: "",
            sizes: []
        }
    }

    handleChange = (e) => {

        const { name, value, type } = e.target


        // this.setState(prevState => {

        // })

    }

    render() {
        return (
            <div className="inner" >
                <div className="section">
                    <div className="title">Preview Link Base URL</div>
                    <input type="text" placeholder="https://s3.eu-west-1.amazonaws.com/adylic-public-preview/DCO/citroen/c1/300x50/index.html" />
                </div>
                <div className="section">
                    <div className="title">JSON File Names</div>
                    <textarea
                        name={this.state.jsonNames}
                        onChange={() => { this.handleChange(e) }}
                        rows="8"
                        placeholder={"c1-care-plan-300x50.json\nc1-configurator-300x50.json\nc1-configurator-prospecting-generic-300x50.json\nc1-configurator-prospecting-generic-temp-300x50.json\nc1-configurator-prospecting-generic-unfinished-300x50.json\nc1-conversion-retargeting-test-drive-v2-300x50.json\nc1-discovery-prospecting-generic-300x50.json\nc1-discovery-retargeting-comfort-300x50.json\nc1-discovery-retargeting-generic-300x50.json\nc1-discovery-retargeting-tech-300x50.json\nc1-last-mile-free-insurance-300x50.json\nc1-last-mile-generic-300x50.json\nc1-last-mile-generic-v3-300x50.json\nc1-last-mile-generic-v3-llb-bonus-300x50.json\nc1-last-mile-generic-v4-300x50.json\nc1-last-mile-personal-lease-300x50.json"}
                        value={this.state.jsonNames}
                    />
                </div>
                <div className="section">
                    <div className="inner-section">
                        <div className="title">Formats</div>
                    </div>
                    <div className="inner-section formats">
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 120x600</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 160x600</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 300x250</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 300x600</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 300x50</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 320x50</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 320x480</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 728x90</label>
                        <label className="format-label"><input type="checkbox" className="format-checkbox" /> 970x250</label>
                    </div>
                </div>
                <div className="section">
                    <div className="inner-section formats">
                        <button>Generate Links</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenerateWrapper