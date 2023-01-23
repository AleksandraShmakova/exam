import React from 'react'
import '../App.scss'

import './TasksSection.scss';
import {TasksItems} from './TasksItems';

function TasksSection() {
    return (
        <div className="TasksSection">
            <div className="TasksSection__container">
                <h1 className="TasksSection__title">
                  Наши профессиональные разработчики выполняют быстро любые задачи
                </h1>
            <div className="TasksSection__items">
                {TasksItems.map((item, index) => {
              return (
                    <div className="TasksSection__item-box"  key={index}>
                    <img src={item.img} alt={item.alt} className="TasksSection__item-img" />
                    <div className="TasksSection__item-title">{item.title}</div>
                    <div className="TasksSection__item-text">{item.text}</div>
                    </div>
              );
                })}
            </div>
        </div>
    </div>
    )
}

export default TasksSection
