import React from 'react'
import '../App.scss'

import './CasesSectoin.scss';
import {CasesItems} from './CasesItems';

function CasesSection() {
    return (
        <div className="CasesSection" id="work">
            <div className="CasesSection__container">
                <h1 className="CasesSection__title">Последние кейсы</h1>
                <div className="CasesSection__items">
                {CasesItems.map((item, index) => {
                return (
                        <div className="CasesSection__item-box"  key={index}>
                        <img src={item.img} alt={item.alt} className={item.classImg} />
                        <div className={item.className}>{item.title}</div>
                        <div className={item.classDat}>{item.dat}</div>
                        <div className="CasesSection__item-text">{item.text}</div>
                        </div>
                );
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default CasesSection
