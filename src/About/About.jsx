import LinkComponent from "../LinkComponent/LinkComponent";
import './About.css';

const About = () => {
    return <div className="about-container">
        <h1>Како за'рти МакСтрипови?</h1>
        <p>
        Краток опис за здружението, како дошле до идејата за здружение,
        некоја интересна приказна за доаѓање до идејата и сл.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        At harum tempora dolore excepturi assumenda totam quod ea, sed voluptatem sint quia earum quibusdam eaque enim quas sequi. 
        Repudiandae, odit beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nihil commodi! Temporibus necessitatibus voluptate mollitia natus quod consectetur tempore fugit in! Animi saepe, accusantium itaque repellendus illum quos mollitia reiciendis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa praesentium cum consectetur perspiciatis necessitatibus eos minima ut? Velit, aspernatur tempore quisquam sit itaque aperiam perferendis ipsum sint nulla rem.
        </p>
        <LinkComponent className='hover-underline' />
    </div>
}

export default About;