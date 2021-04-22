import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./index.css";
import getCoords from '../../_helpers/getCoords'

import { userService } from '../../_services';
import { useHistory } from "react-router-dom";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const history = useHistory();

  // form inputs
  const [username, setUsername] = useState('');
  const [postcode, setPostcode] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value)
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!username | !postcode | !contactInfo| !password | !confirmPassword | !accountType){
      alert('Missing values')
      return
    }
    if (password!==confirmPassword){
      alert('Passwords dont match')
    }

    // TODO: need to validate postcode before posting registration
    const body = {"username":username,
                  "password":password,
                  "contactInfo":contactInfo,
                  "location":await getCoords(postcode),
                  "role":accountType
    }
    userService.register(body)


    userService.login(username, password)
        .then(
            user => history.push('/'),
            error => console.log(error)
        );
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" onChange={handleUsernameChange}/>
        <Input type="text" placeholder="Postcode" onChange={handlePostcodeChange}/>
        <Input type="email" placeholder="Email" onChange={handleContactInfoChange}/>
        <Input type="password" placeholder="Password" onChange={handlePasswordChange}/>
        <Input type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>

        <div class="flex items-center"> 
            <label for="accountType">User</label>
            <Input type="radio" name="accountType" value="user" onClick={handleAccountTypeChange} />
            <label for="accountType">Helper</label>
            <Input type="radio" name="accountType" value="helper" onClick={handleAccountTypeChange} />

        </div>

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit}>Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Log in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
