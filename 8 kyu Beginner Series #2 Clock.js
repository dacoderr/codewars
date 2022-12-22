/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */

function past(h, m, s){
    let msH = h*60*60*1000
    let msM = m*60*1000
    let msS = s*1000
    return msH+msM+msS
  }