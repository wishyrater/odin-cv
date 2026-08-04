import { useState } from 'react'
import '../styles/Form.css'

export default function Form({ 
    profile, 
    handleGeneralChange, 
    handleEducationChange, 
    handleAddEducation,
    handleDeleteEducation, 
    handleWorkChange, 
    handleAddWork,
    handleDeleteWork
}) {
    return (
        <form className="cv-form">
            <fieldset className='cv-form-fieldset-general'>
                <legend>General information</legend>
                <GeneralEntry 
                    name={profile.general.name} 
                    phone={profile.general.phone} 
                    email={profile.general.email} 
                    onChange={handleGeneralChange} 
                />
            </fieldset>
            <fieldset className='cv-form-fieldset-education'>
                <legend>Educational experience</legend>
                <div className="education-input-fields">
                    {profile.education.map(entry => (
                        <EducationEntry
                            key={entry.id}
                            id={entry.id}
                            schoolName={entry.schoolName}
                            degree={entry.degree}
                            from={entry.dateFrom}
                            to={entry.dateTo}
                            onChange={handleEducationChange}
                            onDelete={handleDeleteEducation}
                        />
                    ))}
                </div>
                <button type="button" onClick={handleAddEducation}>Add education entry</button>
            </fieldset>
            <fieldset className='cv-form-fieldset-work'>
                <legend>Work experience</legend>
                <div className="work-input-fields">
                    {profile.work.map(entry => (
                        <WorkEntry
                            key={entry.id}
                            id={entry.id}
                            companyName={entry.companyName}
                            positionTitle={entry.positionTitle}
                            responsibilities={entry.responsibilities}
                            from={entry.dateFrom}
                            to={entry.dateTo}
                            onChange={handleWorkChange}
                            onDelete={handleDeleteWork}
                        />
                    ))}
                </div>
                <button type="button" onClick={handleAddWork}>Add work entry</button>
            </fieldset>
        </form>
    )
}

function GeneralEntry({ name, phone, email, onChange }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleToggle() {
        setIsEditing(previous => !previous);
    }

    if (isEditing) {
        return (
            <div className="general-entry editing">
                <div className="general-information-input-fields">
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input autocomplete="name" type="text" name="name" id="name" value={name} onChange={onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Phone number</label>
                        <input autocomplete="tel" type="phone" name="phone" id="phone" value={phone} onChange={onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input autocomplete="email" type="email" name="email" id="email" value={email} onChange={onChange} />
                    </div>
                </div>
                <button type="button" onClick={handleToggle}>Submit</button>
            </div>
        )
    } else {
        return (
            <div className='general-entry submitted'>
                <p>{name}</p>
                <address>{phone}, {email}</address>
                <button type="button" onClick={handleToggle}>Edit</button>
            </div>
        )
    }
}

function EducationEntry({ id, schoolName, degree, from, to, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleToggle() {
        setIsEditing(previous => !previous);
    }

    if (isEditing) {
        return (
            <div className='education-entry editing'>
                <div className="input-field schoolName">
                    <label htmlFor='schoolName'>School name</label>
                    <input type="text" name="schoolName" id="schoolName" value={schoolName} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field degree">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" id="degree" value={degree} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field dateFrom">
                    <label htmlFor="schoolFrom">From</label>
                    <input type="date" name="dateFrom" id="schoolFrom" value={from} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field dateTo">
                    <label htmlFor="schoolTo">To</label>
                    <input type="date" name="dateTo" id="schoolTo" value={to} onChange={(e) => onChange(e, id)} />
                </div>
                <button type="button" onClick={handleToggle}>Submit</button>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        )
    } else {
        return (
            <div className="education-entry submitted">
                <p className='schoolName'>{schoolName}</p>
                <p className='degree'>{degree}</p>
                <p className='dateRange'>{from} - {to}</p>
                <button type="button" onClick={handleToggle}>Edit</button>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        )
    }
}

function WorkEntry({ id, companyName, positionTitle, responsibilities, from, to, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleToggle() {
        setIsEditing(previous => !previous);
    }

    if (isEditing) {
        return (
            <div className="work-entry editing">
                <div className="input-field companyName">
                    <label htmlFor='companyName'>Company name</label>
                    <input type="text" name="companyName" id="companyName" value={companyName} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field positionTitle">
                    <label htmlFor="positionTitle">Position title</label>
                    <input type="text" name="positionTitle" id="positionTitle" value={positionTitle} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field responsibilities">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea name="responsibilities" id="responsibilities" value={responsibilities} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field workFrom">
                    <label htmlFor="workFrom">From</label>
                    <input type="date" name="dateFrom" id="workFrom" value={from} onChange={(e) => onChange(e, id)} />
                </div>
                <div className="input-field workTo">
                    <label htmlFor="workTo">To</label>
                    <input type="date" name="dateTo" id="workTo" value={to} onChange={(e) => onChange(e, id)} />
                </div>
                <button type="button" onClick={handleToggle}>Submit</button>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        )
    } else {
        return (
            <div className="work-entry submitted">
                <p className='companyName'>{companyName}</p>
                <p className='positionTitle'>{positionTitle}</p>
                <p className='dateRange'>{from} - {to}</p>
                <button type="button" onClick={handleToggle}>Edit</button>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        )
    }
}