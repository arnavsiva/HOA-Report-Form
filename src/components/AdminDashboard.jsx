import './AdminDashboard.css';

function AdminDashboard({ violations }) {
  const typeLabels = {
    maintenance: 'Property Maintenance',
    noise: 'Noise Violation',
    parking: 'Parking Violation',
    pet: 'Pet Violation',
    trash: 'Trash/Debris'
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {violations.length === 0 ? (
        <p>No violations reported yet.</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Type of Violation</th>
                <th>Date</th>
                <th>Reported By</th>
                <th>Description</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {violations.map((v, idx) => (
                <tr key={idx}>
                  <td>{v.address}</td>
                  <td>{v.violationType === 'other' ? `Other: ${v.otherViolationType}` : typeLabels[v.violationType] || v.violationType}</td>
                  <td>{new Date(v.date).toLocaleDateString()}</td>
                  <td>{v.reportedBy}</td>
                  <td>{v.description}</td>
                  <td>
                    {v.images && v.images.length > 0 ? (
                      v.images.map((file, i) => (
                        <img
                          key={i}
                          src={URL.createObjectURL(file)}
                          alt={`Violation ${idx + 1} - image ${i + 1}`}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            marginRight: '8px',
                            borderRadius: '4px'
                          }}
                        />
                      ))
                    ) : (
                      'None'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
