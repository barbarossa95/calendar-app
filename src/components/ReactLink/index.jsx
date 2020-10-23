import React from 'react';

const ReactLink = ({href='#', title, go = null, action = null}) => {
    const nav = (e) => {
        e.preventDefault();

        if(!action) go(e.target.pathname);

        if (!go) action();

        return false;
    };

    return (<a href={href} className="link" onClick={nav} >{title}</a>)
}

export default ReactLink;
