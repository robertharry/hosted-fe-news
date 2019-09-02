import React from 'react';

const Pages = (props) => {
    const {maxPage, page, pageChange} = props
        return (
            <div className="pages">
                <span>
                    <button className="pageButton" onClick={() => pageChange(-1)} disabled={page === 1}>Previous Page</button>
                    <button className="pageButton" onClick={() => pageChange(+1)} disabled={page === maxPage}>Next Page</button>
                </span>
            </div>
        );
};

export default Pages;