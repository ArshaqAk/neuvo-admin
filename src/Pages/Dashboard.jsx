import '../Styles/dashboard.css'
import Sidebar from '../Components/Sidebar'
export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container" >
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9 ">
            <h2>Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  )
}
