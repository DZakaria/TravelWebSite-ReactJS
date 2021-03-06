import React from 'react';
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";




export default function Services() {

    const data =[
        {
        icon: service1,
        title:"Get Best Prices",
        subTitle:
         "Pay through our application and save...",
        },
        {
        icon : service2,
        title:"Covid Save",
        subTitle:
        "We have all the curated hotels that ...",
        },
        {
        icon: service3,
        title:"Flexible Payment",
        subTitle:
        "Enjoy the flexible payement throught ",
        },
        {
            icon: service4,
            title:"Find The Best NEar You",
            subTitle:
            "Find the best hotels and places to visit ..",
        }
 
    ];

    return (
        <Section id="services">
            {data.map((service)=>{
                return (
                    <div className="service">
                        <div className="icon">
                            <img src={service.icon} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.subTitle}</p>
                    </div>
                )
            })}
            
        </Section>
    )
}

const Section =styled.section`

padding:5rem;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:1rem;
.service{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:2rem;
    background-color:aliceblue;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;

    transition: 0.3s ease-in-out;
    &:hover {
        transform:translateX(0.4rem) translateY(-1rem);
        box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
    }
    .icon{
        img{
            height:2.4rem;
        }
    }
}



`;