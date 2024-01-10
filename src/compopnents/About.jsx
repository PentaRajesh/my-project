import profilePic from '../assets/profile.png'

const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id='about'>
        <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10'>
            <div className='sm:w-1/2'>
                <img src={profilePic} alt="" className='w-full sm:w-11/12'/>
            </div>
            <div className='sm:w-1/2'>
            
            <p className="text-xl font-semibond mb-5">About</p>
            <h2 className="md:text-5xl text-4xl font-bold">About Me</h2>
            <p className='mt-8 md:pr-8 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis.
              Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.<br/> <br/>

Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. 
Amet pellentesque sit pulvinar lorem mi a, 
euismod risus r.</p>
<button className='btn-primary'>Contact Me</button>
            </div>
        </div>
    </div>
  )
}

export default About;