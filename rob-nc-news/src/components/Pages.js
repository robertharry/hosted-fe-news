import React, { Component } from 'react';

class Pages extends Component {
    // state = {
    //     page: 1
    // }
    render() {
        
        const {maxPage, page, pageChange} = this.props
        return (
            <div>
                <span>
                    <button onClick={() => pageChange(-1)} disabled={page === 1}>Previous Page</button>
                    <button onClick={() => pageChange(+1)} disabled={page === maxPage}>Next Page</button>
                </span>
            </div>
        );
    }
}

export default Pages;