import './Card.css'

const Card = (props) => {

    return(
        <section className='sections'>
                <div className='image'><img src={props.logo} alt='Logo'/></div>
                <div className="name">{props.name}</div>
                <div className='shipping'>{'$ ' +props.shippingAmount}</div>
                <div className='delivery'>{props.deliveryTime}</div>
        </section>
    )
}

export default Card