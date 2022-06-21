// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

const GET_LESSONS = gql`
  query {
          lessons {
            id
            slug
            title
            teacher {
              name
            }
          }
        }`

interface lesson {
  id: string;
  title: string;
}

function App() {
  // const [count, setCount] = useState(0)
  // Access GraphCMS with FETCH
  // useEffect(() => {
  //   fetch('https://api-sa-east-1.graphcms.com/v2/cl4okcsxa0dob01xk9jfmguug/master', {
  //     method: 'POST',
  // body: `query {
  //   lessons {
  //     id
  //     slug
  //     title
  //     teacher {
  //       name
  //       bio
  //       avatarURL
  //     }
  //   }
  // }`
  //   })
  // }, [])

  // Using useEffect hook
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  // Using useQuery hook
  const { data } = useQuery<{ lessons: lesson[] }>(GET_LESSONS)
  console.log(data)
  return (
    <>
      <h1 className="title-test">Hello Franklin! Loading...</h1>
      <ul>
        { data?.lessons.map(lesson => {
          return <li key={ lesson.id }>{lesson.title}</li>
        })}
      </ul>
    </>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button type="button" onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code>App.tsx</code> and save to test HMR updates.
  //       </p>
  //       <p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {' | '}
  //         <a
  //           className="App-link"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p>
  //     </header>
  //   </div>
  // )
}

export default App
