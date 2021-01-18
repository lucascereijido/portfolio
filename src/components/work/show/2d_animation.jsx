import biking from '../../../assets/2DAnimation/biking.gif'; 
import cubehead from '../../../assets/2DAnimation/cubehead.gif'; 
import liiz from '../../../assets/2DAnimation/liiz.gif'; 
import walkers from '../../../assets/2DAnimation/walkers.gif'; 
import walkyellow from '../../../assets/2DAnimation/walkyellow.gif'; 
import yek from '../../../assets/2DAnimation/yek.gif'; 

export default function Animation(props){
   return( 
   <div className="content">
           <div className='quarantony'>
               <iframe width="420" height="315" src="https://www.youtube.com/watch?v=IVxoitrsATg&ab_channel=lucascereijido">
               </iframe>
               <div>QUARAN-TONY details a dull and relatable day in the life of Tony, spirit animal of ~quarantine~</div>
           </div>
       
        <div className='show-column'>
            <img alt="hello" src={biking}></img>
            <img alt="hello" src={cubehead}></img>
        </div>
        <div className="show-column">
               <img alt="hello" src={liiz}></img>
               <img alt="hello" src={walkers}></img>
        </div>
           
        <div className='show-column'>
            
            
            <img alt="hello" src={yek}></img>
               <img alt="hello" src={walkyellow}></img>
        </div>
    </div>)

}