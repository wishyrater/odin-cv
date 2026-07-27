import { useState } from 'react'
import Form from './components/Form.jsx'
import Preview from './components/Preview.jsx'
import './App.css'

const initialProfile = {
    general: { name: 'Moe Schmoe', phone: '12345678', email: 'email@email.com', },
    education: [{ id: crypto.randomUUID(), schoolName: 'Abc', degree: '123', dateFrom: '2027-04-12', dateTo: '2027-04-12', }],
    work: [{ id: crypto.randomUUID(), companyName: 'Bigger industries inc.', positionTitle: 'Big Dawg', responsibilities: 'Did this', dateFrom: '2027-04-12', dateTo: '2027-04-12', }],
};

function App() {
	const [profile, setProfile] = useState(initialProfile);

	function handleGeneralChange(e) {
		const { name, value } = e.target;

		setProfile((previous) => ({
			...previous,
			general: {
				...previous.general,
				[name]: value,
			},
		}));
	}

    function handleEducationChange(e, id) {
        const { name, value } = e.target;

        setProfile((previousProfile) => ({
            ...previousProfile,
            education: previousProfile.education.map((entry) => 
                entry.id === id
                    ? {...entry, [name]: value }
                    : entry
            )
        }));
    }

    function handleAddEducation() {
        setProfile((previousProfile) => ({
            ...previousProfile,
            education: [
                ...previousProfile.education,
                { id: crypto.randomUUID(), schoolName: "", degree: "", dateFrom: "", dateTo: "" }
            ]
        }));
    }

    function handleWorkChange(e, id) {
        const { name, value } = e.target;

        setProfile((previousProfile) => ({
            ...previousProfile,
            work: previousProfile.work.map((entry) => 
                entry.id === id
                    ? { ...entry, [name]: value }
                    : entry
            )
        }));
    }

    function handleAddWork() {
        setProfile((previousProfile) => ({
            ...previousProfile,
            work: [
                ...previousProfile.work,
                { id: crypto.randomUUID(), companyName: "", positionTitle: "", responsibilities: "", dateFrom: "", dateTo: "" }
            ]
        }));
    }

	return (
    	<main>
		<Form
            profile={profile}
			handleGeneralChange={handleGeneralChange} 
			handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
			handleWorkChange={handleWorkChange}
            handleAddWork={handleAddWork}
        />
    	<Preview profile={profile} />
    	</main>
	)
}

export default App
