import React, { Component, useEffect } from "react";
import $ from "jquery";
import { useParams } from "react-router";

const ProductDescriptionHome = () => {
const { id } = useParams();

useEffect(() => {

    console.log(` this is final ${id}`);

});
  

  return (
  <div>hello</div>
  )



};

export default ProductDescriptionHome
// export default class ProductDescriptionHome extends Component {
    //     constructor(props) {
        //         super(props)
//     }
//     componentDidMount() {

//     }
//     render() {
//         console.log(this.props.id);
//         return (

//             <div className='productDescriptioncontainter'>
//                 <img src='https://i5.walmartimages.com/asr/8bb259ec-499e-48f8-8070-02b14104364a.5be4a0b8bc75db14aa030ef20755cc09.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'></img>

//             </div>

//         )
//     }

// }
