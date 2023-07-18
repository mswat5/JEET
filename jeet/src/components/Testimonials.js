import React from "react";
import { motion } from 'framer-motion';

const Data = [
    {
id: 1,
name: "John Doe",
Feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
id: 2,
name: "Jane smith",
Feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    }
]

 export const Testimonials = () =>{
    return(
        <section className="bg-yellow-400 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-8">
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {Data.map((testinomial)=>(
                          <motion.div  key={testinomial.id} className="bg-white rounded shadow-md p-6"
                          initial={{opacity:0,y:50}} 
                          animate={{opacity: 1, y: 0}}
                          transition={{duration:1,delay:testinomial.id *0.2}}>
                            <p className="text-lg mb-4">{testinomial.Feedback}</p>
                            <p className="text-blue-500 font-semibold">{testinomial.name}</p>
                          </motion.div>
                   ))}
                </div>
            </div>
        </section>
    )
}