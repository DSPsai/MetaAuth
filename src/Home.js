import React from 'react'

export default function Home(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            Account Connected is {props.userAddress}<br /><br />
            <object className='ytvid' data="https://www.youtube.com/embed/SSo_EIwHSd4">
            </object>
        </div>
    )
}
