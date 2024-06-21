import  { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { baseurl } from '../Base_url/baseUrl';

const Createcategory = () => {
    const [centredModal, setCentredModal] = useState(false);
    const toggleOpen = () => setCentredModal(!centredModal);
    const [createCategory, setCreateCategory] = useState({
        category_name: '',
        category_status: '',
    })

    //createCategory
    const handleCreate= async()=>{
        if(!createCategory.category_name || createCategory.category_status === ''){
            alert('please fill the fields')
        }
        else{
            try {
                const response = await axios.post(`${baseurl}/admin/category/create`, {
                    category_name: createCategory.category_name,
                    active: createCategory.category_status
                },
            {
                headers:{
                    'Authorization': ``
                }
            })
            console.log(response.data.success);
            if (response.data.success) {
                // toggleOpen();
                setCreateCategory({
                    category_name: '',
                    category_status: ''
                });
            } else {
                console.log('Creation was not successful:', response.data.message);
            }    
            } 
            catch (error) {
                console.log('error while creating category',error)
            }
        }
    }
  
  return (
    <>
    <MDBBtn className='btn btn-secondary text-lowercase' onClick={toggleOpen}>create category</MDBBtn>

<MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
  <MDBModalDialog centered>
    <MDBModalContent >
      <MDBModalHeader >
        <MDBModalTitle className='text-center w-100'>Create Category</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <input className='form-control m-2' type="text" onChange={(e)=>setCreateCategory({...createCategory,category_name:e.target.value})}  placeholder='Category name' value={createCategory.category_name}/>
        <select name="" id="" className=' form-control  ms-2' onChange={(e)=>setCreateCategory({...createCategory,category_status:e.target.value})}  value={createCategory.category_status}>
            <option value="">Select active state</option>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
        <input type="file" className='form-control ms-2 my-2' />

      </MDBModalBody>
      <MDBModalFooter className='d-flex justify-content-center'>
        <MDBBtn className='btn btn-secondary' onClick={handleCreate}>Create</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
    </>
  )
}

export default Createcategory