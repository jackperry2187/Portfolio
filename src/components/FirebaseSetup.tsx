import React, { ReactNode } from "react";
import { app, analytics } from '../util/firebase';

export const FirebaseSetup: React.FC<{children: ReactNode}> = ({children}) => {
    if(!app || !analytics) return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    return (
        <div>
            { children }
        </div>
    )
}