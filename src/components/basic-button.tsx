import {forwardRef} from "react";
import styled from 'styled-components'

export interface BasicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Label for the input. This should describe the value of the input. */
    label?: string;
    disabled?: boolean;
    textMessage: string;
    buttonWidth?: string;
    buttonHeight?: string;
    functionToExecute?: any
}

export const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
    (
        {
            label,
            disabled,
            textMessage,
            buttonWidth = '300px',
            buttonHeight = '50px',
          ...buttonAttributes
        },
        ref
    ) => {

        return (
            <BasicButtonStyles.button
                ref={ref}
                buttonWidth={buttonWidth}
                buttonHeight={buttonHeight}
                {...buttonAttributes}
            >
                {textMessage}
            </BasicButtonStyles.button>
        );
    }
)

BasicButton.displayName = 'BasicButton';

export const BasicButtonStyles = {
    button: styled.button<{ buttonWidth: string, buttonHeight: string }>`
      background-color: red;
      width: ${(props) => props.buttonWidth};
      height: ${(props) => props.buttonHeight};
      :hover{
        background-color: darkred;
      }
    `,
}