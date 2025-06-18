import { useState } from 'react';
import AdminDashboard from './AdminDashboard.jsx';
import './TabContainer.css';
import ViolationForm from './ViolationForm.jsx';

function TabContainer() {
    const [activeTab, setActiveTab] = useState('form');
    const [violations, setViolations] = useState([]);
    const handleAddViolation = (violation) => {
        setViolations(prev => [...prev, violation]);
    };

    return (
        <div className="tab-container">
            <div className="tabs">
                <button 
                    className={`tab-button ${activeTab === 'form' ? 'active' : ''}`}
                    onClick={() => setActiveTab('form')}
                >
                    Submit Violation
                </button>
                <button 
                    className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('admin')}
                >
                    Admin Dashboard
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'form'
                    ? <ViolationForm onReport={handleAddViolation} />
                    : <AdminDashboard violations={violations} />
                }
            </div>
        </div>
    );
}

export default TabContainer;
