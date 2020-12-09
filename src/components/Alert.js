import React from 'react';

export const Alert = ({ alert }) => {
    if(!alert) return null;

    return (
        // <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Attention!</strong>
            {/* {alert.text} */}
            <button
                type='button'
                className='btn-close'
                aria-label='Close'
            >&times;</button>
        </div>
    )
}