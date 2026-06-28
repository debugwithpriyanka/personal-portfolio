import { motion } from "framer-motion"

export default function Hero(){

return(

<div
className="
section
d-flex
align-items-center
"
>

<div>

<p
className="
text-info
mb-3
"
>

🟢 OPEN TO OPPORTUNITIES

</p>

<motion.h1

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
display-1
fw-bold
"

>

Hi,
I'm

<span
className="
primary
"
>

Priyanka

</span>

</motion.h1>

<p
className="
fs-4
mt-4
"

>

Aspiring Full Stack &
AI Developer

</p>

<p
className="
text-secondary
"

>

Building modern web experiences.

</p>

<div
className="
mt-5
d-flex
gap-3
"
>

<button
className="
btn
btn-primary
"
>

View Projects

</button>

<button
className="
btn
btn-outline-light
"
>

Resume

</button>

</div>

</div>

</div>

)

}