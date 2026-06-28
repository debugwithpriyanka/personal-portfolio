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

I build modern web applications,
explore AI systems,
and turn ideas into interactive experiences.

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

<div
className="
mt-5
d-flex
gap-5
"
>

<div>

<h3>5+</h3>

<p>Projects</p>

</div>

<div>

<h3>10+</h3>

<p>Technologies</p>

</div>

<div>

<h3>∞</h3>

<p>Learning</p>

</div>

</div>

</div>

</div>

)

}