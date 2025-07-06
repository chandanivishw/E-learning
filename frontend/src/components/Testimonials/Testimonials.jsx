import React from 'react'
import './testimonial.css';

export default function Testimonials() {
    const testimonialsData = [
        {
          id: 1,
          name: "Radha",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            "https://pngimg.com/uploads/student/student_PNG65.png",
        },
        {
          id: 2,
          name: "Rohan",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            "https://th.bing.com/th/id/OIP.GHVz4960EAe3nyAJXVXg4gHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        {
          id: 3,
          name: "Jane Smith",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 4,
          name: "Shraddha",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            "https://th.bing.com/th/id/OIP.SSgSgKah_2idPPHOLx0howHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        {
          id: 5,
          name: "John Doe",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id:6,
          name: "Kiara",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            "https://th.bing.com/th/id/OIP.eiql0TGCYcn1l_MDSlYpdgHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
       
      ];

  return (
    <div>
      <section className="testimonials">
        <h2>What our students say</h2>
        <div className="testmonials-cards">
         {
            testimonialsData.map((e)=>(
                <div className="testimonial-card" key={e.id}>
                    <div className='student-image'>
                        <img src={e.image} alt="" />
                    </div>
                    <p className='message'>{e.message}</p>
                    <div className="info">
                        <p className='name'>{e.name}</p>
                        <p className="position">{e.position}</p>
                    </div>
                </div>
            ))
         }
        </div>
      </section>
    </div>
  )
}
