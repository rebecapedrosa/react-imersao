import React from 'react';

function ButtonLink(props) {

    return(
       <a href={props.href} className={props.className}>
           New Video
       </a>
    );

}
export default ButtonLink;