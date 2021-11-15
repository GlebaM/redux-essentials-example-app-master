import styled from 'styled-components'

const Navigation = styled.nav`
  h1 {
    text-shadow: 0px 15px 60px rgb(192 219 255/ 75%),
      0px -15px 32px rgb(65 120 255/ 70%);
    /* background: linear-gradient(to right, #d8eaeb, #decaf5); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`

export const Navbar = () => {
  return (
    <Navigation>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </Navigation>
  )
}
