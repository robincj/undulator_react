import cfg from '../../config';
import './merchandise-form.scss';

export const MerchandiseForm = ({ labelClass, inputDiv, setMerchandisePrice }) => {

    const calculatePrice = () => {
        const inputs = document.querySelectorAll('.merch-quantity');
        let total = 0;
        inputs.forEach((el) => {
            const itemPrice = +(el.getAttribute('data-price') || 0);
            const itemQuantity = +(el.nodeValue || 0);
            total += itemPrice * itemQuantity;
        });
        setMerchandisePrice(total);
    };

    return <div className='row'>
        <div className='form-group merchandise'>
            {Object.entries(cfg.MERCHANDISE).map(([ref, item]) => {
                const name = item.display_name;

                return <div id='merchandise-form'>
                    <label className={`col-xs-12 ${labelClass}`} data-toggle="modal"
                        data-target={`#${ref}-modal`}>
                        <span data-toggle="tooltip"
                            data-placement="top" title={`Click to see ${name}`}>
                            {name} ({item.price})
                        </span>
                    </label>
                    <div className={inputDiv}>
                        <label htmlFor={`${ref}-quantity`} >
                            Quantity </label>
                        <input type="number"
                            name={`${ref}-quantity`} data-price={item.price}
                            id={`${ref}-quantity`} className='form-control merch-quantity'
                            size={2} min="0" max="25" value="0"
                            onChange={calculatePrice} />

                        {item.sizes && <>
                            <label htmlFor={`${ref}-size`} >
                                Size </label>
                            <select name={`${ref}-size`}
                                id={`${ref}-size`} className='form-control merch-size' >
                                {item.sizes.map(size => <option value={size}>{size}</option>)}
                            </select>
                        </>}
                    </div>
                </div>
            })}
        </div>
    </div>


    // <? php if (!empty($item['image'])):?>

    // < !--Modal -->
    // <div className='modal fade' id="<?=$ref."- modal"?>" tabindex = "-1"
    // role = "dialog" aria - labelledby="myModalLabel" aria - hidden="true" >
    // <div className='modal-dialog'>
    //     <div className='modal-content'>
    //         <div className='modal-header'>
    //             <button type="button" className='close' data-dismiss="modal"
    //                 aria-label="Close">
    //                 <span aria-hidden="true">&times;</span>
    //             </button>
    //         </div>
    //         <div className='modal-body'>
    //             <?php //include "merchandise.php"; ?></div>
    //         <div className='text-center'>
    //             <h3><?=$name?></h3>
    //             The <?=$item['description']?> can be purchased with your entry for $<?=$item['price']?>.
    //             <br /> <br /> <img style="display: inline;"
    //                 className='img-responsive' alt="<?=$name?>" src="<?=$item['image']?>">

    //             </div>
    //             <div className='modal-footer'></div>
    //         </div>
    //     </div>
    // </div>
    //         }}

}

export default MerchandiseForm;