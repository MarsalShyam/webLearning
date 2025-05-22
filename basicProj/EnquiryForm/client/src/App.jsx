import React,{useState} from 'react'
import EnquiryList from './components/EnquiryList';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  let saveEnquiry = (e) => {
    
    e.preventDefault()// stop the page refresh
    // let formData={
    //   name:e.target.name.value,
    //   email:e.target.email.value,
    //   phone:e.target.phone.value,
    //   message:e.target.message.value,
    // } now no need of this..


    axios.post("http://localhost:8000/web/api/post",formData).then((res)=>{
      console.log(res.data);

      setFormData({ name: '', email: '', phone: '', message: '' });//again reset
    }).catch(err=>{
      console.log("sumission error:",err);
    })
  }
  return (
    <>
      <div className='border'>
        <h1 className='font-bold text-center py-5 text-[40px] '>Enquiry Form</h1>
      </div>
      <div className='grid grid-cols-[30%_auto] gap-[40px]'>
        <div className='bg-gray-300 p-4'>
          <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry} >

            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='name' value="Your Name" />
              <input name='name' value={formData.name} type='text' placeholder='Enter Your Name' required onChange={handleChange}/>
            </div>

            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='email' value="Your Email" />
              <input name='email' value={formData.email} type='email' placeholder='Enter Your Email' required onChange={handleChange} />
            </div>

            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='phone' value="Your Phone" />
              <input name='phone' value={formData.phone} type='text' placeholder='Enter Your Phone' required onChange={handleChange} />
            </div>

            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='message' value="Your Message" />
              <textarea name='message' value={formData.message} placeholder='Enter Your Messaege...' rows={4} required onChange={handleChange} />
            </div>
            <div className='py-3'>
              <button className='border-2 bg-blue-700 rounded-2xl py-3 px-10' type="submit">Save</button>
            </div>
          </form>
        </div>
        <div>
          <h2 className='text-[20px] font-bold'>Enquiry List</h2>
          <EnquiryList/>

        </div>
      </div>

    </>
  )
}

export default App
