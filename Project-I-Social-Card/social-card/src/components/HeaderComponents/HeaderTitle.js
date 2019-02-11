import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
            <p className="header-title">
                Lambda School <span>@LambdaSchool • { moment().format('DD MMM') }</span>
            </p>
    )
}

export default HeaderTitle;