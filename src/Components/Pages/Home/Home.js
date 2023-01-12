import React from 'react'
import Herosection from '../../childs/Herosection'
import FeaturedProducts from '../Featured/FeaturedProducts'
import Service from '../Service/Service'

function Home() {
  return (
    <>
    <Herosection
     welcome ={"WELCOME TO"}
     content={"MYSTORE"}
     imgs={"about.jpg"}
     pragraph ={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim harum non quidem vitae necessitatibus quos veritatis. Vitae rem delectus placeat eligendi tenetur cum deserunt, suscipit repellendus, nam eos dolore."}
     Button = {"VISIT SHOP"}
     />
     <FeaturedProducts/>
     <Service/>
    </>
  )
}

export default Home