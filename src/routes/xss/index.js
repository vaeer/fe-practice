import React from 'react';

export default React.memo(props => {
    return <>
        <a href={`https://localhost:8888?>`}>恶意链接</a>
    </>
});