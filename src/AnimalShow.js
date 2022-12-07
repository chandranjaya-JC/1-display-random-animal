import React from 'react';
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

function AnimalShow({type}) {
    const svgMap={
        bird,
        cat,
        cow,
        dog,
        gator,
        horse
    }
  return (
    <div style={{}}>
        <img style={{display:"flex",height:"100px",width:"100px", flexDirection:"cloumn"}}alt="qnimql" src={svgMap[type]}  />
    </div>
  )
}

export default AnimalShow