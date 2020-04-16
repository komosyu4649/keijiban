import React from 'react';
import './Form.css';
import Button from '../Button/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.sendBodyToParent = this.sendBodyToParent.bind(this);
    
    }
    handleChange(event) {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        })
    }
    sendBodyToParent() {
        const body = this.state.body.trim();
        if(!body) {
            alert('コメントを入力してください')
            return;
        }
        if(typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(body);
        }
        this.setState({
            body:''
        });
    }
    render() {
    return (
        <div>
            <div className="Form-textarea">
                <textarea 
                    name="body" 
                    cols="30" 
                    rows="5"
                    value={this.state.body}
                    onChange={this.handleChange}>
                </textarea>
            </div>
            <Button onClickHandler={this.sendBodyToParent}>コメント</Button>
        </div>
    );
}
}

export default Form;