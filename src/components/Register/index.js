import Header from '../Header'

import RegisterContext from './context/RegisterContext'

import {
  RegisterContainer,
  JoinContainer,
  RegisterImage,
  FormContainer,
  Heading,
  Label,
  Input,
  SelectContainer,
  Option,
  RegisterNowButton,
  Error,
} from './Styled'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => {
  ;<RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = this.props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      onChangeInput = event => {
        changeName(event.target.value)
      }

      onChangeOption = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <RegisterContainer>
            <JoinContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="website register"
              />
              <FormContainer onClick={this.onSubmitForm}>
                <Heading>Let us join</Heading>
                <Label htmlFor="input">NAME</Label>
                <Input
                  type="text"
                  id="input"
                  value={name}
                  onChange={this.onChangeInput}
                />
                <Label htmlFor="topics">Topics</Label>
                <SelectContainer
                  value={topic}
                  id="topics"
                  onChange={this.onChangeOption}
                >
                  {topicsList.map(each => (
                    <Option value={each.id} key={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </SelectContainer>
                <RegisterNowButton type="button">
                  Register Now
                </RegisterNowButton>
                {showError === true ? <Error>{errorMsg}</Error> : ''}
              </FormContainer>
            </JoinContainer>
          </RegisterContainer>
        </div>
      )
    }}
  </RegisterContext.Consumer>
}
export default Register
