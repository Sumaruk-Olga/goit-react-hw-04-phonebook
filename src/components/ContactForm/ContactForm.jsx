import PropTypes from 'prop-types';
import { Component } from "react";
import { nanoid } from 'nanoid';
import { Form, Button, Input } from "./ContactForm.styled";



export class ContactForm extends Component {    
    state = {
        name: '',
        number: '',
    };

    getId = () => {
        return nanoid();
    }


    handleChange = (e) => {        
        this.setState({ [e.currentTarget.name]: e.currentTarget.value,  });        
    }


    reset = () => {
        this.setState({ name: '', number: '' });
    };
    

    handleSubmit = (e) => {
      e.preventDefault();
      const isNamePresent = this.props.isNamePresent(this.state.name);

      if (!isNamePresent) {
        this.props.onSubmit({ ...this.state, id: nanoid() });   
        this.reset();
      } else {
        alert(`${this.state.name} is already in contacts`);
      }    
    }

    render() {
        return <Form autoComplete="off" onSubmit={this.handleSubmit} >
          <label>Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type='submit'>add</Button>
      </Form>      
    }
    
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isNamePresent:PropTypes.func.isRequired,
}