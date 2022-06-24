// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { isPast, format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { CalendarX, CheckCircle, Lock } from "phosphor-react"
import { Link } from "react-router-dom";
import "./../styles/card.css"

interface LessonCardProps {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Card = (props: LessonCardProps) => {
  const isLessonAvailable = isPast(props.availableAt)
  const formattedAvailableAt = format(
    props.availableAt, 
    "d'/'MMMM' | 'EEEE' | 'k':'mm' h'",
    {
      locale: ptBR,
    })
  return (
    <section className="lesson-card-main">
      {/* <a href="#"> */}
      <Link to={`/main/lesson/${props.slug}`}>
        <span className="lesson-date-time">
          <span className="lesson-date-time-icon">
            <CalendarX size={24} />
          </span>
          {formattedAvailableAt}
        </span>
        <section className="lesson-details">
          <header className="lesson-header">
            {isLessonAvailable ?
              (<span className="lesson-status-available">
                <CheckCircle size={20} />
                Disponível
              </span>) :
              (<span className="lesson-status-unavailable">
                <Lock size={20} />
                Em breve
              </span>)
            }
            <span className="lesson-type">
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>
          <strong className="lesson-brief">
            {props.title}
          </strong>
        </section>
        </Link>
    </section>
  )
}