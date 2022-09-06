function Recommendation(){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth<=5
    if (!isSpring) {
     return<div>Ce n'est pa le moment de rempotez </div> 
    }
    return <div>C'est le printemps, rempotez </div>
    
}
export default Recommendation