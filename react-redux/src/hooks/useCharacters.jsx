import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCharacters, removeCharacters } from '../redux/actions'

/**
 * Get characters (Mount) and remove characters (Unmount).
 * 
 * @returns {object} characters
 */
export const useCharacters = () => {

    const dispath = useDispatch()
    useEffect (() => {
        dispath(getCharacters())
        return () => dispath(removeCharacters())
    }, [])

    return useSelector((state) => state.characters)
}