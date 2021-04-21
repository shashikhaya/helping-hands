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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Location" />
        <Input type="text" placeholder="Contact Info" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        
        <div class="flex items-center">
            <button type="button" class="w-full border-r text-base font-medium rounded-l-md text-black bg-gray-100 px-4 py-2">
                User
            </button>
            <button type="button" class="w-full border-l text-base font-medium rounded-r-md text-black bg-gray-100 px-4 py-2">
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
