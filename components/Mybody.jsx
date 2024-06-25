import React from "react"

export default function Mybody() {
  return (
    <div className="mybody">
      <div className="body-up">
        <h1>Talib Mir</h1>
        <h2>Software Developer</h2>
        <a href="www.google.com">portfolio.website</a>
        <div>
          <nav>
            <a href="gmail.com">
              <img src="../assets/Icon.png" alt="" />
              <p>Email</p>
            </a>
          </nav>
          <nav>
            <a href="github.com">
              <img src="../assets/Vector.png" alt="" />
              <p>LinkedIn</p>
            </a>
          </nav>
        </div>
        
      </div>

      <div className="body-down">
        <aside classsName="about">
          <h1>About</h1>
          <p>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>

        </aside>

        <aside className="interests">
          <h1>Interests</h1>
          <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
          
        </aside>

      </div>
    </div>
  )
}