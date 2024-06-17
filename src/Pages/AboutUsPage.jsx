import banner from '/banner.png'

const AboutUsPage = () => {
  return (
    <div className='p-3 bg-amber-100 dark:bg-slate-700 min-h-screen border border-teal-500 rounded-tl-3xl rounded-br-3xl m-5'>
      <h1 className='text-2xl text-center mt-6 font-bold underline uppercase'>About Us</h1>
      <h1 className='text-center my-2 text-xl font-medium'>At ARS, We are specialized manpower Company to full fill your any labor forced.</h1>
      <div className='flex flex-col sms:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl'>
        <div className='flex-1'>
          <p className="text-gray-500 my-2 text-justify">
            Recruitment we are fully owned and mange by Sri Lankans therefore we have huge understand the needs and recruitment business environments and clients.<br></br><br></br>
            We operated 10 years in this field and in short period we can understand your ideas. Also, satisfaction of labor.<br></br><br></br>
            We specialized in all aspect of recruitment from temporary jobs To highly specialized filed we have unique screening process to identify the skill individuals who are looking for opportunities and there for we have competitive advantage over other manpower companies in giving you the best possible people for your task.<br></br><br></br>
            Asha Global Recruitment Solutions has good relation from construction and industrial Factory field in sri Lanka and happy to say we covered 60% of labor requirement of the construction field and Industrial Field.
          </p>
          <ul className='font-semibold dark:text-slate-400 mt-5 text-slate-700'>
            <li className='text-2xl uppercase'>Our Solution</li>
            <li>Skill employees</li>
            <li>Satisfy workers</li>
            <li>Positive attitude</li>
            <li>Competitive wages</li>
            <li>Quality management process</li>
          </ul>
        </div>
        <div className="flex-1 p-7">
          <img src={banner} alt="" className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage