import '../Styles/dashboard.css'
import Sidebar from '../Components/Sidebar'
export const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container" >
        <div className="row">
          <div className="col-2 ">
            <Sidebar/>
          </div>
          <div className="col-10 ">
            
          </div>
        </div>
      </div>
    </>
  )
}
