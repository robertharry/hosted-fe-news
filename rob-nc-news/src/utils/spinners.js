import React, { Component } from 'react';
import { css } from '@emotion/core';
import {ClipLoader} from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Spinners extends Component {
    state={
        loading:true
    }
    render() {
        return (
            <div className='PacmanLoader'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
        );
    }
}

export default Spinners;