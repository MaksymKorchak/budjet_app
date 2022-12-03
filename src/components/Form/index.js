import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Row, Button, Comment } from './styles';
import { FormattedMessage, useIntl } from "react-intl";

const Form = ( props ) => {
    const intl = useIntl();

    const [form, setForm] = useState({
        value: '',
        comment: '',
        date: new Date().toISOString().substring(0, 10)
    })
    
    const onSubmit = (e) => {
        e.preventDefault();

        props.onChange(form);
            setForm({
                ...form,
                value: '',
                comment: ''
            })
        props.onCloseForm();
    }

    const onChange = (e) => {
        const { value, name } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

        return (
            <Wrapper>
                <form onSubmit={onSubmit}>
                    <Row>
                        <Input name="value" 
                            type="number" 
                            placeholder={ intl.formatMessage({ id: 'amount_input_text' })}
                            value={form.value}
                            onChange={onChange}/>

                        <Input type="date" 
                            name="date" 
                            value={form.date}
                            onChange={onChange}/>
                    </Row>

                    <Row>
                        <Button>
                            <FormattedMessage id="save_button_text"/>
                        </Button>
                        <Comment name="comment"
                            value={form.comment}
                            onChange={onChange}/>
                    </Row>
                </form>
            </Wrapper>
        )
}

Form.propTypes = {
    onChange: PropTypes.func
};

export default Form;