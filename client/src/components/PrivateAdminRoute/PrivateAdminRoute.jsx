import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom';

export default function PrivateAdminRoute() {
    const [isAdmin, setAdmin] = useState(true);
    return (
        <Fragment>
            {
                isAdmin ? <Outlet /> : <p>Not Authorized</p>
            }
        </Fragment>
    )
}
