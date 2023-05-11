import React from "react";
import Card from './Card'
import { connect } from 'react-redux'
import { getCharacters, addCharacter, getCharacterDetail, removeCharacterDetail, removeCharacters } from '../redux/actions'

class CardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: 11 }
    }

    componentDidMount() {
        // characters
        this.props.getCharacters();
        
        // CharacterDetail
        this.props.getCharacterDetail(7);
    }

    onClick = () => {
        // character
        this.props.addCharacter({ id: this.state.id, name: 'Louie' });
        this.setState({ id: this.state.id + 1 })
        
        // characterDetail
        console.log(this.props.characterDetail.name);
    }

    componentWillUnmount() {
        // character
        this.props.removeCharacters();

        // characterDetail
        this.props.removeCharacterDetail();
    }

    render() {

        const { characters } = this.props;

        return (
            <div>
                <h1>Cards (Class)</h1>
                <button onClick={this.onClick}>Go!</button>
                {characters.map(e => <Card key={e.id} character={e} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    characters: state.characters,
    characterDetail: state.characterDetail,
})
const mapDispatchToProps = (dispatch) => ({
    // charaters
    getCharacters: () => dispatch(getCharacters()),
    addCharacter: (character) => dispatch(addCharacter(character)),
    removeCharacters: () => dispatch(removeCharacters()),
    
    // characterDetail
    getCharacterDetail: (id) => dispatch(getCharacterDetail(id)),
    removeCharacterDetail: (id) => dispatch(removeCharacterDetail(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CardClass);