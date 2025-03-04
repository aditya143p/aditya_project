import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';

export const Searchhistory = () => {
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem('searchhistrory')) || []);

    console.log(history);

    let clearhistory = () => {
        localStorage.removeItem('searchhistrory');
        setHistory([]); // Update state to clear the UI without reloading
    };
  

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">
                <MdHistory className="me-2" /> Search History
            </h3>

            {history.length > 0 ? (
                <div className="d-flex flex-column align-items-center">
                    {history.map((element, index) => (
                        <div key={index} className="card w-50 mb-3 shadow-sm p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold">{element.query===""?<span>popular</span>:element.query}</span>
                                <small className="text-muted">
                                    <FaClock className="me-1" />
                                    {new Date(element.timestamp).toLocaleString()}
                                </small>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm my-3 gap-4">
                        <h5 className="mb-0 text-primary fw-bold">🔍 Clear Search History</h5>
                        <button className="btn btn-danger px-4 py-2" onClick={clearhistory}>
                            🗑 Clear
                        </button>
                    </div>
                </div>
                
            ) : (
                <p className="text-center text-muted">No search history available.</p>
            )}
            
        </div>
    );
};
