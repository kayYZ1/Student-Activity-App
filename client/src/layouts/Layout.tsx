import React from 'react'

import Navbar from '../components/navigation/Navbar'

import classes from "./Layout.module.css"

type Props = {
    children: JSX.Element
}

const Layout = (props: Props) => {
  return (
    <div className={classes.container}>
      <Navbar />
        <div className={classes.wrapper}>
            {props.children}
        </div>
    </div>
  )
}

export default Layout