export default function Projects(){

const projects=[

{
title:"AI Resume Builder",
desc:"Generate optimized resumes using AI.",

stack:[
"Python",
"Streamlit",
"LLM"
]
},

{
title:"Local AI Chatbot",
desc:"Chat with local LLM models using Ollama.",

stack:[
"React",
"Flask",
"Ollama"
]
},

{
title:"Personal Portfolio",
desc:"Modern animated portfolio website.",

stack:[
"React",
"Bootstrap",
"Framer"
]
}

]

return(

<section
id="projects"
className="section"
data-aos="zoom-in"
>

<h1
className="
display-3
fw-bold
mb-5
"
>

Featured Projects

</h1>

<div
className="
d-flex
gap-4
flex-wrap
"
>

{

projects.map(
(
project,
index
)=>(

<div
key={index}
className="project-card"
>

<h3>

{project.title}

</h3>

<p
className="
text-secondary
"
>

{project.desc}

</p>

<div
className="
d-flex
gap-2
flex-wrap
"
>

{

project.stack.map(
tech=>

<span
className="
badge
bg-dark
"
>

{tech}

</span>

)

}

</div>

<div
className="
mt-4
d-flex
gap-3
"
>

<a
href="#"
className="
btn
btn-primary
"
>

Live

</a>

<a
href="#"
className="
btn
btn-outline-light
"
>

Code

</a>

</div>

</div>

)

)

}

</div>

</section>

)

}