import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Card from './Card'
import { getCharacters } from '../redux/actions'
import { useCharacters, useCharacterDetail } from '../hooks'

export default function CardFunc() {

    const characters = useCharacters();
    const characterDetail = useCharacterDetail();

    return (
        <div>
            <h1>Cards (Function)</h1>
            <button onClick={() => console.log(characterDetail.name)}>Detail!</button>
            {characters.map(e => <Card key={e.id} character={e} />)}
        </div>
    )
}