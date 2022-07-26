import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  span {
    color: white;
    background-color: #03045e;
    padding: 2px 3px;
    border-radius: 5px;
  }
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  #verde {
    background-color: green;
  }
  #modulos {
    margin: 14px 0px;
  }
  .label {
    margin: 2px 5px;
    padding: 6px;
    background-color: rgba(78, 71, 255, 0.1);
    color: black;
    border-radius: 6px;
  }

  .label:hover {
    background-color: rgba(122, 66, 252, 0.541);
  }

  .label:active,
  .label:visited,
  .label:focus {
    border: 2px solid green;
  }

  #box {
    border: solid 1px #ced4da;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 32px;
  }

  p {
    margin-top: 8px;

    a {
      font-weight: bold;
      color: var(--orange);
    }
  }
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
