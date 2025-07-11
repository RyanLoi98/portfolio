import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
    return (
        <section className = "relative w-full min-h-screen mx-auto flex flex-col mt-[64px]">
            <div className = {`${styles.paddingX} inset-0 top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className = "flex flex-col justify-center items-center mt-5">
                    <div className = "w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className = "w-1 sm:h-60 h-40 violet-gradient"/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Ryan Loi</span></h1>
                    <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a Computer Science graduate from the University of Calgary with a passion for coding, problem-solving, and building 
                        software solutions. I enjoy creating web applications, mobile apps, and computer programs. Currently, I'm actively seeking 
                        junior software developer opportunities where I can apply my skills, grow as a developer, and contribute to impactful projects.
                    </p>
                </div>
            </div>
            <ComputersCanvas />

            <div className = "absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'> 
                        <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
                        className = "w-3 h-3 rounded-full bg-secondary mb-1"/>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero;