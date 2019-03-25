import React from 'react'
import './statusStyle.css'

class Status extends React.Component{

    render() {
        return(
            <span className={`status ${this.props.children.includes('Rejected') && 'rejected'} ${this.props.children.includes('Accepted') && 'accepted'}`}>{this.props.children}</span>
        )
    }

}

export default Status;
