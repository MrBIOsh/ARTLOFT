import React, { useState } from "react";
import "./TimeLine.scss";

const steps = [
  {
    id: 1,
    title: "ЗАЯВКА",
    description:
      "Получив Вашу заявку, мы детально изучаем особенности проекта.",
  },
  {
    id: 2,
    title: "КОНСУЛЬТАЦИЯ И ЗАМЕР",
    description:
      "Согласовываем выезд на замер, обсуждаем материалы, сроки и другие детали проекта.",
  },
  {
    id: 3,
    title: "ПРЕДОПЛАТА",
    description:
      "Фиксируем все договорённости, заключаем договор. Работаем по предоплате 50%.",
  },
  {
    id: 4,
    title: "ПРОИЗВОДСТВО",
    description:
      "Запускаем производство Вашего заказа. Соблюдаем сроки, указанные в договоре.",
  },
  {
    id: 5,
    title: "ДОСТАВКА И УСТАНОВКА",
    description:
      "Доставляем готовые изделия в любые регионы. Установка включена в стоимость. ",
  },
];

const TimeLine = () => {
  const [activeStep, setActiveStep] = useState(4); // Этап 4 активен по умолчанию

  return (
    <div className="timeline">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step ${step.id === activeStep ? "active" : ""}`}
          onClick={() => setActiveStep(step.id)}
        >
          <div className="step-number">
            {step.id < 10 ? `0${step.id}` : step.id}
          </div>
          <div className="circle"></div>
          <div className="title">{step.title}</div>
          <div className="description-m description">{step.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;