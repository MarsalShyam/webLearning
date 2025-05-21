import React from 'react'
import EnquiryList from './components/EnquiryList';

const App = () => {
  let saveEnquiry = (e) => {
    alert("Save Enquiry");
    e.preventDefault()// stop the page refresh
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
              <input name='name' type='text' placeholder='Enter Your Name' required />
            </div>
            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='email' value="Your Email" />
              <input name='email' type='email' placeholder='Enter Your Email' required />
            </div>
            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='phone' value="Your Phone" />
              <input name='phone' type='text' placeholder='Enter Your Phone' required />
            </div>
            <div className='py-3 m-2 border-2 border-blue-800'>
              <label htmlFor='message' value="Your Message" />
              <textarea name='message' placeholder='Enter Your Messaege...' rows={4} required />
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
