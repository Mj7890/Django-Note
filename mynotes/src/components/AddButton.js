import React from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as AddNote} from "../assets/add.svg"


const AddButton = () => {
  return (
    <div>
        <Link to="/note/new" className='floating-button'>
            <AddNote/>

        </Link>

    </div>
  )
}

export default AddButton