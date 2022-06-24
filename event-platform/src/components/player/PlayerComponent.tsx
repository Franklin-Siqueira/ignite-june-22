// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { DefaultUi, Player, Youtube } from "@vime/react"
import "@vime/core/themes/default.css"
import { CaretRight, DiscordLogo, FileArrowDown } from "phosphor-react"
// GraphQL
import { gql, useQuery } from "@apollo/client"
//
import { Button } from "../button/Button"
import "./../styles/playerComponent.css"

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    description
    videoId
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`
interface GetLessonBySlugData {
  lesson: {
    videoId: string;
    title: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    }
  }
}

interface LessonProps {
  slug: string;
}

export const PlayerComponent = (props: LessonProps) => {
  const { data } = useQuery<GetLessonBySlugData>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.slug,
    }
  })
  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }
  return (
    <section className="player-main">
      <div className="video-base">
        <div className="video-window">
          {/* <h1>Video Player</h1> */}
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="video-title-conteiner">
        <div className="video-description-conteiner">
          <div className="video-text">
            <h1>{data.lesson.title}</h1>
            <p>
              {data.lesson.description}
            </p>
            <section className="profile-card">
              {/* <img src="https://github.com/franklin-siqueira.png" alt="User profile avatar..." /> */}
              <img src={data.lesson.teacher.avatarURL} alt={data.lesson.teacher.name} />
              <div className="profile-card-text">
                <strong>
                  {data.lesson.teacher.name}
                </strong>
                <span>
                { data.lesson.teacher.bio } 
                </span>
              </div>
            </section>
          </div>
          <div className="video-buttons">
            <Button
              href="#"
              buttonIcon="discord"
              optionClass="background-button"
              text="Button background"
            />
            <Button
              href="#teste"
              buttonIcon="lightning"
              optionClass="clear-button"
              text="Button clear-button"
            />
            {/* <a href="#">
              <DiscordLogo size={24} />
              Video Player
            </a>
            <a href="#">
              <Lightning size={24} />
              Video Player
            </a> */}
          </div>
        </div>
        <div className="wallpapers-conteiner">
          <a href="#">
            <div className="wallpaper-left">
              <FileArrowDown size={40} />
            </div>
            <div className="wallpaper-text-conteiner">
              <div className="wallpaper-center">
                <strong>
                  Wallpapers...
                </strong>
                <p>
                  Any text
                </p>
              </div>
            </div>
            <div className="wallpaper-right">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="#">
            <div className="wallpaper-left">
              <FileArrowDown size={40} />
            </div>
            <div className="wallpaper-text-conteiner">
              <div className="wallpaper-center">
                <strong>
                  Wallpapers...
                </strong>
                <p>
                  Any text
                </p>
              </div>
            </div>
            <div className="wallpaper-right">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}