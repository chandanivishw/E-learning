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
          "data:image/webp;base64,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"
            // "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
