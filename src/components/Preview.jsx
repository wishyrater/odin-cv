import '../styles/Preview.css'

export default function Preview({ profile }) {
    const educationItems = profile.education.map(entry => 
        <div className="cv-educational-entry" key={entry.id}>
            <div className="cv-educational-entry-details">
                <p className='cv-educational-entry-school-name'>{entry.schoolName}</p>
                <p className="cv-educational-entry-title-of-study">{entry.degree}</p>
            </div>
            <div className="cv-educational-entry-dates">
                <p>{entry.dateFrom} - {entry.dateTo}</p>
            </div>
        </div>
    );

    const workItems = profile.work.map(entry =>
        <div className="cv-work-entry" key={entry.id}>
            <div className="cv-work-entry-details">
                <p className='cv-work-entry-company-name'>{entry.companyName}</p>
                <p className='cv-work-entry-position-title'>{entry.positionTitle}</p>
                <p className='cv-work-entry-responsibilities'>{entry.responsibilities}</p>
            </div>
            <div className="cv-work-entry-dates">
                <p>{entry.dateFrom} - {entry.dateTo}</p>
            </div>
        </div>
    );

    return (
        <div className="cv-preview">
            <div className="cv-general">
                <h1>{profile.general.name}</h1>
                <address>
                    <span>Phone: <a href={"tel:" + profile.general.phone}>{profile.general.phone}</a></span>
                    <span>Email: <a href={"mailto:" + profile.general.email}>{profile.general.email}</a></span>
                </address>
            </div>
            <div className="cv-educational">
                <h2>Educational experience</h2>
                {educationItems}
            </div>
            <div className="cv-work">
                <h2>Work experience</h2>
                {workItems}
            </div>
        </div>
    )
}