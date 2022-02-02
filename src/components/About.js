import React from 'react';

export default function About() {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    About Text Utils
                </div>
                <div className="card-body">
                    <h5 className="card-title">Word Counter | Text Transform</h5>
                    <p className="card-text">You can manipulate the input text to uppercase, lowercase etc.</p>
                    <a href="/" className="btn btn-primary">Try it</a>
                </div>
                <div className="card-footer text-muted">
                    TextUtils
                </div>
            </div>
        </>
    );
}
