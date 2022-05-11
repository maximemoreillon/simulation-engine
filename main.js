import {PointMass} from './PointMass.js'


const pointMass = new PointMass()



function step(last_time = 0){

  window.requestAnimationFrame( () => {
    const current_time = new Date()
    const delta_time = current_time - last_time

    pointMass.step(delta_time)
    pointMass.apply_force({x: 1})

    console.log(pointMass.position.x)


    step(current_time)
  })


}


step()



