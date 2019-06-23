import React, { useState, useRef, useEffect, useContext } from "react";
import { LoginContext } from "../../../../store/login";
import RegisterModal from "../loggedOut/modal/registerModal";
import LoginModal from "../loggedOut/modal/loginModal";

export default function LoggedOutWrapper() {
  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  function toggleLogin() {
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setRegisterOpen(false);
  }
  function toggleRegister() {
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
    setLoginOpen(false);
  }
  const loginRef = useRef();
  const registerRef = useRef();
  const [position, setPosition] = useState({
    loginPosition: null,
    registPosition: null
  });
  const {
    isLoginOpen,
    setLoginOpen,
    isRegisterOpen,
    setRegisterOpen
  } = useContext(LoginContext);

  useEffect(() => {
    function getPosition() {
      const loginPosition = loginRef.current.getBoundingClientRect();
      const registerPosition = registerRef.current.getBoundingClientRect();
      setPosition({
        loginPosition: loginPosition,
        registerPosition: registerPosition
      });
    }

    getPosition();
  }, []);

  return (
    <div className="relative">
      <button
        className="lg:px-6 lg:py-3 py-2 px-3 font-semibold text-blue-800 text-xs"
        ref={loginRef}
        onClick={toggleLogin}
      >
        Login
      </button>
      {isLoginOpen ? (
        <LoginModal
          LoginPosition={position.loginPosition}
          clearAll={clearAll}
        />
      ) : null}
      <button
        className="lg:px-6 lg:py-3 py-2 px-3 bg-green-400 font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green-600"
        onClick={toggleRegister}
        ref={registerRef}
      >
        Register
      </button>
      {isRegisterOpen ? (
        <RegisterModal
          RegisterPosition={position.registerPosition}
          clearAll={clearAll}
        />
      ) : null}
    </div>
  );
}
