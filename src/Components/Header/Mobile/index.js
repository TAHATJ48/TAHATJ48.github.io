import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
      <a href={require("../../../assets/cv.pdf")} download="CV TAHA TAHIRI JOTEY">
        <i class="fi-rr-briefcase option-icon"></i>{"< CV />"}
      </a>
    </div>
    <div className="mobile-option">
    <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projets
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Compétences
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Formations
        </a>
    </div>
    <div className="mobile-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Expériences
        </a>
    </div>
  </div>
  );
}

export default Mobile;