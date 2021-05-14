import React from 'react'

export const Header = () => {
    
    const wrapperStyle = {
        backgroundColor: '#ff4d4d',
        width: '100%',
        height: '100px'
    }

    const triangleStyle = {
        width: '200px',
        height: '0',
        borderTop: '100px solid black',
        borderRight: '300px solid transparent'
    }

    return (
        <div style={wrapperStyle}>
            <div style={triangleStyle}></div>
        </div>
    )
}