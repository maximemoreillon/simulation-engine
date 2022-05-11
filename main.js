function step(last_time){



  window.requestAnimationFrame(() => {
    const current_time = new Date()
    const delta_time = current_time - last_time

    console.log(delta_time);
    step(current_time)
  });


}

step()
