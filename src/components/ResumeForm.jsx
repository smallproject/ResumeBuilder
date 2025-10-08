import React, { useState } from "react";

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        summary: "",
        experience: "",
        education: "",
        skills: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="bg-light p-4 rounded shadow-sm">
            <h2 className="mb-4">Resume Details</h2>

            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Professional Summary</label>
                <textarea
                    name="summary"
                    className="form-control"
                    rows="3"
                    value={formData.summary}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Work Experience</label>
                <textarea
                    name="experience"
                    className="form-control"
                    rows="4"
                    value={formData.experience}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Education</label>
                <textarea
                    name="education"
                    className="form-control"
                    rows="3"
                    value={formData.education}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Skills</label>
                <textarea
                    name="skills"
                    className="form-control"
                    rows="2"
                    value={formData.skills}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Save & Preview
            </button>
        </form>
    );
};

export default ResumeForm;
