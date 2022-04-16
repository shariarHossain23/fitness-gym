import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{marginTop:"100px"}} className='text-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;