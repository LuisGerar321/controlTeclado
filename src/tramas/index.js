const up = (velocity) => {
  return {    
    motor1: velocity,
    motor2: velocity,
    motor3: velocity,
    motor4: velocity,
  }
}

const down = (velocity) => {
  return {
    motor1: velocity*-1,
    motor2: velocity*-1,
    motor3: velocity*-1,
    motor4: velocity*-1,
  }
}

const stop = (velocity) => {
  return {
    motor1: 0,
    motor2: 0,
    motor3: 0,
    motor4: 0,
  }
}

const rigth = (velocity)  => {
  return {
    motor1: velocity * -1,
    motor2: velocity,
    motor3: velocity * -1,
    motor4: velocity,
  }
}

const left =  (velocity) => {
  return {
    motor1: velocity,
    motor2: velocity* -1,
    motor3: velocity,
    motor4: velocity* -1,
  }
}

const leftUp = (velocity) => {
  return {
    motor1: 0,
    motor2: velocity,
    motor3: 0,
    motor4: velocity,
  }
}

const rigthUp = (velocity) => {
  return {
    motor1: velocity,
    motor2: 0,
    motor3: velocity,
    motor4: 0,
  }
}

const leftDown = (velocity) => {
  return {
    motor1: velocity * -1,
    motor2: 0,
    motor3: velocity * -1,
    motor4: 0,
  }
}

const rigthDown = (velocity) => {
  return {
    motor1: 0,
    motor2: velocity* -1,
    motor3: 0,
    motor4: velocity* -1,
  }
}

const spin = (velocity) => {
  return {
    motor1: velocity,
    motor2: velocity* -1,
    motor3: velocity * -1,
    motor4: velocity,
  }
}

module.exports = {
  up,
  down,
  left,
  rigth,
  leftUp,
  rigthUp,
  leftDown,
  rigthDown,
  spin,
  stop
}