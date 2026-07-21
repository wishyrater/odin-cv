import { useState } from 'react'

export default function Form({ handleGeneralChange, handleEducationChange, handleWorkChange }) {
    return (
        <form>
            <fieldset>
                <legend>General information</legend>
                <Input name="name" label="Full name" type="text" id={0} onChange={handleGeneralChange}/>
                <Input name="email" label="Email" type="email" id={1} onChange={handleGeneralChange} />
                <Input name="phone" label="phone" type="phone" id={2} onChange={handleGeneralChange} />
            </fieldset>
            <fieldset>
                <legend>Educational experience</legend>
                <Input name="schoolName" label="Name of institution" type="text" id={3} onChange={handleEducationChange}/>
                <Input name="titleOfStudy" label="Title of study" type="text" id={4} onChange={handleEducationChange} />
                <Input name="schoolFrom" label="From" type="date" id={5} onChange={handleEducationChange} />
                <Input name="schoolTo" label="To" type="date" id={6} onChange={handleEducationChange} />
            </fieldset>
            <fieldset>
                <legend>Work experience</legend>
                <Input name="companyName" label="Company name" type="text" id={7} onChange={handleWorkChange} />
                <Input name="positionTitle" label="Title" type="text" id={8} onChange={handleWorkChange} />
                <Input name="responsibilities" label="Describe your main responsibilities" type="textarea" id={9} onChange={handleWorkChange} />
                <Input name="jobFrom" label="From" type="date" id={10} onChange={handleWorkChange} />
                <Input name="jobTo" label="To" type="date" id={11} onChange={handleWorkChange} />
            </fieldset>
        </form>
    )
}

function Input({ name, label, type, id, onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {type === "textarea" ? (
                <textarea id={id} name={name} onChange={onChange} />
            ) : (
                <input type={type} id={id} name={name} onChange={onChange} />
            )}
        </div>
    )
}