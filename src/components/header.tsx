import React from 'react';
import '../scss/_header.scss'

export const Header: React.FC = () => {
    return (
        <header className={'header'}>
          <div>
            <h2>Hello, I'm <span className={'highlight'}>James Toohey</span>.</h2>
            <h2>I'm a Software Engineer from NZ.</h2>
          </div>
        </header>
    );
};
