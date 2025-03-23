import React from 'react';

import { Check } from '@phosphor-icons/react';

const IndustryListItem = (props) => {
    return (
        <>
            <div className="icon_otr">
                <Check className='icon' weight='bold' />
            </div>
            <div className="content">
                <h4 className="heading heading-h4">{props.heading}</h4>
                <p className="desc heading-mm">{props.description}</p>
            </div>
        </>
    )
}

export default IndustryListItem
