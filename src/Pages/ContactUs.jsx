import contact from '/contact.png'
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Alert, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
       setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
       setErrMsg("Phone number is required!");
    } else if (email === "") {
       setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
       setErrMsg("Give a valid Email!");
    } else if (subject === "") {
       setErrMsg("Please give your Subject!");
    } else if (message === "") {
       setErrMsg("Message is required!");
    } else {
       setSuccessMsg(
          `Thank you dear ${username}, Your Messages has been sent Successfully!`
        );
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
       {
          from_name: username,
          to_name: "Asha global Recruitment solutions",
          from_email: email,
          to_email: "ashaglobalsolutions1@gmail.com",
          message: message,
       },
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      //  alert("Your message has been sent successfully");   
    }).catch((error) => {
      //  console.log(error);
      //  alert("error")
    })
  }

  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl text-center mt-6 font-bold underline uppercase'>Contact Us</h1>
      <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center sms:gap-10 mt-10">
         {/* left side */}
          <div className='flex-1 p-9 rounded-lg shadow-md border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5'>
            <img src={contact} alt="contact" width={550} className="w-full object-cover rounded-lg mb-2"  />
            <p className='text-base tracking-wide'>Have questions or ready to get started? Contact us today, and let's begin the conversation that leads to your success.</p>
            <div className="flex items-center mt-5">
               <IoLocationSharp className='mr-2 text-indigo-500' size={20} />
               <p className='text-xs flex items-center gap-2 font-semibold'>No.251,2nd Floor,Janajaya City Mall,Rajagiriya.</p>
            </div>  
            <div className="flex items-center mt-3">
              <IoMail className='mr-2 text-indigo-500' size={20} />
              <p className='text-xs flex items-center gap-2 font-semibold'>ashaglobalsolutions1@gmail.com </p>
            </div>
            <div className="flex items-center mt-3">
              <BsFillTelephoneFill className='mr-2 text-indigo-500' size={20} />
              <p className='text-xs flex items-center gap-2 font-semibold'>+94 70 6 69 00 40  || +94 71 6 82 22 33
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 py-20 shadow-md flex flex-col gap-8 p-8  rounded-lg border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5">
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div>
                <Label value="Your Name" className='text-sm uppercase tracking-wide' />
                <TextInput type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}  />
              </div>
              <div>
                <Label value="Phone Number" className='text-sm uppercase tracking-wide'/>
                <TextInput type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
              </div>
              <div>
                <Label value="E-Mail" className='text-sm uppercase tracking-wide'/>
                <TextInput type="email" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div>
                <Label value="Subject" className='text-sm uppercase tracking-wide'/>
                <TextInput type="text" placeholder="subject" onChange={(e) => setSubject(e.target.value)} value={subject} />
              </div>
              <div>
                <Label value="Message" className='text-sm uppercase tracking-wide'/>
                <Textarea type="text" placeholder="message..." rows='3' maxLength='200' onChange={(e) => setMessage(e.target.value)} value={message}/>
              </div>
              <Button type='submit'  gradientDuoTone='purpleToPink' className="uppercase">Send Message</Button>
              {errMsg && <Alert className="mt-7 py-3 bg-gradient-to-r from-red-100 via-red-300 to-red-400 shadow-shadowOne text-center text-red-600 text-base tracking-wide animate-bounce">{errMsg}</Alert>}
              {successMsg && <Alert className="mt-7 py-3 bg-gradient-to-r from-green-200 via-green-300 to-green-400 shadow-shadowOne text-center text-green-800 text-base tracking-wide animate-bounce">{successMsg}</Alert>}
            </form>
          </div>
      </div>
    </div>
  )
}

export default ContactUs