import { useContext } from "react";
import DataContext from "../contexts/contexts";

// Define props interface

export function PersonDetail() {
    const dataContext = useContext(DataContext)

    const data = dataContext?.state
    return (
        <>
            <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Person Details</div>
                <div className="card-body">
                    <form>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" >First name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" 
                                value={data?.name} />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" >Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" 
                                value={data?.surname} />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}