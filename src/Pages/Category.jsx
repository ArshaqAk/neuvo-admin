import '../Styles/category.css'
import axios from "axios";
import { baseurl } from "../Base_url/baseUrl";
import { useEffect, useState } from "react";
import Sidebar from '../Components/Sidebar';
import { IoIosSearch } from "react-icons/io";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const Category = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategory = async() =>{
        try {
            const response =   await axios.get(`${baseurl}/admin/category/view/list/1`)
            setCategories(response.data.data.categoryList)
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    useEffect(()=>{
        fetchCategory()
    },[])

    // console.log(categories)

  return (
    <>
    <div className="category-container">
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
 
        <div className="col-9 category-right">
          <div className="row mt-2 px-2">
            <div className="col-6">
              <div className="search-box">
                <input className='form-control ' type="text" placeholder='search ' />
                <IoIosSearch className='search-icon' />
              </div>
            </div>
            <div className="col-6 text-end">
              <button className='btn btn-secondary text-lowercase'>create category</button>
            </div>
          </div>
           {/* category cards */}
           <div className="row pe-3">
           {
            categories.map((item,index)=>(
              <div key={index} className="col-3 ">
                <MDBCard className='mt-4  text-center card shadow'>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg' fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card content
                    </MDBCardText>
                    <MDBBtn className='btn btn-secondary' href='#'>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>

              </div>
            ))
           }
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Category