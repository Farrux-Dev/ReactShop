import React from 'react'
import './css/contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactPage = () => {
  const notify = () => toast("Send Message");
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">In Farki-Market online store, you can get any product cheaply</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
           
            <input type="text" placeholder='Name' id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" className='input2'/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
    
            <input type="email" placeholder='Email' id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" className='input4'/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
         
            <textarea placeholder='Message' id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" className='input9'></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="send_button" style={{border:"1px solid aqua", color:"black", width:"100px", textAlign:'center'}} onClick={notify}>Send</button>
          <ToastContainer />
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">ganiboyevfarrux90@gmail.com</a>
          <p className="leading-normal my-5">Farrux 16 years old
            <br/>Welcome to Farki-Market
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactPage
