import { ai } from '../assets';
import styles from '../style';

const OurGoal = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1  ${styles.flexStart} flex-col xl:px-[30em] xl:flex-none xl: sm:px-16 px-10`}>

            <p className="xl:text-8xl text-6xl py-6 text-indigo-900">Our Goal</p>

            
            <p className={`${styles.paragraph} sm: text-[1.4em] xl:text-[2em] xl:leading-10 max-w-[470px] `}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={ ai } alt="ai photo" className="md:w-[18em] md:h-[18em] lg:w-[30em] lg:h-[30em] xl:w-[40em] xl:h-[40em] w-[20em] h-[20em] relative z-5" />
        </div>
    </section>
)

export default OurGoal;