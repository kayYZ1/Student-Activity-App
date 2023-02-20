import React from 'react'

import classes from "./Spinner.module.css"

type Props = {}

const spinner = (props: Props) => {
    return (
        <div className={classes.spinnerContainer}>
            <div className={classes.loadingSpinner}></div>
        </div>
    )
}

export default spinner