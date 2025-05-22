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
        <div className="max-w-md mx-auto my-8 bg-white p-8 rounded-2xl shadow-lg">
  <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Enquiry Form</h2>
  <form onSubmit={saveEnquiry}>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
      <input
        name="name"
        value={formData.name}
        type="text"
        placeholder="Enter Your Name"
        required
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
      <input
        name="email"
        value={formData.email}
        type="email"
        placeholder="Enter Your Email"
        required
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Your Phone</label>
      <input
        name="phone"
        value={formData.phone}
        type="text"
        placeholder="Enter Your Phone"
        required
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
      <textarea
        name="message"
        value={formData.message}
        rows={4}
        placeholder="Enter Your Message..."
        required
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition duration-300 shadow-md"
      >
        Save
      </button>
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
