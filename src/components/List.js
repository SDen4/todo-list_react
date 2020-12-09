import React from 'react';

export const List = ({ tasks }) => {
    return (
        <ul className='list-group'>
            {tasks.map(task => (
                <li
                    className='list-group-item list__item'
                    key={task.id}
                >
                    <div className='list__title_group'>
                        <strong>{task.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button
                        type='button'
                        className='btn btn-outline-danger btn-sm'
                    >&times;</button>
                </li>
            ))}
        </ul>
    )
}