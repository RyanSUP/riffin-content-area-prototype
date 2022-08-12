import { useState } from 'react';
import DummyCard from './DummyCard';
import * as tablatureServices from '../services/dummyAPI'

const TrendingContent = (props) => {
    const [tablatures, setTablatures] = useState(tablatureServices.getTrendingTablature())
    return (
        <>
            {tablatures.map( (tablature, i) => ( 
                <DummyCard 
                    loggedInProfile={props.loggedInProfile}
                    tabData={tablature}
                    key={i} 
                />
            ))}
        </>
    );
}
 
export default TrendingContent;