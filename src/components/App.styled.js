import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #010101;
  background-color: #c2baba;

  padding-bottom: 50px;
  /* margin-top: 20px; */

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 49px;
    border-bottom: 1px black solid;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #a79999;
    width: 100%;
    padding: 20px;

    .header-user-menu {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin-right: 30px;
      gap: 30px;

      button {
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        font-weight: bold;
      }
    }

    .home-navigation-menu {
      display: flex;
      gap: 30px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;

    &.active {
      color: blue;
    }
  }

  a:hover {
    text-decoration: underline;
    color: orangered;
  }

  .login-form {
    gap: 40px;
    .login-form-section {
      display: flex;
      flex-direction: column;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 50px;
  }

  li {
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    font-size: 40px;
    border-radius: 15px;
    padding-left: 10px;
  }

  button {
    width: 140px;
    height: 100%;
    font-size: 20px;
    border-radius: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: orangered;
  }
`;
