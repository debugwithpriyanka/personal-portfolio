import { motion } from "framer-motion"

export default function About(){

return(

<section
id="about"
className="
section
d-flex
align-items-center
justify-content-between
flex-wrap
"
>

<div
style={{
maxWidth:"550px"
}}
>

<h1
className="
display-3
fw-bold
"
>

About Me

</h1>

<p
className="
mt-4
fs-5
text-secondary
"
>

I enjoy building modern websites,
learning cloud technologies,
and exploring AI applications.

I focus on writing clean code,
improving continuously,
and creating projects that solve problems.

</p>

</div>

<motion.div

initial={{
opacity:0,
x:100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

className="
hero-card
"

>

<h2>

⚡ Developer

</h2>

<p>

Frontend • Backend • AI

</p>

</motion.div>

</section>

)

}