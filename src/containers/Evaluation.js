import React from 'react'
import { fetchByClassidAndDate, getCleanHeader } from '../models/Evaluations'
import { libelleColor } from '../utils'

class Evaluation extends React.Component {
  constructor(props) {
    super(props)

    const id = this.props.params.classId
    const date = this.props.params.date

    const infos = fetchByClassidAndDate(id, date)
    const header = getCleanHeader(infos)
    console.log(infos)
    this.state = {
      header: header,
      infos: infos
    }
  }

  render() {
    const headerCols = this.state.header.map((head) => {
      return <td key={head.key}>{ head.category } {head.libelle} </td>
    })

    const headerTable = <tr><td></td>{headerCols}</tr>

    const linesTable = this.state.infos.map((info, key) => {
      const lineCols = this.state.header.map((head) => {
        const libelle = libelleColor(info.color[head.key])
        return <td className={"report-skills " + info.color[head.key]} key={head.key}> {libelle}</td>
      })
 
      return <tr key={key}><td> { info.student } </td> {lineCols}
      </tr>
    })

    return (
      <div>
        <table>
          <thead>
          {headerTable}
          </thead>
          <tbody>
          {linesTable}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Evaluation