import React, { useEffect, useState ,useRef} from 'react'

const Product = () => {
    const [name,setName] = useState('')
    // const rederedCount = useRef(0)
     const inputRef = useRef()

    //  use ref does not cause your component to reupdate 
    // useRef persists values between the states 

//    useEffect(()=>{
//    setrenderedcount(prevRenderedCount => prevRenderedCount + 1)
//    console.log("setrenderedcount",setrenderedcount)
    //   rederedCount.current = rederedCount.current + 1
    //   console.log("renderedCount",)
//    },)

const Focus =()=>{
    inputRef.current.Focus()
}
  return (
    <>
    <input ref ={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
    <div>
     my name is {name}
    </div>
    {/* <div>
        the component is rendered { rederedCount.current  } time
       
    </div> */}
    <button onclick={Focus}>fOCUS</button>
    </>
  )
}

export default Product