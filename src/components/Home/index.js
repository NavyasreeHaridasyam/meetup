import {Link} from 'react-router-dom'
import Header from '../Header'

import RegisterComponent from './context/RegisterContext'

import {
  BgContainer,
  HomeContainer,
  HomeHeading,
  HomePara,
  RegisterButton,
  HomeImage,
  WelcomeContainer,
  Head,
  Para,
  WelcomeImage,
} from './Styled'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.push('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <WelcomeContainer>
                <Head>Hello James</Head>
                <Para>Welcome to Education and Learning</Para>
                <WelcomeImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </WelcomeContainer>
            ) : (
              <BgContainer>
                <Header />
                <HomeContainer>
                  <HomeHeading>Welcome to Meetup</HomeHeading>
                  <HomePara>Please register for the topic</HomePara>
                  <RegisterButton type="button" onClick={onClickRegister}>
                    Register
                  </RegisterButton>
                  <HomeImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </HomeContainer>
              </BgContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
