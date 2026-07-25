import '../styles/Preview.css'

export default function Preview({ profile }) {
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
                <div className="cv-educational-entry">
                    <div className="cv-educational-entry-details">
                        <p className='cv-educational-entry-school-name'>{profile.education.schoolName}</p>
                        <p className="cv-educational-entry-title-of-study">{profile.education.titleOfStudy}</p>
                    </div>
                    <div className="cv-educational-entry-dates">
                        <p>{profile.education.dateFrom} - {profile.education.dateTo}</p>
                    </div>
                </div>
            </div>
            <div className="cv-work">
                <h2>Work experience</h2>
                <div className="cv-work-entry">
                    <div className="cv-work-entry-details">
                        <p className='cv-work-entry-company-name'>{profile.work.companyName}</p>
                        <p className='cv-work-entry-position-title'>{profile.work.positionTitle}</p>
                        <p className='cv-work-entry-responsibilities'>{profile.work.responsibilities}</p>
                    </div>
                    <div className="cv-work-entry-dates">
                        <p>{profile.work.dateFrom} - {profile.work.dateTo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}