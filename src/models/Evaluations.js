export function getIndex() {
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

export function fetchByClassidAndDate(classId, date) {
   if (window.Storage) {
    const evaluationsList = window.JSON.parse(window.localStorage.getItem('evaluations'))
    const classrooms = window.JSON.parse(window.localStorage.getItem('classrooms'))
    const classDetails = classrooms[classId]

    let evaluationInfos = []
    evaluationsList[classId].map(function(students, key) {
        if (students !== null) {          
          students.map(function(evaluation) {
            // evaluation.student = classDetail
            
            if (evaluation.date == date) {
              evaluation.student = classDetails[key]
              evaluationInfos.push(evaluation)
            }
          })
        }
    })

    return evaluationInfos

  }
}

export function getCleanHeader(evaluationInfos) {
  let cleanHeader = [];
  let evaluatedSkills = {}
  const allSkills = window.JSON.parse(window.localStorage.getItem('skills'))
  evaluationInfos.map(function(evaluation) {
    Object.keys(evaluation.color).map(function(val) {
      if (evaluation.color[val] != 'na') {
        evaluatedSkills[val] = true;
      }
    })
  })

  Object.keys(evaluatedSkills).map(function(val) {
    let skill = allSkills[val]
    skill.key = val
    cleanHeader.push(allSkills[val])
  })
  return cleanHeader
}
