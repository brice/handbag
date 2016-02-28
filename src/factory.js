export function getEvaluationsIndex() {
   if (window.Storage) {
    const evaluationsList = window.JSON.parse(window.localStorage.getItem('evaluations'))
    
    let evaluationsIndex = []

    Object.keys(evaluationsList).map(function(val) {
      let info = {class: val, dates: []}
      evaluationsList[val].map(function(students) {
        if (null != students && Array.isArray(students)) {
          students.map(function(evaluation) {
            if (-1 == info.dates.indexOf(evaluation.date)) {
              info.dates.push(evaluation.date)
            }
          })
        }
      })
      evaluationsIndex.push(info)
    })
    
    return evaluationsIndex
  }
  return []
}