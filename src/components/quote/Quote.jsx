import qot from  '../../assets/q1.png'

const Quote = ()=>{
  return(
    <>
    <div className="qt"
    style={{
      background:'#F5EEE6',
      overflow: 'hidden',
      height:'400px',
      width:'100vw',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',

    }}
    >
      <img src={qot} alt="quote" style={{
        width:'800px',
        zIndex:5,
        position:'relative'
      }} />
    </div>
    </>
  )
}

export default Quote;