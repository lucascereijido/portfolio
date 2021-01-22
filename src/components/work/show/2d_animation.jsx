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
               <iframe width="560" height="315" src="https://www.youtube.com/embed/IVxoitrsATg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="hello"></iframe>

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
           <div className='mobile-show-column'>
               
               
               <iframe width="560" height="315" src="https://www.youtube.com/embed/IVxoitrsATg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="hello"></iframe>
                   <div className="quaran-caption">QUARAN-TONY details a dull and relatable day in the life of Tony, spirit animal of ~quarantine~</div>
            
               <img alt="hello" src={biking}></img>
               <img alt="hello" src={cubehead}></img>
               <img alt="hello" src={liiz}></img>
               <img alt="hello" src={walkers}></img>
               <img alt="hello" src={yek}></img>
               <img alt="hello" src={walkyellow}></img>
           </div>
    </div>)

}