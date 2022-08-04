const axios = require("axios");
const { up, down, left, rigth, rigthUp, leftUp, rigthDown, leftDown, spin, stop} = require("../tramas/index.js")

const handleUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, up(PWM));
}

const handleDown = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, down(PWM));
}

 const handleLeft = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, left(PWM));
}

 const handleRight = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigth(PWM));
}

 const handleLeftUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, leftUp(PWM));
}

 const handleLeftDown = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, leftDown(PWM));
}

 const handleRightUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigthUp(PWM));
}

const handleRightDowm = async (ipConnection,PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigthDown(PWM));
}

const handleSpin = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, spin(PWM));
}

const handleStop = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, stop(PWM));
}

const handleConnect = async (ipConnection) => {
  const connectSerialPort = `http://${ipConnection}/api/arduino/config/connectSerialPort`;
  try {
    const result = await axios.get(connectSerialPort);
    return result.data;
  } catch (e) {
    return null;
  }
}

module.exports = {
  handleConnect,
  handleUp,
  handleDown,
  handleLeft,
  handleStop,
  handleSpin,
  handleRightDowm,
  handleRightUp,
  handleLeftDown,
  handleLeftUp,
  handleRight,
};