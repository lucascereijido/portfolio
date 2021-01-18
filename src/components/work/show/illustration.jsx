import face from '../../../assets/illustration/face.jpg';
import fruit from '../../../assets/illustration/fruit.jpeg';
import lmao from '../../../assets/illustration/lmao.jpg';



export default function illustration(props) {
    return (
        <div className="content">
            <div className="show-column">
                <img alt="hello" src={face}></img>
                <img alt="hello" src={fruit}></img>
            </div>

            <div className="show-column">
                <img alt="hello" src={lmao}></img>
            </div>
            <div className="mobile-show-column">
                <img alt="hello" src={face}></img>
                <img alt="hello" src={fruit}></img>
                <img alt="hello" src={lmao}></img>
            </div>
            
        </div>)
}