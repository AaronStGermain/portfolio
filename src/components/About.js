import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAboutMe>
      <Title>About Me</Title>
      This portfolio will eventually demonstrate a lot of my full stack
      abilities and is a work in progress. My name is Aaron St Germain and I'm a
      software developer here in the GTA, I'm huge on continuous learning and
      always expanding my toolbelt to scale web applications end to end. Below
      are some of the important skills & technologies that I've learned from my
      formal education and over 4 years of industry experience.
      <Title>About This Portfolio</Title>
      In the top left of the screen you wil notice a navigation button, click
      this button to see the items of my portfolio that are done or are
      currently being worked on.
      <hr />
      <Title>Front End</Title>
      Javascript(ES6, ES6) | TypeScript | ReactJS & Redux | JQuery | Bootstrap |
      MaterialUI | CSS3 | HTML5
      <Title>Backend</Title>
      C# | .NET Core | ASP .NET MVC | NODE
      <Title>Database</Title>
      MySQL | MS SQL Server | NoSQL
      <Title>APIs</Title>
      GoogleAPI | TwitterAPI | AccuWeather | RESTful API Design patterns
      <Title>Testing/Documentation/Tools</Title>
      Swagger | Jest Unit Testing | Chrome/Mozilla Dev Tools | Postman | GIT |
      GitLab | GitHub | Trello | Jira | Docker | Kubernetes
    </StyledAboutMe>
  );
};

export default About;

const StyledAboutMe = styled.div`
  text-align: center;
`;

const Title = styled.h6`
  font-weight: bold;
`;
