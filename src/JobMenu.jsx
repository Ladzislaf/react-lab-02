import React from "react";
import "./style.css";

function JobMenu(props) {
    let job_link;

    switch (props.job) {
        case "job_1": { // programmer
            job_link = "https://videoinfographica.com/programmer/#kto-takoy";
            break;
        }
        case "job_2": { // teacher
            job_link = "https://proforientator.ru/publications/articles/professiya-uchitel.html";
            break;
        }
        case "job_3": { // driver
            job_link = "https://www.profguide.io/professions/Shofor.html";
            break;
        }
        case "job_4": { // administrator
            job_link = "https://kudapostupat.com/vse-o-professii-administrator/";
            break;
        }
        case "job_5": { // farmer
            job_link = "https://www.kp.ru/putevoditel/obrazovanie/fermer/";
            break;
        }
        default: {
            job_link = "https://www.google.com/";
            break;
        }
    }

    return (
        <div className="job_menu">
            <a href={job_link}>Срок обучения</a>
            <a href={job_link}>Заработная плата</a>
            <a href={job_link}>График</a>
            <a href={job_link}>Доступные вакансии</a>
            <a href={job_link}>Описание</a>
            <a href={job_link}>Место работы</a>
            <a href={job_link}>Дополнительная информация</a>
            <a href={job_link}>{props.job}</a>
        </div>
    )
}

export default JobMenu;
