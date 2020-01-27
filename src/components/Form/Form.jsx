import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTodos } from '../../actions/modelParamActionCreator';
import './Form.css';

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onClickHandler = () => {
        const trimTitle = title.trim();
        const trimBody = body.trim();
        if (!trimTitle || !trimBody) {
            window.alert('入力が空です。');
            return;
        }
        props.postTodos({
            title: trimTitle,
            body: trimBody
        });
        setTitle('');
        setBody('');
    };

    return (
        <div className="input-form">
            <input
                id="standard-basic"
                label="Title"
                style={{ marginRight: 8 }}
                value={ title }
                onChange={ (event) => setTitle(event.target.value) }
            />
            <input
                id="standard-basic"
                label="Body"
                style={{ marginRight: 8 }}
                value={ body }
                onChange={ (event) => setBody(event.target.value) }
            />
            <button onClick={onClickHandler}>
                Post Todos
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        postTodos: ( {title, body} ) => {
            dispatch( postTodos({title, body}) );
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(Form);