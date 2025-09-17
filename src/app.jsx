import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="main-container">
        <div class="top-row">
            <div class="top-left"></div>
            <div class="top-center">
                <div class="top-center-box"></div>
                <div class="top-center-box"></div>
            </div>
            <div class="top-right"></div>
        </div>
        <div class="middle-row">
            <div class="middle-left"></div>
            <div class="middle-right">
                <div class="middle-right-box-up"></div>
                <div class="middle-right-box-down"></div>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom-left"></div>
            <div class="bottom-center">
                <div class="bottom-center-box"></div>
                <div class="bottom-center-box"></div>
            </div>
            <div class="bottom-right"></div>
        </div>
    </div>
    </>
  )
}
