import React, { Component } from 'react'
import v1 from './img/v1.png'
import v2 from './img/v2.png'
import v3 from './img/v3.png'
import v4 from './img/v4.png'
import v5 from './img/v5.png'
import v6 from './img/v6.png'
import v7 from './img/v7.png'
import v8 from './img/v8.png'
import v9 from './img/v9.png'
import model from './img/model.jpg'
import style from './Home.module.css'

export default class Home extends Component {
    Product =[
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    InfoProduct = ()=>{
        const html = ()=>{
            return 
        }
    }
 state ={
    Img : v1
   }
   ChoiceImg=(img)=>{
this.setState({
    Img : img
})
   }
  render() {
    return (
      <div className={style.product}>
        <div className={style.home}>

            <div className={style.top}>
                <h4>TRY GLASSES APP ONLINE</h4>
            </div>
            <div className={style.body}>
                <div className={style.imgLeft}>
                    <img src={model} alt=''/>
                        <div className={style.text}>
                            
                      

                        </div>
                </div>
                <div className={style.right}>
                <img src={model} alt=''/>
                <div className={style.choice}>
                <img src={this.state.Img} alt=''/>
                </div>
                </div>
            </div>
        <div className={style.table}>
            <img onClick={()=>{this.ChoiceImg(v1)}}  src={v1} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v2)}} src={v2} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v3)}} src={v3} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v4)}} src={v4} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v5)}} src={v5} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v6)}} src={v6} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v7)}} src={v7} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v8)}} src={v8} alt=''/>
            <img onClick={()=>{this.ChoiceImg(v9)}} src={v9} alt=''/>


        </div>

        </div>

      </div>
    )
  }
}
