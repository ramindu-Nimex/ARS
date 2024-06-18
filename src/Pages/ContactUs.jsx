import contact from '/contact.png'
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const ContactUs = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl text-center mt-6 font-bold underline uppercase'>Contact Us</h1>
      <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center sms:gap-10 mt-10">
         {/* left side */}
          <div className='flex-1 p-9 rounded-lg shadow-md border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5'>
            <img src={contact} alt="contact" width={550} className="w-full object-cover rounded-lg mb-2"  />
            <p className='text-base text-gray-400 tracking-wide'>Have questions or ready to get started? Contact us today, and let's begin the conversation that leads to your success.</p>
            <div className="flex items-center mt-5">
               <IoLocationSharp className='mr-2 text-indigo-500' size={20} />
               <p className='text-xs text-gray-400 flex items-center gap-2 font-semibold'>No.251,2nd Floor,Janajaya City Mall,Rajagiriya.</p>
            </div>  
            <div className="flex items-center mt-3">
              <IoMail className='mr-2 text-indigo-500' size={20} />
              <p className='text-xs text-gray-400 flex items-center gap-2 font-semibold'>ashaglobalsolutions1@gmail.com </p>
            </div>
            <div className="flex items-center mt-3">
              <BsFillTelephoneFill className='mr-2 text-indigo-500' size={20} />
              <p className='text-xs text-gray-400 flex items-center gap-2 font-semibold'>+94 70 6 69 00 40  || +94 71 6 82 22 33
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 py-20 shadow-md flex flex-col gap-8 p-8  rounded-lg border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5">
              <form className='flex flex-col gap-6'>
              <div>
                <Label value="Your Name" className='text-sm uppercase tracking-wide' />
                <TextInput type="text" placeholder="Username"  />
              </div>
              <div>
                <Label value="Phone Number" className='text-sm uppercase tracking-wide'/>
                <TextInput type="text" placeholder="phone number" />
              </div>
              <div>
                <Label value="E-Mail" className='text-sm uppercase tracking-wide'/>
                <TextInput type="email" placeholder="e-mail" />
              </div>
              <div>
                <Label value="Subject" className='text-sm uppercase tracking-wide'/>
                <TextInput type="text" placeholder="subject" />
              </div>
              <div>
                <Label value="Message" className='text-sm uppercase tracking-wide'/>
                <Textarea type="text" placeholder="message..." rows='3' maxLength='200'/>
              </div>
              <Button type='submit'  gradientDuoTone='purpleToPink' className="uppercase">Send Message</Button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default ContactUs