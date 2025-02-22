import './Populer.css';
import data_product from '../Assets/data';  
import Item from '../item/Item';
 const Populer = () => {
  return (
    <div className='populer'>
      <h1>Populer Women</h1>
      <hr/>
<div className='popluer_item'>
    {data_product.map((item , idx) => {
       return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>   
    })}
</div>


    </div>
  )
}
export default Populer ;