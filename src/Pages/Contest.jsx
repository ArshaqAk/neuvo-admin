import Sidebar from '../Components/Sidebar'
import '../Styles/contest.css'
const Contest = () => {
  return (
    <>
      <div className="contest-container" >
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9 ">
            <h2>Contest</h2>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contest