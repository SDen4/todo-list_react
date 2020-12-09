import React, {Fragment} from 'react';
import {Form} from '../components/Form';
import {List} from '../components/List';

export const Home = () => {
    const tasks = new Array(3).fill('').map( (_, i) => ({id: i, title: `Task #${i+1}`}));

    return (
        <Fragment>
            <Form />
            <List tasks={tasks}/>
        </Fragment>
    )
}