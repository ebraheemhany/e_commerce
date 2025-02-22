import { Link } from 'react-router';
import './Item.css';

export default function Item(props) {
  return (

//   product من  propsهنا احنا وخدين 

<div className='item_pro'>
<Link to={`/Product/${props.id}`}> <div className='item'>
 <img src={props.image} alt='' />
      <p>{props.name}</p>
       <div className='item_price'>
           <div className='new_price'>
             ${props.new_price}
           </div>
           <div className='old_price'>
             ${props.old_price}
           </div>
       </div>
    </div>
    </Link>
</div>
  )
}
