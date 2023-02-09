import Image from 'next/image'
import React from 'react'

export default function SdgComponent() {

  let data = [
    {
      head: 'GOAL 1: NO POVERTY',
      body: 'Economic growth must be inclusive to provide sustainable jobs and promote equality.',
      image: '/images/sdg/one.gif',
    },
    {
      head: 'GOAL 2: ZERO HUNGER',
      body: 'The food and agriculture sector offers key solutions for development, and is central for hunger and poverty eradication.',
      image: '/images/sdg/two.gif',
    },
    {
      head: 'GOAL 3: GOOD HEALTH AND WELL-BEING      ',
      body: 'Ensuring health and well-being for all, including a bold commitment to end the epidemics of AIDS, tuberculosis, malaria and other communicable diseases by 2030.',
      image: '/images/sdg/three.gif',
    },
    {
      head: 'GOAL 4: QUALITY EDUCATION ',
      body: 'Obtaining a quality education is the foundation to improving people’s lives and sustainable development.',
      image: '/images/sdg/four.gif',
    },
    {
      head: 'GOAL 5: GENDER EQUALITY      ',
      body: 'Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.',
      image: '/images/sdg/five.gif',
    },
    {
      head: 'GOAL 6: CLEAN WATER AND SANITATION      ',
      body: 'Clean, accessible water for all is an essential part of the world we want to live in.',
      image: '/images/sdg/six.gif',
    },
    {
      head: 'GOAL 7: AFFORDABLE AND CLEAN ENERGY      ',
      body: 'Energy is central to nearly every major challenge and opportunity.  ',
      image: '/images/sdg/seven.gif',
    },
    {
      head: 'GOAL 8: DECENT WORK AND ECONOMIC GROWTH  ',
      body: 'Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.',
      image: '/images/sdg/eight.gif',
    },
    {
      head: 'GOAL 9: INDUSTRY, INNOVATION, AND INFRASTRUCTURE      ',
      body: 'Investments in infrastructure are crucial to achieving sustainable development. ',
      image: '/images/sdg/nine.gif',
    },
    {
      head: 'GOAL 10: REDUCED INEQUALITIES      ',
      body: 'To reduce inequalities, policies should be universal in principle, paying attention to the needs of disadvantaged and marginalized populations.    ',
      image: '/images/sdg/ten.gif',
    },
    {
      head: 'GOAL 11: SUSTAINABLE CITIES AND COMMUNITIES      ',
      body: 'There needs to be a future in which cities provide opportunities for all, with access to basic services, energy, housing, transportation and more.   ',
      image: '/images/sdg/eleven.gif',
    },
    {
      head: 'GOAL 12: RESPONSIBLE CONSUMPTION AND PRODUCTION      ',
      body: 'Responsible Production and Consumption      ',
      image: '/images/sdg/twelve.gif',
    },
    {
      head: 'GOAL 13: CLIMATE ACTION      ',
      body: 'Climate change is a global challenge that affects everyone, everywhere.  ',
      image: '/images/sdg/thirteen.gif',
    },
    {
      head: 'GOAL 14: LIFE BELOW WATER      ',
      body: 'Careful management of this essential global resource is a key feature of a sustainable future.      ',
      image: '/images/sdg/fourteen.gif',
    },
    {
      head: 'GOAL 15: LIFE ON LAND  ',
      body: 'Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss ',
      image: '/images/sdg/fiveteen.gif',
    },
    {
      head: 'GOAL 16: PEACE, JUSTICE AND STRONG INSTITUTIONS      ',
      body: 'Access to justice for all, and building effective, accountable institutions at all levels.      ',
      image: '/images/sdg/sixteen.gif',
    },
    {
      head: 'GOAL 17: PARTNERSHIPS      ',
      body: 'Revitalize the global partnership for sustainable development.      ',
      image: '/images/sdg/seventeen.gif',
    },

  ]


  return (
    <div className='bg-gradient-to-t from-white to-[#00cc66]'>

      <div className=' flex justify-center items-center md:w-1/2 h-1/4   mx-auto mt-5'>

        <img src="/images/sdg/sdgmain.webp" alt="" className='mt-10 xl:mt-10 xl:h-72' />
      </div>

      {/* <h1 className='text-center text-white text-5xl my-2'>SDGs:</h1> */}
      {/* <p className=' w-3/4 m-auto md:text-2xl'>The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including poverty, inequality, climate change, environmental degradation, peace and justice. Learn more and take action.
      </p> */}


      <div className="  flex flex-col justify-around items-center ">


        {data.map((x, idx): any => {

          return (
            <div className='flex justify-between items-center w-[100vw] m-1 p-3 h-[30vh] md:mt-14 md:justify-center ' key={idx}>
              <div style={{
                width: '250px',
                height: '300px',
                backgroundImage: `url(${x.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }}>
              </div>
              <div className='flex flex-col justify-center items-center p-1 bg-white text-black h-1/2 rounded-md ml-3 max-h-1/2 min-w-[59vw] max-w-[59vw] md:p-5'>
                <p className='font-semibold w-full text-sm md:text-xl'>{x.head}</p>
                <p className='font-light text-xs md:text-left md:w-full md:text-lg '>{x.body}</p>
              </div>
            </div>
          )

        })}

      </div>

    </div>
  )
}
