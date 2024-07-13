import chairmen from '/chairmen.png'

const ChairmenPage = () => {
  return (
    <div className='p-3 bg-purple-200 dark:bg-slate-700 min-h-screen border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5'>
      <h1 className='text-2xl text-center mt-6 font-bold underline uppercase'>Chairman's Message</h1>
      <h1 className='text-center my-2 text-xl font-medium'>Message From Chairman.</h1>
      <div className='flex flex-col sms:flex-row p-3 sms:gap-40 justify-center items-center rounded-tl-3xl rounded-br-3xl'>
        <div className='flex-1 sms:pl-10'>
          <p className="my-2 text-justify">
            Asha Global Recruitment Solutions is a Manpower Recruitment and HR Consultancy company that shape organization through professional qualified candidates for your At our company, we strive to attain success in ways that reflect integrity of our company to the outside world and people who have business deadlines with us. when you select a recruitment company to carry out business, it is crucial that you choose a recruitment company that places equal significance to your business too. We invite you to explore this as a company gateway.<br></br><br></br>
            into the business and relationships, we have created and continue to create. You will find the ways that we are forwarding knowledge and experience we have been accumulating since our inception.<br></br><br></br>
            We take this opportunity to express our sincere gratitude to all staffs, our valued clients and job seekers for their trust and confidence kept on our company. We would like to welcome you and hope you will find an existing experience with Asha Global Recruitment Solutions With the experience in the relevant recruitment field, we are experts in forgoing partnerships to improve performance, reduce cost and searching innovative candidates for our clients. We are proud to state that we are have made our presence felt in the recruitment field in Sri Lanka.<br></br><br></br>
          </p>
          <h2>Sasanka Jayawickrama.</h2>
          <h2>Chairman,</h2>
          <h2>Asha Global Recruitment Solutions.</h2>
        </div>
        <div className="flex-1 p-7">
          <img src={chairmen} alt="" className='rounded-md' width={400} />
        </div>
      </div>
    </div>
  )
}

export default ChairmenPage