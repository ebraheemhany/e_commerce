import './NewCollection.css';
import new_collection from '../Assets/new_collections';
import Item from '../item/Item';
export default function NewCollection() {
  return (
    <div className='New_Collection'>
         <h1>NEW COLLECTION</h1>
         <hr />
        <div className='collection'>
            {new_collection.map((item , idx) => {

return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>

    </div>
  )
}
