import { useState } from 'react';
import DummyCard from './DummyCard';
import * as tablatureServices from '../services/dummyAPI'

const TrendingContent = () => {
    const [tablatures, setTablatures] = useState(tablatureServices.getTrendingTablature())
    return (
        <>
            {tablatures.map( 
                (tablature, i) => ( <DummyCard tabData={tablature} key={i} />)
            )}
        </>
    );
}
 
export default TrendingContent;