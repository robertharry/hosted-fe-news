import React from 'react';

const Pages = () => {
    const {maxPage, page, pageChange} = this.props
        return (
            <div>
                <span>
                    <button onClick={() => pageChange(-1)} disabled={page === 1}>Previous Page</button>
                    <button onClick={() => pageChange(+1)} disabled={page === maxPage}>Next Page</button>
                </span>
            </div>
        );
};

export default Pages;