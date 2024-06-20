import Sidebar from "../Components/Sidebar"
import '../Styles/home.css'

const Home = () => {

  return (
    <div className="home-container">
        <div className="row">
            <div className="col-3">
                <Sidebar/>
            </div>
            <div className="col-9">
                <h2>Home page</h2>
            </div>
        </div>
    </div>
  )
}

export default Home