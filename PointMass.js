
class PointMass {

    constructor(options = {}){
  
      const {
        mass = 1,
      } = options
  
      this.position = { x: 0, y: 0 }
      this.velocity = { x: 0, y: 0 }
      this.acceleration = { x: 0, y: 0 }
  
      this.mass = mass
    }

    apply_force(force){
        const components = ['x', 'y']
  
        components.forEach( component => {
            this.acceleration[component] = force[component] / this.mass
      })
    }
  
    step(delta_time) {


        const delta_time_s = delta_time / 1000
        const components = ['x', 'y']

        components.forEach( component => {
            this.velocity[component] += this.acceleration[component] * delta_time_s
            this.position[component] += this.velocity[component] * delta_time_s
            
        })
      
    }
  
  
  }

  export { PointMass }