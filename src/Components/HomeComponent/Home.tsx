import React from 'react'
import "./Home.css"
function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="addToCart.png" alt="" />
            </div>
            Home Component
            <div className="cart-wrapper">
                <div className="img-wrapper items">
                    <img src="iphone.png" alt="iphone" />
                </div>

                <div className="text-wrapper items">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:1000
                    </span>
                </div>
                <div className="btn-wrapper items">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
