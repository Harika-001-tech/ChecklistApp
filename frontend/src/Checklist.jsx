import React, { useState, useEffect } from 'react';

const Checklist = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch checklist data from backend
        const fetchChecklist = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/checklist');
                const data = await response.json();
                setResults(data);
            } catch (err) {
                console.error('Error fetching checklist:', err.message);
                setError('Failed to load checklist data.');
            }
        };

        fetchChecklist();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Rule</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.id}>
                        <td>{result.description}</td>
                        <td className={result.status.toLowerCase()}>{result.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Checklist;
