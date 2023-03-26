/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "./styled/Button.styled";
import { Form } from "./styled/Form.styled";
import ModalWrapper from "./utils/ModalWrapper";
import { Text } from './styled/Utils.styled';
import { useContext } from "react";
import { GatewayContext } from "../store/provider";
import { setScreen } from "../store/action";
import { ScreenID } from "../constants";

const TransactionNotCompleted = ({retry}) => {
    const { state, dispatch } = useContext(GatewayContext);
    const {transaction_details = {}, wallet={}, screen} = state

    const changeScreen = (screen) => {
        dispatch(setScreen(screen))
    }
    return (
     
            <Form>
                <div className="center">
                    <img src={require("../images/caution.svg").default} alt="caution" className="caution-img" />
                </div>
                <Text>
                    <span>Your transaction was not completed</span>
                </Text>
                <ButtonWrapper className="spaced">
                    <Button type="button" className="default-btn hidden">
                        Try pay with Card
                    </Button>
                    <Button type="button" className=" default-btn" onClick={()=>{
                        changeScreen(ScreenID.USSD)
                    }    
                    }>
                        Try pay with USSD
                    </Button>
                    <Button type="button" className=" default-btn" onClick={()=>{
                        changeScreen(ScreenID.BANK)

                    }
                    }>
                        Try pay with Bank
                    </Button>
                    <Text>
                        <div className=" modal-trigger" onClick={retry}>&#8635; Try again</div>
                    </Text>
                </ButtonWrapper>
            </Form>
      
    )
}

export default TransactionNotCompleted;