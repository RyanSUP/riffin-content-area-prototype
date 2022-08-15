import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as tablatureServices from '../services/dummyAPI'

import DummyCard from "./DummyCard"

const SingleTablatureContent = (props) => {
    const [tablature, setTablature] = useState(null)
    const { tabId } = useParams()

    useEffect(() => {
        const idAsInt = parseInt(tabId)
        const tabData = tablatureServices.getTabById(idAsInt)
        setTablature(tabData)
    }, [tabId])

    return (
        <>
            {tablature &&
                <DummyCard 
                    loggedInProfile={props.loggedInProfile}
                    tabData={tablature}
                />
            }
        </>
    );
}
 
export default SingleTablatureContent;