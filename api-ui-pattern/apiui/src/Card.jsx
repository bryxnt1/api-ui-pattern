import { useEffect, useState } from 'react'


function Card (props) {

return (
    <div className='boxes'>
        <div className='img'>
            <img src={props.data.sprites && props.data.sprites.front_default} alt="" />
        </div>
        <div className='pokeName'>{props.data.name}

        </div>
    </div>
)
}

export default Card




