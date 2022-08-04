var keypress = require('keypress');
const {
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
} = require('./services/index.js');
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
let keyPressed;
let t = [];
let stop = false;
let steps = 0;
let pwm = 0;
const ip = "192.168.0.62:8000";
 
process.stdin.on('keypress', async function (ch, key) {
  steps = 0;
  stop = false;
  keyPressed = key?.name;

  if (keyPressed == 'q') {
    t.forEach(id => clearTimeout(id));
    process.stdin.pause();
  }
  
  if ((pwm < 255) &&  keyPressed == "w") pwm++;
  if ((pwm > 0) &&  keyPressed == "s") pwm--;

  switch (keyPressed) {
    case "up":
      console.log("up");
      await handleUp(ip, pwm)
      break;
    case "down":
      console.log("dowm");
      await handleDown(ip, pwm)
      break;
    case "left":
      console.log("left");
      await handleLeft(ip, pwm)
      break;
    case "right":
      console.log("right");
      await handleRight(ip, pwm)
      break;
    case "u":
      console.log("leftUp");
      await handleLeftUp(ip, pwm)
      break;
    case "i":
      console.log("rightUp");
      await handleRightUp(ip, pwm)
      break;
    case "j":
      console.log("leftDown");
      await handleLeftDown(ip, pwm)
      break;
    case "k":
      console.log("rightDowm");
      await handleRightDowm(ip,pwm);
      break;
    case "m":
      console.log("spin");
      await handleSpin(ip,pwm);
      break;
  }


});

const main = async () => {
  const connect = await handleConnect(ip);
  console.log(connect);
  if (!connect) {
    console.log("Pls, connect serial port to raspberry and run it again!");
    process.exit();
  }

  const keyboard = setInterval(() =>{
    if (keyPressed === "q") clearInterval(keyboard);
    if (steps) {
      
      if (!stop) {
        t.push(setTimeout(async () => {
          console.log("stop");
          await handleStop(ip,pwm);
          stop = true;
        }, 100)); 
      }
    }
    steps++;
  }, 100);
};

main();

  


process.stdin.setRawMode(true);
process.stdin.resume();