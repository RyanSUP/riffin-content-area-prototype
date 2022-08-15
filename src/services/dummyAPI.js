import { tablatureData } from "./dummyData"

const getCurrentProfilesTablature = (profileName) => tablatureData.filter( (tablature) => tablature.owner === profileName)

const getTrendingTablature = () => tablatureData.filter( (tablature) => tablature.public)

const getProfilesPublicTablature = (profileName) => tablatureData.filter( (tablature) => tablature.owner === profileName && tablature.public) 

const getTabById = (id) => tablatureData.find((tablature) => tablature.id === id)

export {
    getTrendingTablature,
    getCurrentProfilesTablature,
    getProfilesPublicTablature,
    getTabById,
}