import React, { DetailedHTMLProps } from 'react';

export type SectionProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Section: React.FC<SectionProps> = props => {
    const className = props.className ? `section ${props.className}` : 'section';
    return (
        <section {...props} className={className}>
            {props.children}
        </section>
    );
};
