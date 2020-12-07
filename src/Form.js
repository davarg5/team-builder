import React from 'react';
import styled from 'styled-components'

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        update(evt.target.name, evt.target.value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        border: 2px solid gray;
        border-radius: 10px;
        margin: 3% 5%;
        padding: 3.5% 3% 1% 3%;
  `
    const Submit = styled.button`
        width: 20%;
        margin: 3% auto;
    `


    return (
        <div>
        <form onSubmit={onSubmit}> 
        <Container>
            <label>Name
            <input 
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            />
            </label>
            <label>Email
            <input 
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            />
            </label>
            <label>Role
            <select 
            name='role'
            value={values.role}
            onChange={onChange}>
                <option value=''>---select a role---</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Designer'>Designer</option>'
            </select>
            </label>
            <Submit>Submit</Submit>
        </Container>
        </form>
        </div>
    )
}