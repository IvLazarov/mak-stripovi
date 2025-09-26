import LinkComponent from "../LinkComponent/LinkComponent";
import './StripShkola.css';

const StripShkola = () => {
    return <div className="strip-shkola-container">
        <h2>Стрип школа ги содржи стриповите од стрип школата по година</h2>
        <p>
        Краток опис на школата.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dicta autem inventore eos velit magni quaerat repellendus accusantium laboriosam obcaecati fugiat. 
        Aut delectus reiciendis, fugiat recusandae quidem ipsam minima rem dicta!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quos veritatis minus porro qui. 
        Provident, aliquam eveniet dolorem praesentium tempore vitae quaerat exercitationem 
        temporibus eius rem harum quibusdam ipsum similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate aperiam repudiandae numquam pariatur saepe fugiat, iure blanditiis quisquam in expedita alias ad optio consequuntur? 
        Labore eaque architecto facilis officiis?
        </p>
        <div>
            <h2>
            Стрипови од школата по година со истата логика како стриповите
            од СтрипТрип
            </h2>
            
        </div>
        < LinkComponent />
    </div> 
}

export default StripShkola;