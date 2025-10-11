import React from "react";

const ResumePreview = ({ data }) => {
    const {
        fullName,
        email,
        phone,
        summary,
        experience,
        education,
        skills,
    } = data;

    return (
        <div className="bg-white p-4 rounded shadow-sm border">
            <h2 className="text-primary">{fullName || "Your Name"}</h2>
            <p className="text-muted">
                {email || "you@example.com"} | {phone || "+31 6 12345678"}
            </p>

            <hr />

            <section className="mb-3">
                <h5 className="text-secondary">Professional Summary</h5>
                <p>{summary || "A brief summary about your career goals and strengths."}</p>
            </section>

            <section className="mb-3">
                <h5 className="text-secondary">Work Experience</h5>
                <p>{experience || "List your recent jobs, roles, and achievements."}</p>
            </section>

            <section className="mb-3">
                <h5 className="text-secondary">Education</h5>
                <p>{education || "Mention your degrees, schools, and graduation years."}</p>
            </section>

            <section>
                <h5 className="text-secondary">Skills</h5>
                <p>{skills || "Highlight your technical and soft skills."}</p>
            </section>
        </div>
    );
};

export default ResumePreview;
