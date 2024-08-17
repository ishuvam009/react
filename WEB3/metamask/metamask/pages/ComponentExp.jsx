import React from 'react';

export default function ReusableComponent({ children, padding }) {
    return (
        <div>
            <p className={padding}>{children}</p>
        </div>
    );
}