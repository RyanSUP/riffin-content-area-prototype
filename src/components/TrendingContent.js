import { useEffect, useState } from 'react';
import DummyCard from './DummyCard';
import * as tablatureServices from '../services/dummyAPI'

const TrendingContent = (props) => {
    const [tablatures, setTablatures] = useState(null)

    useEffect(() => {
        if(!props.cachedTrendingContent) {
            console.log('fetching content')
            // No cached content means we need to fetch content for the first time
            const content = tablatureServices.getTrendingTablature()
            setTablatures(content)
            props.handleCachingTrendingContent(content)
        } else {
            // If content is cached we can skip fetching
            console.log('Using cached content')
            if(!tablatures) {
                setTablatures(props.cachedTrendingContent)
            }
        }
    }, [props, tablatures])

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
 
export default TrendingContent;