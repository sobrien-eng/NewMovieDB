import React from 'react'
import Nav from "../../components/NavBar/Navigation";
import revRat from "../../components/RevRat/RevRat";
const Admin = () => {

    return (
        <>
            <Nav />
            <div>Admin</div>

            <form class="container-fluid">
                <div class="input-group">
                    <div className='labelText'></div>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <div className='colOne'>
                    </div>
                    <div>
                    <revRat/>
                    </div>
                </div>
            </form>


        </>
    )
}

export default Admin