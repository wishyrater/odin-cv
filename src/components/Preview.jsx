import { preinitModule } from "react-dom";

export default function Preview({ profile }) {
    return (
        <>
        <h1>{profile.general.name}</h1>
        <h2>Personal info</h2>
        <address>
            Phone: <a href={"tel:" + profile.general.phone}>{profile.general.phone}</a><br/>
            Email: <a href={"mailto:" + profile.general.email}>{profile.general.email}</a>
        </address>
        <h2>Educational experience</h2>
        <h3>{profile.education.schoolName}</h3>
        <p>{profile.education.titleOfStudy}</p>
        <p>{profile.education.dateFrom} - {profile.education.dateTo}</p>
        <h2>Work experience</h2>
        <h3>{profile.work.companyName}</h3>
        <p>{profile.work.positionTitle}</p>
        <p>{profile.work.dateFrom} - {profile.work.dateTo}</p>
        </>
    )
}