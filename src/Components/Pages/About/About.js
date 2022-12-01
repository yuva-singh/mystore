import React from 'react'
import Herosection from '../../childs/Herosection'

function About() {
  return (
    <div>
      <Herosection
      welcome = "WELCOME TO"
     content={"About"}
     imgs={"banner.jpg"}
     pragraph ={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim harum non quidem vitae necessitatibus quos veritatis. Vitae rem delectus placeat eligendi tenetur cum deserunt, suscipit repellendus, nam eos dolore."}
     Button = {"VISIT SHOP"}
     />
    </div>
  )
}

export default About