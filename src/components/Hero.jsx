import { motion } from "framer-motion"
import profile from "../assets/profile.png"

import {
FaGithub,
FaLinkedin,
FaEnvelope
}
from "react-icons/fa"

export default function Hero(){

return(

<div
id="home"
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
maxWidth:"700px"
}}
>

<p className="text-info mb-4">

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

Hi, I'm

<span className="primary">

Priyanka

</span>

</motion.h1>

<h2 className="mt-3">

Aspiring Full Stack &
AI Developer

</h2>

<p
className="
text-secondary
mt-4
fs-5
"
>

Building modern web experiences,
exploring AI,
and creating meaningful products.

</p>

<div
className="
d-flex
gap-3
mt-5
"
>

<a
href="#projects"
className="
btn
btn-primary
btn-lg
hero-btn
"
style={{
height:"64px",
borderRadius:"18px"
}}
>

View Projects

</a>

<a
href="/resume.pdf"
className="
btn
btn-outline-light
btn-lg
hero-btn
"
style={{
height:"64px",
borderRadius:"18px"
}}
>

Resume

</a>

</div>

<div
className="
mt-5
d-flex
gap-4
fs-4
"
>

<a
href="#"
className="text-light"
>
<FaGithub/>
</a>

<a
href="#"
className="text-light"
>
<FaLinkedin/>
</a>

<a
href="#"
className="text-light"
>
<FaEnvelope/>
</a>

</div>

<div
className="
d-flex
gap-5
mt-5
"
>

<div>

<h2>

5+

</h2>

<p>

Projects

</p>

</div>

<div>

<h2>

10+

</h2>

<p>

Technologies

</p>

</div>

<div>

<h2>

∞

</h2>

<p>

Learning

</p>

</div>

</div>

</div>

<div className="hero-card">

<div className="hero-glow"/>

<div className="hero-profile">

<img

src={profile}

alt="profile"

className="profile-image"

/>

</div>

<h3>

Building.
Learning.
Growing.

</h3>

<p>

Focused on
Web,
AI
and
Cloud.

</p>

</div>

</div>

)

}