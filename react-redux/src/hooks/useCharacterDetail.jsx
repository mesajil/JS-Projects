import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCharacterDetail, removeCharacterDetail } from '../redux/actions'


/**
 * Get characterDetail (Mount) and remove characterDetail (Unmount).
 * 
 * @returns {object} characterDetail
 */
export const useCharacterDetail = () => {

    const dispath = useDispatch()
    useEffect (() => {
        dispath(getCharacterDetail(2))
        return () => dispath(removeCharacterDetail())
    }, [])

    return useSelector((state) => state.characterDetail)
}