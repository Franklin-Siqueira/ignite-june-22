// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from "@apollo/client"
//
import { Card } from "../card/Card"
import "./../styles/sidebar.css"

const GET_LESSONS = gql`
  query {
          lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            slug
            title
            lessonType
            availableAt
          }
        }`

interface Get_LessonsQueryResponseData {
  lessons: {
    id: string
    slug: string
    title: string
    lessonType: 'live' | 'class'
    availableAt: string
  }[]
}

export const Sidebar = () => {
  const { data } = useQuery<Get_LessonsQueryResponseData>(GET_LESSONS)
  return (
    <aside className="sidebar-main">
      <span className="sidebar-text-header">
        Lessons Sidebar
      </span>
      <section className="lesson-cards-section">
        <Card
          id="01"
          title="Vídeo 01"
          slug="video-01"
          availableAt={new Date()}
          type="class"
        />
        <Card
          id="02"
          title="Vídeo 02"
          slug="video-02"
          availableAt={new Date()}
          type="live"
        />
        {
          data?.lessons.map(lesson => {
            return (
              <Card
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })
        }
      </section>
    </aside>
  )
}