import PropTypes from "prop-types";
const { TransferType } = require("../styled/ModalFooter.styled")


export default function TabButton({label, active, activeIcon, inActiveIcon, target, onClick}) { 

    return (
        <TransferType onClick={onClick} className={`modal-trigger  ${active ? 'active' : ''}`} >
            <div>

                   <img src={inActiveIcon} alt="wallet" className="default-img" /> 
                    <img src={activeIcon} alt="wallet" className="active-img" />
                
            </div>
            <div>{label}</div>
        </TransferType>
    )

}

TabButton.defaultProps = {
    label: '',
    active: false,
    activeIcon: '',
    inActiveIcon: '',
    target: '',
    onClick: ()=>{}
  }

TabButton.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    activeIcon: PropTypes.string,
    inActiveIcon: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func
}
