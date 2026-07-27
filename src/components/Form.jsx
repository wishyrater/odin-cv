import { useState } from 'react'
import '../styles/Form.css'

// TODO: MAKE THE PROFILE INTO A LIST FOR THE EDUCATION AND WORK ENTRIES, THEN USE .MAP TO RENDER THEM HEREEE
// YOU GOT THIS

export default function Form({ profile, handleGeneralChange, handleEducationChange, handleWorkChange }) {
    return (
        <form className="cv-form">
            <fieldset className='cv-form-fieldset-general'>
                <legend>General information</legend>
                <div className="general-information-input-fields">
                    <GeneralEntry 
                        name={profile.general.name} 
                        phone={profile.general.phone} 
                        email={profile.general.email} 
                        onChange={handleGeneralChange} 
                    />
                </div>
            </fieldset>
            <fieldset>
                <legend>Educational experience</legend>
                <div className="education-input-fields">
                    {profile.education.map(entry => (
                        <EducationEntry
                            id={entry.id}
                            schoolName={entry.schoolName}
                            degree={entry.degree}
                            from={entry.dateFrom}
                            to={entry.dateTo}
                            onChange={handleEducationChange}
                        />
                    ))}
                </div>
                <button type="button">Add education entry</button>
            </fieldset>
            <fieldset>
                <legend>Work experience</legend>
                <div className="work-input-fields">
                    {profile.work.map(entry => (
                        <WorkEntry
                            id={entry.id}
                            companyName={entry.companyName}
                            positionTitle={entry.positionTitle}
                            responsibilities={entry.responsibilities}
                            from={entry.dateFrom}
                            to={entry.dateTo}
                            onChange={handleWorkChange}
                        />
                    ))}
                </div>
                <button type="button">Add work entry</button>
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
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={onChange} />
                <label htmlFor="phone">Phone number</label>
                <input type="phone" name="phone" value={phone} onChange={onChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} />
                <button type="button" onClick={handleToggle}>Submit</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>{name}</p>
                <address>{phone}, {email}</address>
                <button type="button" onClick={handleToggle}>Edit</button>
            </div>
        )
    }
}

function EducationEntry({ id, schoolName, degree, from, to, onChange }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleToggle() {
        setIsEditing(previous => !previous);
    }

    if (isEditing) {
        return (
            <div className='input-item' key={id}>
                <label htmlFor='schoolName'>School name</label>
                <input type="text" name="schoolName" id="schoolName" value={schoolName} onChange={(e) => onChange(e, id)} />
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" value={degree} onChange={(e) => onChange(e, id)} />
                <label htmlFor="schoolFrom">From</label>
                <input type="date" name="dateFrom" id="schoolFrom" value={from} onChange={(e) => onChange(e, id)} />
                <label htmlFor="schoolTo">To</label>
                <input type="date" name="dateTo" id="schoolTo" value={to} onChange={(e) => onChange(e, id)} />
                <button type="button" onClick={handleToggle}>Submit</button>
            </div>
        )
    } else {
        return (
            <div className="input-card displayed" key={id}>
                <p>{schoolName}</p>
                <p>{degree}</p>
                <p>{from} - {to}</p>
                <button type="button" onClick={handleToggle}>Edit</button>
            </div>
        )
    }
}

function WorkEntry({ id, companyName, positionTitle, responsibilities, from, to, onChange }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleToggle() {
        setIsEditing(previous => !previous);
    }

    if (isEditing) {
        return (
            <div className="input-item" key={id}>
                <label htmlFor='companyName'>Company name</label>
                <input type="text" name="companyName" id="companyName" value={companyName} onChange={(e) => onChange(e, id)} />
                <label htmlFor="positionTitle">Position title</label>
                <input type="text" name="positionTitle" id="positionTitle" value={positionTitle} onChange={(e) => onChange(e, id)} />
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" value={responsibilities} onChange={(e) => onChange(e, id)} />
                <label htmlFor="workFrom">From</label>
                <input type="date" name="workFrom" id="workFrom" value={from} onChange={(e) => onChange(e, id)} />
                <label htmlFor="workTo">To</label>
                <input type="date" name="workTo" id="workTo" value={to} onChange={(e) => onChange(e, id)} />
                <button type="button" onClick={handleToggle}>Submit</button>  
            </div>
        )
    } else {
        return (
            <div className="display-item" key={id}>
                <p>{companyName}</p>
                <p>{positionTitle}</p>
                <p>{from} - {to}</p>
                <button type="button" onClick={handleToggle}>Edit</button>
            </div>
        )
    }
}