import banner from '/banner.png'
import brandName from '/brandName.png'
import manpower from '/manpower.jpg'
import payment from '/payment.png'
import safety from '/safety.png'
import service from '/service.png'
import search from '/search.png'
import certified from '/certified.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["opportunities by connecting you with top talent.", "the workforce that powers your business.", "excellence through quality manpower."],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 50,
    delaySpeed: 2000,
  })
  return (
    <div>
      <section className='w-full flex flex-col lgl:flex-row gap-10 sms:py-16 px-5'>
        <div className='w-full lgl:w-1/2 flex flex-col gap-5 pt-10'>
            <img src={brandName} alt="" />
            <h1 className='text-xl md:text-3xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center text-slate-500 homeText'>
              We Create <span className='text-purple-500 font-mono [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] homeText'>{text}</span>
              <Cursor 
                cursorBlinking = 'false'
                cursorStyle = '|'
                cursorColor = 'rgb(79 70 229)'
              />
            </h1>
            <p className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium '>At Asha Global Recruitment Solutions, we specialize in providing top-tier manpower solutions tailored to meet the unique needs of your business. Our extensive pool of skilled laborers is ready to support various industries, ensuring the perfect match for your requirements. Committed to quality and reliability, we help you achieve operational excellence with a workforce you can trust.</p>
        </div>
        <div className='w-full lgl:w-1/2 flex justify-center items-center relative shadow-xl'>
            <img src={banner} alt="" className='lgl:h-[500px] lgl:w-[750px] z-10' />
            <div className='absolute bottom-0 lgl:h-[500px] lgl:w-[750px] p-3  rounded-tl-3xl rounded-br-3xl flex justify-center items-center gap-10 bg-slate-100 dark:bg-slate-900'/>
        </div>
      </section>
      <div className="p-3 bg-purple-200 dark:bg-slate-700">
        <div className="flex flex-col sms:flex-row p-3 border border-indigo-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
          <div className="flex justify-center flex-col flex-1">
              <h1 className='text-2xl uppercase mb-8 font-semibold'>What We Need</h1>
              <div className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium flex flex-col gap-5'>
                <p>To be a first and best manpower supplier in our country and support for your any kinds of labour requirement.</p>
                <p>Providing manpower and any HR solution complying with your needs and satisfaction.</p>
                <p>To help of enterprises to archive grater heights through our ever friendly personalized cost effective man power solution.</p>
              </div>
          </div>
          <div className="flex-1 p-7">
            <img src={manpower} alt="" className='rounded-md opacity-80' />
          </div>
        </div>
      </div>

      <div className='w-full max-w-7xl mx-auto'>
          <h1 className='text-2xl uppercase mb-8 font-bold pt-5 text-center underline'>Why Choose Us</h1>
          <div className='flex flex-col sms:flex-row p-3 justify-center items-center gap-5 sms:gap-40'>
              <div className="flex justify-center flex-col flex-1">
                  <h1 className='text-xl font-semibold'>SAFETY / HEALTH</h1>
                  <p className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium '>
                  Our company take all possible steps to ensure the safety of all employees. We help the clients to improve the occupational safety & Health system on a continual basis. All safety and health related issues knowledge transferring our supervisors, directly attend that and always they attend frequent meeting to ensure that they meet client safety procedures.
                  </p>
              </div>
              <div className="flex-1">
                  <img src={safety} alt="" width={500} />
              </div>
          </div>
          
          <div className='flex flex-col sms:flex-row p-3 justify-center items-center gap-5'>
              <div className="flex-1 order-2 sms:order-first">
                  <img src={payment} alt="" width={500} />
              </div>
              <div className="flex justify-center flex-col flex-1">
                  <h1 className='text-xl font-semibold'>EMPLOYEE BENEFITS & PAYMENTS</h1>
                  <p className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium '>
                      1. EPF/ETF <br></br>
                      2. Workmen Compensation Insurance (WCI) <br></br>
                      3. Providing Personnel safety equipment <br></br>
                      4. Annual trip/get together <br></br>
                      5. Gratuity <br></br>
                      6. Death Donation <br></br>
                      7. Food and logging nominal fee <br></br>
                  </p>
              </div>
          </div>

          <div className='flex flex-col sms:flex-row p-3 justify-center items-center gap-5 sms:gap-40'>
              <div className="flex justify-center flex-col flex-1">
                  <h1 className='text-xl font-semibold'>WHY YOU SELECT OUR SERVICES</h1>
                  <p className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium '>
                    1. Quality services with cost effective rate. <br></br>
                    2. We have EPF/ETF contribution. <br></br><br></br>
                    Hence our prices are total employment cost of our client we help our client to solve their labor problem with ease.<br></br><br />
                    • Our contract is subject to minimum of 8 hours day 45 hours week. <br></br>
                    • Flexible working hours as your requirement. <br></br>
                    • Warmly welcome your suggestion for improving our services. <br></br>
                    • Less paper works / on time services.
                  </p>
              </div>
              <div className="flex-1">
                  <img src={service} alt="" width={500} />
              </div>
          </div>
          
          <div className='flex flex-col sms:flex-row p-3 justify-center items-center'>
              <div className="flex-1 order-2 sms:order-first">
                  <img src={search} alt="" width={500} />
              </div>
              <div className="flex justify-center flex-col flex-1">
                  <h1 className='text-xl font-semibold'>HOW WE SELECT WORKERS</h1>
                  <p className='text-slate-700 dark:text-gray-500 my-2 text-justify font-medium '>
                  We discussion with each candidate while detailing their personal reports, Health Education. Their Previous employment such as formal background, we select candidates according to client requirements. Therefore, we work with "Grama Niladari Officers" and "Samurdi Officers". National Identity and other identification check. Therefor we inspection on their past records by the Sri Lanka police and are required to submit a police report defending on customer requirement.
                  </p>
              </div>
          </div>
      </div>

      <div className="w-full max-w-lg mx-auto pb-10">
          <h1 className='text-2xl uppercase mb-8 font-bold pt-5 text-center underline'>We are certified</h1>
          <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-2xl flex flex-col group hover:bg-gradient-to-b bg-slate-200 dark:bg-slate-700 hover:from-purple-400 hover:to-purple-100 transition-colors duration-1000">
            <div className='w-full h-full overflow-hidden rounded-lg'>
              <img src={certified} alt="" width={500} className="w-full object-cover group-hover:scale-110 duration-300 cursor-pointer" />
            </div>
          </div>
      </div>

      <div >
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.847312533731!2d79.89635679999999!3d6.908854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2598d4f4c45ab%3A0x24ab3079dde678db!2sJana%20Jaya%20City%20Mall%20Rajagiriya%20(%20JJC%20MALL%20)!5e0!3m2!1sen!2slk!4v1718650937931!5m2!1sen!2slk" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default HomePage