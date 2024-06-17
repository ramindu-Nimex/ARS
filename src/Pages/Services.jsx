import service1 from '/service1.jpg'
import service2 from '/service2.jpg'
import service3 from '/service3.jpg'
import service4 from '/service4.jpg'
import service5 from '/service5.jpg'
import service6 from '/service6.jpg'
import service7 from '/service7.jpg'
import service8 from '/service8.jpg'
import service9 from '/service9.jpg'
import service10 from '/service10.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl text-center my-6 font-bold underline uppercase'>OUR SERVICES</h1>
      <div className="flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {
            ServiceData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg bg-slate-200 dark:bg-slate-700 text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <img src={service.backgroundImage} alt="" className="w-80 h-80 object-cover" />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='text-center py-10 max-w-7xl mx-auto'>
        <p className='text-slate-700 dark:text-gray-500 my-2 font-medium'>
          We always try to satisfy our customer in our level best. <br /><br />
          How we archive this?? <br /><br />
          1. Competitive price. <br />
          2. Quality man power with them high quality. <br /><br />
          For overcome this, Applicant are screened at interview held to verify with personal details education and work history. such as well screened going through their background with recommendation from recognizes personalities this insure for our customer are supplied with good quality. <br /><br />
          Highly attending their working process and investigate their productivity and tally of your requirement by using our supervisors.
        </p>
      </div>
    </div>
  )
}

export const ServiceData = [
  {
    backgroundImage: service1,
  },
  {
    backgroundImage: service2,
  },
  {
    backgroundImage: service3,
  },
  {
    backgroundImage: service4,
  },
  {
    backgroundImage: service5,
  },
  {
    backgroundImage: service6,
  },
  {
    backgroundImage: service7,
  },
  {
    backgroundImage: service8,
  },
  {
    backgroundImage: service9,
  },
  {
    backgroundImage: service10,
  },
]

export default Services