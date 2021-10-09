import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles.js'
import { VelvetBanana } from './VelvetBanana'
import { useState } from 'react'
export default function Overlay() {
  const onChange = evt => setText(evt.target.value);
  const [text, setText] = useState("Find a shop near you");
  return (
    
    <Container>
      <TopLeft>
        <h1>
          WEED
          <br />
          on WHEELS 
        </h1>
        <p>PREMIUM CANNABIS DELIVERED DIRECTLY TO YOUR DOOR —</p>

    <div class='search'>
      <input />
      <span class='label'>{text}</span>
    
    </div>
        <VelvetBanana />
      </TopLeft>
      <BottomLeft>
        This landing page was designed and developed by <a href="https://ian-m.xyz">Ian Mullane.</a>
        <br /> -------- <br/>Using <a href="https://docs.pmnd.rs/home">React Three Fiber.</a>
      </BottomLeft>
      <BottomRight>
        <br />
        Flower
        <br />
        Edibles
        <br />
        Topicals
        <br />
        Pre-Rolls
        <br />
        Vaporizers
        <br />
        Accessories
        <br />
        Concentrates
        <br />
        Order for Pickup
        <br />
        Order for Delivery
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  )
}
