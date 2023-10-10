import React, { Fragment } from 'react'
import Header from '../Header/Header'

import './errorPage.css'

export default function ErrorPage() {
    return (
        <Fragment>
            <Header />
            <div class="error-container">
                <h1>404 Not Found</h1>
                <p>Oops! The page you are looking for might have been removed or is temporarily unavailable.</p>
            </div>
        </Fragment>
    )
}
