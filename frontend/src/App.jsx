import React, { useState, useEffect } from 'react';

const App = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApp, setSelectedApp] = useState(null);

    const ChecklistItem=({rule,status})=>{
      const statusStyle={
        color:status==='Passed' ? 'green':'red',
        fontWeight:'bold',
      }
    }

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch('http://localhost:4001/api/applications');
                console.log(response)
                const data = await response.json();
                
                setApplications(data);
            } catch (error) {
                console.error('Failed to fetch applications:', error.message);
            }
        };

        fetchApplications();
    }, []);

    const handleApplicationClick = (application) => {
        setSelectedApp(application);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checklist Dashboard</h1>
            <div className="flex">
                <div className="w-1/3 border-r">
                    <h2 className="text-xl font-semibold mb-2">Applications</h2>
                    <ul>
                        {applications.map((app, index) => (
                            <li
                                key={index}
                        
                                className="p-2 border-b cursor-pointer text-cyan-700 hover:bg-blue-600"
                                onClick={() => handleApplicationClick(app)}
                            >
                                Application  : {index + 1}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-2/3 p-4">
                    {selectedApp ? (
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Application Details</h2>
                            <p><strong>ID:</strong> {selectedApp.id}</p>
                            <h3 className="text-lg font-semibold mt-4">Checklist Results:</h3>
                            <ul>
                {selectedApp.checklist.map((rule) => (
                    <li key={rule.id} className="p-2 border-b">
                        <strong>{rule.description}:</strong>{' '}
                        <span
                            style={{
                                color: rule.status === 'Passed' ? 'green' : 'red',
                                fontWeight: 'bold',
                            }}
                        >
                            {rule.status}
                        </span>
                    </li>
                ))}
            </ul>
                        </div>
                    ) : (
                        <p>Select an application to view details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
