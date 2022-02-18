import React from 'react';
import classes from './Topbar.module.css'

const Topbar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img src="https://images-na.ssl-images-amazon.com/images/G/33/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_mx-main._CB468300557_.png" alt="Amazon Logo"></img>
      </nav>
    </header>
  )
}

export default Topbar;