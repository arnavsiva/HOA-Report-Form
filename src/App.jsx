import './App.css'
import TabContainer from './components/TabContainer.jsx'

function App() {
  return (
    <div className="app">
      <div style={{
        maxWidth: '800px',
        margin: '32px auto 16px',
        background: 'var(--color-light)',
        border: '1px solid var(--color-main)',
        borderRadius: '8px',
        padding: '1.5rem',
        color: 'var(--color-secondary)',
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <strong>This is a demo HOA Violation Reporting App.</strong><br/>
        Use the <b>Submit Violation</b> tab to fill out and submit a violation report (including images).<br/>
        Switch to the <b>Admin Dashboard</b> tab to view all submitted reports and see uploaded images. This demo does not save data after a refresh.
      </div>
      <TabContainer />
    </div>
  )
}

export default App
