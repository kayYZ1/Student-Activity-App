import React from 'react'

import { SpinnerContainer, LoadingSpinner } from '../styles/spinner.style'

const spinner = () => {
    return (
        <SpinnerContainer>
            <LoadingSpinner/>
        </SpinnerContainer>
    )
}

export default spinner