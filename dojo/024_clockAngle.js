const clockAngle = time => {
    let mHand = time%60 * 6;
    let hHand = time%720*0.5;
    let angle = Math.abs(mHand-hHand);
    return angle > 180 ? 360 - angle : angle;
}
console.log(clockAngle(360))
console.log(clockAngle(180))
console.log(clockAngle(45))