import { useEffect, useState } from 'react';
import DummyCard from './DummyCard';
import * as tablatureServices from '../services/dummyAPI'
import { useParams } from 'react-router-dom';

const ProfileContent = (props) => {
    const [tablatures, setTablatures] = useState(null)
    const { profileName } = useParams() // Since the route is setup as /:profileName, we can extract the profileName url parameter with this hook.

    useEffect(() => {
        // If the current user is viewing their own profile, grab all of their data.
        // Otherwise only grab public data.
        if(props.loggedInProfile.name === profileName) {
            const fetchedTablature = tablatureServices.getCurrentProfilesTablature(profileName)
            setTablatures(fetchedTablature)
        } else {
            const fetchedTablature = tablatureServices.getProfilesPublicTablature(profileName)
            setTablatures(fetchedTablature)
        }
    }, [profileName, props.loggedInProfile])

    return (
        <>
            {tablatures?.map( (tablature, i) => (
                <DummyCard 
                    loggedInProfile={props.loggedInProfile}
                    tabData={tablature}
                    key={i} 
                />
            ))}
        </>
    );
}
 
export default ProfileContent;