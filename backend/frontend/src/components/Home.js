import React from 'react'
import {Box, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    image:{
        width:"50%",
        height:"100%",
        objectFit:"cover"
    }
})
function Home() {
    const style = useStyles()
    return (
        <div>
           <Box style={{display: "flex", marginTop: "5px", height:"90vh", width:"100%"}} >
               <img className={style.image} src= "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"alt="" />

               <img className={style.image}  src="https://images.unsplash.com/photo-1566869112473-77c4fb94359c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
           </Box>
        </div>
    )
}

export default Home
