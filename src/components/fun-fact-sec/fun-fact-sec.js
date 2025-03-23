import React from 'react';

import FunFactCard from './fun-fact-card';
import { funFactData } from '../../Data';

import './fun-fact-sec.scss';

const FunFactSec = () => {
    return (
        <section className="fun_fact">
            <div className="container">
                <div className="row">
                    {
                        funFactData.map((item, index) => (
                            <FunFactCard key={index} funfactImg={item.image} strength={item.strength} heading={item.heading} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FunFactSec
