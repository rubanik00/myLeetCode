/*
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
*/

function carFleet(target: number, position: number[], speed: number[]): number {
  var combined = [];
  var stack = [];

  for (var i = 0; i < position.length; i++) {
    combined.push([position[i], speed[i]]);
  }

  combined.sort((a, b) => b[0] - a[0]);

  var reachingTime = 0;
  var fleet = 0;

  for (var [pos, spd] of combined) {
    var time = (target - pos) / spd;
    if (time > reachingTime) {
      fleet++;
      reachingTime = time;
    }
  }
}
