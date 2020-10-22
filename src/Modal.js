import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: pink;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 1000;
  border-radius: 4px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: pink;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: pink;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModelWrapper showModal={showModal}>
            <ModalImage src={require("./pic.jpg")} />
            <ModalContent>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                aliquam quis labore dicta. Fugiat, repellat!
              </p>
              <button>Sign Up</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModelWrapper>
        </Background>
      ) : null}
    </>
  );
};
