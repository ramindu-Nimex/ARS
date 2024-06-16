import banner from '/banner.png'
import brandName from '/brandName.png'
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
    <section className='w-full flex flex-col lgl:flex-row gap-10 py-16 px-5'>
       <div className='w-full lgl:w-1/2 flex flex-col gap-5 pt-10'>
          <img src={brandName} alt="" />
          <h1 className='text-xl md:text-3xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center text-slate-500 homeText'>
            We Create <span className='text-indigo-600 font-mono [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] homeText'>{text}</span>
            <Cursor 
              cursorBlinking = 'false'
              cursorStyle = '|'
              cursorColor = 'rgb(79 70 229)'
            />
          </h1>
          <p className='text-sm md:text-base font-bodyFont leading-6 tracking-wide text-justify text-slate-700 dark:text-gray-500'>At Asha Global Recruitment Solutions, we specialize in providing top-tier manpower solutions tailored to meet the unique needs of your business. Our extensive pool of skilled laborers is ready to support various industries, ensuring the perfect match for your requirements. Committed to quality and reliability, we help you achieve operational excellence with a workforce you can trust.</p>
       </div>
       <div className='w-full lgl:w-1/2 flex justify-center items-center relative shadow-xl'>
          <img src={banner} alt="" className='lgl:h-[500px] lgl:w-[750px] z-10' />
          <div className='absolute bottom-0 lgl:h-[500px] lgl:w-[750px] p-3  rounded-tl-3xl rounded-br-3xl flex justify-center items-center gap-10 bg-slate-100 dark:bg-slate-900'/>
       </div>
    </section>
  )
}

export default HomePage