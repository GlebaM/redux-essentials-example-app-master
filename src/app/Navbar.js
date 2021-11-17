import styled from 'styled-components'

const Navigation = styled.nav`
  h1 {
    text-shadow: 0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 4px white,
      0px 0px 40px rgb(192 219 255/ 75%), 0px 0px 35px rgb(65 120 255/ 70%);
    /* background: linear-gradient(to right, #d8eaeb, #decaf5); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`

export const Navbar = () => {
  return (
    <Navigation>
      <section>
        <h1>Real Comments</h1>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </Navigation>
  )
}
