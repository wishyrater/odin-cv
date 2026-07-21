import { useState } from 'react'
import Form from './components/Form.jsx'
import Preview from './components/Preview.jsx'
import './App.css'

const initialProfile = {
    general: { name: 'Moe Schmoe', phone: '12345678', email: 'email@email.com', },
    education: [{ schoolName: 'Abc', titleOfStudy: '123', dateFrom: '12.04.2027', dateTo: '12.04.2027', }],
    work: [{ companyName: 'Bigger industries inc.', positionTitle: 'Big Dawg', responsibilities: 'Did this', dateFrom: '12.04.2027', dateTo: '12.04.2027', }],
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

	function handleEducationChange(e) {
        const { name, value } = e.target;

        setProfile((previousProfile) => ({
            ...previousProfile,
            education: {
                ...previousProfile.education,
                [name]: value,
            }
        }));
    }

    function handleWorkChange(e) {
        const {name, value } = e.target;

        setProfile((previousProfile) => ({
            ...previousProfile,
            work: {
                ...previousProfile.work,
                [name]: value,
            }
        }));
    }

	return (
    	<>
		<Form 
			handleGeneralChange={handleGeneralChange} 
			handleEducationChange={handleEducationChange} 
			handleWorkChange={handleWorkChange}/>
    	<Preview profile={profile} />
    	</>
	)
}

export default App
