import React from 'react'
import '../App.scss'
import { Button } from './Button';
import './TeamsSection.scss';
import {TeamsItems} from './TeamsItems';

function TeamsSection() {
    return (
        <div className="TeamsSection" id="team">
            <div className="TeamsSection__container">
                <h1 className="TeamsSection__title">Команда</h1>
                <div className="TeamsSection__items">
                    {TeamsItems.map((item, index) => {
                return (
                        <div className="TeamsSection__item-box"  key={index}>
                        <img src={item.img} alt={item.alt} className="TeamsSection__item-img" />
                        <div className="TeamsSection__item-title">{item.title}</div>
                        <div className="TeamsSection__item-text">{item.text}</div>
                        </div>
                );
                    })}
                </div>
                <div className="TeamsSection__btn">
                <Button className="TeamsSection__btn" buttonStyle="btn--primary" buttonSize="btn--medium">ВСЯ КОМАНДА</Button>
                </div>
            </div>
        </div>
    )
}

export default TeamsSection
