import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Covid.css';
import {Card} from 'react-bootstrap';

const Covid = () => {

    const [datas,setDatas] = useState([]);

    const getData = async () =>{
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const res2 = await res.json();
            setDatas(res2.statewise);
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(datas);

    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <div className="header">
                
                <div className="app-name">COVID-19 Tracker (INDIA)</div>

                <div className="live">
                <div className="live-icon"></div>
                <div className="live-text">LIVE</div>
                </div>
                
            </div>
            <hr style={{color:"white",width:"100%"}} />
        <div className="main">
        {datas.map((data,index)=>{
            return <div className="card" key={index}>
            <Card
            bg="dark"
            text={"white"}
            border="white"
            style={{ width: '18rem' }}
            >
            <Card.Header
                style={{fontSize :"1.1rem", textAlign: "center", borderColor:"white"}}
            >
                {data.state}
            </Card.Header>
            <Card.Body>
            <Card.Text>
                Confirmed: {data.confirmed} <br />
                Recovered: {data.recovered} <br />
                Active: {data.active} <br />
                Deaths: {data.deaths} <br />
                Last Updated Time: {data.lastupdatedtime} 
            </Card.Text>
            </Card.Body>
        </Card></div>
        })}
        </div>

        </>
    )
}

export default Covid;
