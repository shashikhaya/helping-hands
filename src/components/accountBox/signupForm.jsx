import React, { useContext } from "react";
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Postcode" />
        <Input type="text" placeholder="Contact Info" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        
        <div class="flex items-center">
            <button type="button">
                User
            </button>
            <button type="button">
                Helper
            </button>
        </div>

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Register</SubmitButton>
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
