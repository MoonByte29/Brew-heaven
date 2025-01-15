import menubg from "../../assets/backpic.jpg";



const Background = ()=>{
  return(
    <div className="background"
    style={{
      background: `linear-gradient(45deg, rgba(86, 81, 81, 0.288),#f8f4e1 ),url(${menubg})`,
      padding: '0',
      margin: '0',
      overflow: 'hidden',
      backgroundSize: 'cover',
      height: "100vh",
      width: "100vw",
      position: "fixed",
      zIndex: 0,
      // display:'flex',
      // justifyContent:'center',
      // alignItems:'center'
    }}>
    </div>
  )
}

export default Background;