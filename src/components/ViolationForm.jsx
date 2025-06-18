import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ViolationForm.css';

// Initial form data template for resets
const initialFormData = {
    address: '',
    violationType: '',
    otherViolationType: '',
    date: new Date(),
    description: '',
    reportedBy: '',
    images: []
};

function ViolationForm({ onReport }) {
    const [formData, setFormData] = useState(initialFormData);

    const [showSuccess, setShowSuccess] = useState(false);
    const [imagePreviews, setImagePreviews] = useState([]);

    // Reset form to initial state to allow another submission
    const handleReset = () => {
        setFormData(initialFormData);
        setImagePreviews([]);
        setShowSuccess(false);
    };

    const handleDateChange = (date) => {
        setFormData(prevData => ({
            ...prevData,
            date: date
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                images: [...prevData.images, ...files]
            }));
            
            const newPreviews = files.map(file => URL.createObjectURL(file));
            setImagePreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeImage = (index) => {
        setFormData(prevData => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index)
        }));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server or parent component
        console.log('Form submitted:', formData);
        if (onReport) onReport(formData);
        setShowSuccess(true);
    };

    return (
        <div className="violation-form-container">
            {!showSuccess ? (
                <>
                    <h2 className="violation-form-title">HOA Violation Report Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="section-header">Property Details</div>
                        <div className="form-group">
                            <label htmlFor="address">Property Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="section-header">Violation Information</div>
                        <div className="form-group">
                            <label htmlFor="violationType">Type of Violation</label>                            <select
                                id="violationType"
                                name="violationType"
                                value={formData.violationType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a violation type</option>
                                <option value="maintenance">Property Maintenance</option>
                                <option value="noise">Noise Violation</option>
                                <option value="parking">Parking Violation</option>
                                <option value="pet">Pet Violation</option>
                                <option value="trash">Trash/Debris</option>
                                <option value="other">Other</option>
                            </select>
                            {formData.violationType === 'other' && (
                                <div className="form-group">
                                    <label htmlFor="otherViolationType">Specify Other</label>
                                    <input
                                        type="text"
                                        id="otherViolationType"
                                        name="otherViolationType"
                                        value={formData.otherViolationType}
                                        onChange={handleChange}
                                        placeholder="Please specify the violation type"
                                        required
                                        className="other-violation-input"
                                    />
                                </div>
                            )}
                        </div>                        <div className="section-header">Timing</div>
                        <div className="form-group">
                            <label htmlFor="date">Date of Violation</label>
                            <DatePicker
                                selected={formData.date}
                                onChange={handleDateChange}
                                dateFormat="MMMM d, yyyy"
                                id="date"
                                name="date"
                                required
                                className="date-picker"
                                maxDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText="Select violation date"
                            />
                        </div>

                        <div className="section-header">Description & Reporter</div>
                        <div className="form-group">
                            <label htmlFor="description">Description of Violation</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Please provide detailed description of the violation..."
                            />
                        </div>                        <div className="form-group">
                            <label htmlFor="reportedBy">Reported By</label>
                            <input
                                type="text"
                                id="reportedBy"
                                name="reportedBy"
                                value={formData.reportedBy}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="section-header">Attachments</div>
                        <div className="form-group">
                            <label htmlFor="images">Upload Images (Optional)</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                onChange={handleImageChange}
                                accept="image/*"
                                multiple
                            />
                            <div className="image-upload-hint">
                                Drag and drop images here or click to select multiple images
                            </div>
                            <div className="image-previews">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="image-preview-item">
                                        <img src={preview} alt={`Violation preview ${index + 1}`} />
                                        <button
                                            type="button"
                                            className="remove-image"
                                            onClick={() => removeImage(index)}
                                            aria-label="Remove image"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button type="submit">Submit Report</button>
                    </form>
                </>
            ) : (
                <div className="success-container">
                    <h2 className="success-title">Report Submitted Successfully!</h2>
                    <p className="success-text">Thank you for submitting your violation report. The HOA will review it shortly.</p>
                    <button type="button" onClick={handleReset} className="submit-another-button">
                        Submit Another
                    </button>
                </div>
            )}
        </div>
    );
}

export default ViolationForm;
