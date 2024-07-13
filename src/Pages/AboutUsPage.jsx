import about from '/about.jpg'

const AboutUsPage = () => {
  return (
    <div className='p-3 bg-purple-200 dark:bg-slate-700 min-h-screen border border-indigo-600 rounded-tl-3xl rounded-br-3xl m-5'>
      <h1 className='text-2xl text-center mt-6 font-bold underline uppercase'>About Us</h1>
      <h1 className='text-center my-2 text-xl font-medium'>At ARS, We are specialized manpower Company to full fill your any labor forced.</h1>
      <div className='flex flex-col sms:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl'>
        <div className='flex-1'>
          <p className="my-2 text-justify">
            Recruitment we are fully owned and mange by Sri Lankans therefore we have huge understand the needs and recruitment business environments and clients.<br></br><br></br>
            We operated 10 years in this field and in short period we can understand your ideas. Also, satisfaction of labor.<br></br><br></br>
            We specialized in all aspect of recruitment from temporary jobs To highly specialized filed we have unique screening process to identify the skill individuals who are looking for opportunities and there for we have competitive advantage over other manpower companies in giving you the best possible people for your task.<br></br><br></br>
            Asha Global Recruitment Solutions has good relation from construction and industrial Factory field in sri Lanka and happy to say we covered 60% of labor requirement of the construction field and Industrial Field.
          </p>
          <ul className='font-semibold'>
            <li className='text-2xl uppercase'>Our Solution</li>
            <li>Skill employees</li>
            <li>Satisfy workers</li>
            <li>Positive attitude</li>
            <li>Competitive wages</li>
            <li>Quality management process</li>
          </ul>
        </div>
        <div className="flex-1 p-3 sms:p-16">
          <img src={about} alt="" className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage