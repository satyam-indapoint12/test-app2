import React from 'react'
import CardView from '../common/cards'
import ListStyled from './cafes.styled'
import { Link } from 'react-router-dom'

const Cafes = ({data}) => {

    return <ListStyled>
        {data.map((item, index) => {
        const {name, description, logo, id } = item
        return <Link to={`/cafes/${id}`}>
        
        <CardView key={index} title={name} description={description} image={logo} >
        </CardView></Link>
    })}
    </ListStyled>
    
}

export default Cafes