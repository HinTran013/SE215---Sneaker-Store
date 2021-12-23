import sneaker from "../../assets/images/ColoredSneaker.png"
import nike1 from "../../assets/images/nike-1.png"
import jordan1 from "../../assets/images/jordan-1.png"
import nike15 from "../../assets/images/nike-15.png"
import adidas from "../../assets/images/nike-14.png"

export const CartItem =
[
    {
        id: 1,
        thumbnail: nike15,
        name: "Jordan",
        color: "Red",
        size: "XL",
        price: "200",
        quantity: 1,
        discount: 10,
        total: "180"
    },
    {
        id: 2,
        thumbnail: nike1,
        name: "Nike Sport",
        color: "Green",
        size: "XXL",
        price: "200",
        quantity: 2,
        discount: 0,
        total: "400"
    }, 
    {
        id: 3,
        thumbnail: jordan1,
        name: "Jordan White",
        color: "White",
        size: "S",
        price: "350",
        quantity: 3,
        discount: 15,
        total: "892.5"
        },
    {
        id: 4,
        thumbnail: adidas,
        name: "Adidas",
        color: "Blue",
        size: "XXL",
        price: "270",
        quantity: 3,
        discount: 5,
        total: ""
    },
]