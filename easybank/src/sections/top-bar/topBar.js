import React from 'react';
import './styles.css';
import RequestButton from '../../global-components/request-button/requestButton.js';
import Logo from '../../global-components/logo/logo.js';
import LinksTopBar from './Components/linksTopBar.js';
import Modal from './Components/modal.js';
import hamburger from '../../assets/images/svg/icon-hamburger.svg';
import close from '../../assets/images/svg/icon-close.svg';

class TopBar extends React.Component {
    state = { modalIs: false }

    modalButton = (modal) => {
        if (!modal) {
            return <img alt="Hamburger icon" src={hamburger} onClick={this.openModal} id={"icon"} />
        } else {
            return <img alt="Hamburger icon" src={close} onClick={this.closeModal} id={"icon"} />
        }
    }

    openModal = () => {
        const bgModal = document.querySelector('.bg-modal');
        const modal = document.querySelector('.modal');
        const links = document.querySelectorAll('.topBarLinksMobile');
        bgModal.classList.remove('closeBgModal');
        modal.classList.remove('closeModal2');
        links.forEach((elem) => {
            elem.classList.remove('closeLinks');
        })
        bgModal.classList.add('openBgModal');
        modal.classList.add('openModal2');
        links.forEach((elem) => {
            elem.classList.add('openLinks');
        })
        bgModal.style.display = 'flex';
        this.setState({ modalIs: true })

    }

    closeModal = () => {
        const bgModal = document.querySelector('.bg-modal');
        const modal = document.querySelector('.modal');
        const links = document.querySelectorAll('.topBarLinksMobile');
        bgModal.classList.remove('openBgModal');
        modal.classList.remove('openModal2');
        links.forEach((elem) => {
            elem.classList.remove('openLinks');
        })
        bgModal.classList.add('closeBgModal');
        modal.classList.add('closeModal2');
        links.forEach((elem) => {
            elem.classList.add('closeLinks');
        })
        setTimeout(() => {
            bgModal.style.display = 'none';
        }, 1000)
        setTimeout(this.setState({ modalIs: false }), 1000)
    }

    render() {
        return (
            <div id="topBar">
                <Logo />
                <LinksTopBar classs={'topBarLinkDesktop'} />
                <RequestButton id={"requestButtonTopBar"} />
                {this.modalButton(this.state.modalIs)}
                <Modal />
            </div>
        )
    }
}

export default TopBar;