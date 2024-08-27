import Institutenavbar from "./Institutenavbar";

const Postjobs=()=>{
    return(
        <>
        <Institutenavbar/>
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12">
                    <div className="container mx-auto bg-body-secondary rounded" style={{fontFamily:"sans-serif"}}>
                        <p className="fw-bold text-dark-emphasis">Hiring For</p>
                        <input type="text" className="form-control" placeholder="Enter the Institute Name"/>
                        <p className="fw-bold text-dark-emphasis">Job Category</p>
                        <select>
                            <option>Trainer</option>
                            <option>Skilled Trainer</option>
                            <option>Religious Trainer</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Postjobs;