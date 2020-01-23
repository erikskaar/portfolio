import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Header from "../components/Header";
import About from "../components/About";
import Skillbar from "./Skillbar";

const calculateAge = birthday => {
  birthday = new Date(birthday);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const App = () => {
  return (
    <div>
      <Splash />
      <Navbar />
      <Header title="" />
      <Container style={{ justifyContent: "left" }}>
        <About>
          <img alt="profile" src="/portrait2.jpg" />
          <h1>About me</h1>
          <p>Here are some facts about me:</p>
          <ul>
            <li>2nd year informatics student @ NTNU</li>
            <li>{calculateAge("1999-11-11")} years old</li>
            <li>Located in Trondheim, Norway</li>
            <li>Currently working part-time for Kodeworks Trondheim</li>
            <li>Better at watching snowboarding movies than snowboarding</li>
            <li>
              Have no good images of myself so I use old images from 2017 on my
              website, LinkedIn and Tinder
            </li>
            <li>
              Can't bother to scale down the splash image so mind your CPU
            </li>
          </ul>
        </About>
        <About>
          <h1>Skills</h1>
          <Skillbar title="Frontend" percentage="90%" />
          <Skillbar title="Backend" percentage="60%" />
          <Skillbar title="Fullstack" percentage="75%" />
          <Skillbar title="SCRUM" percentage="80%" />
          <Skillbar title="Baking" percentage="30%" />
          <Skillbar title="Percentages" percentage="120%" />
        </About>
      </Container>
      <Header title="Portfolio" />
      <Container>
        <Card
          image="/sites/alkern.png"
          onclick={() =>
            (window.location.href = "https://github.com/bokom/alkern")
          }
          contentTitle="Alkern"
          contentText="A website for calculating the cheapest alcohol per percentage per liter. Written in vanilla JS using FireBase and a .csv parser written in Python."
        />
        <Card
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAA5CAMAAADdj6U4AAAAe1BMVEX///8AAADc3Nzf3993d3f39/fs7OwUFBRra2vGxsbm5uY8PDyysrJfX1+Dg4MxMTEJCQlGRkZPT0+WlpalpaUdHR3z8/PT09N5eXnLy8urq6tWVla7u7uMjIzJycnq6upCQkIkJCQtLS1lZWU2NjaampqPj48REREgICDk4yYUAAAPuklEQVR4nM1d6Xrqug6FTMyBAE0Y0jLT/f5PeIFAItmackvPV/06+9Q4HpYGS7Lc6XTi4rLaFHFHpGEZjfbLRG5062sXlotom43mk2j5Fart8TdCioaJMjSXErofv+NcmEf4VZpHnwTlIBQ6o4b4tVxN5qNs21+Uwa7dBOOEJfsghpv0ulaa50WandPA2GO+Gw6up+x8zqLyMaGw371TJC7j+PBotC/EvsPx6tyFNL+W5rkmn8cuRYd5dBnL30X0Nf8m+/God2J7DR5rko1NHyzn98Z8Zy7l5XWOBjJKN0PrjzvBJcpYmiw2AwtK489qewZSo+JUDc+0CsWyD7a+f5tP/prkSvjZpkaKAL+gPyK2b/5pg1ZykkAwndg2+bbNRljd6cAsbPJaI3Hhn/T1bNuzyZ04nff8kYwiIy6/aO5r6GO70HtJn41nwpiDw2ti+irs+lM8ilXcudT/4Ldu0/yC/ch6z841CtWRdTqfyoJ1u6lFNYXErvF0pCXF9vX3veGTdWcnw/CCiB1L9mX5vYarB12VYYd1yz7bJmm6Wyksk6T+EIpOI8BS7ocF+MEn0/dCmuh0KY/sRsODvl7TjdoN4BMTlVQfcfN3XU6O67Zn1RqJxx/SYAycc7VNay8LmQYIe04H74C2ltTUjYZbYgRpZ1b/94T5fQA1HA2sdabMNNqJY7t9xLRgW1WtzvVOIJH6f938XeeIRtLOSJQCSvrKaOZrrQfr9HriWJpxHJgvxlCybkVgBeSYtgBYDDBDpOMoUyDW1ZjK+zZgdbua0KLMPIEiqo9B83fdXgFqQJniwP+8R6zWqGg41bt40kXopgHWByPakMa+SkMK6BWPdGAhQUeBN16ZZirzsxVY2tK3BBY5qN8B1sZ0qpCPOi2AJQlbFVhL2NGHaPwxMrRUgYWlEbV2E9tEZ+K6m4GlmJLtgHUgTYxfAdZy5n+eIpFx2gCryx+ZNGCVaKykVH/R2Pvsg7JcAxbGFcUFmuHQkLTwdmB1+xKyWgHrSPPibwCrNA9Kcvu0AtacXScFWFhnz6XZh2f3qw/a3kAtAwvJRHLO5DFsNiP5Uzg2tQCWyNQtgMU6SH8BWOt/xACYVRLMyFbA4scjAytEOnsuHruo3f+Yp3dFIAKrQL84Efp/4K3NOf16REzKvudSEgYJgHUKg4aKJaFpBXMNAKuE/RDERmHeD6zEw3uvP36sUpF6PN/jz4YQWKeJS1sHvRNugiKwEmRUH0THbYK9AYfFbc3DZyhMAlZx0MaZdDFlFyh/hyuHw3gtBoDl6fTh1dmXD37pQUuLW5ak9wPLAc8UB+AWjrPmwI4cAotssEG2NAcKCVhOBEQOCKxh0y3uSwDWEE34gzJ0sSP5e+F2ETgnRlbWSMC6jeSCEcry4t8ElmPh9l2TIMEWB28uq8Dq5NAo5mwGCVh4RxXvDgRh6uyJACzMSJShO0DabkoIkniDOvnghigDyxXQ/IT/IrB2eCE3hNheY5nGDV0HFpKOB6aJACwMcW36XeFbPLCQTPymjg85sn+29McD5GDl/HYasNwpc1P9i8BCFu6RtjOxM3DC9GQBVthV2/DAwovMxO9q2oG2nlBhgaU7sPC5lLWfQmjfZ1zcqGnCKQI0aQ6gfxBYOyiNRqzRApmUc4hbgJUDgcAsAQusEsUyOXjXBFS8v68csLAKo7U1tBRH/IkP4Y9ZfQOwkAjlAqN/EFhwJYUYHgqdpTSXWoDVAfkAzNc4YCXIspmrSWJA9vhhHwZY2ElG4wodCaVRwKXt03a3BVg5BDKzi38QWNAtJBnD8AzeowdvAhZYbSaswwBriAy9vb5+wDfuz50GFnY0MOFtmMMh7kAOLW8agRZgdb6Ao4aJ7Pw9YEGbZy92BdeT7ssErKXWCwOsGHsMDZmHJ7KfJwFgNbLEcegxh3swkLMsNqH8oydrAhZkESZH7+8BC8JFSYsBLelAigVYMOOFMdWaZfwHRoQdWJaM3QYARx+GDbA+ti8X7gnZcEdmhwowSy2bBQhZeslswILKl+YoAKwipkkZ6ruBBdhPS8WEx0eygQVYATgrMYZoA6xZVvvtsU/ElAneKKKRH61Tg+7cCQWeCUaadIAxWLKBDVgdYODSWUIAWP1VRNHqMlbSBSVgeVulAQvmK2mZgENgjpF8YwEWFDxMEz1vwJA330HA8gGgAosVRsBI5FOnnzQE5w2SbY3AAvYDfRg2BaG3Mh+wwIqvk2zr+M01YA0a6c/mAb8oBztO2t0GYEGnDONZ1IHF/RBT/CNgsemDMVhSNRkdLhkpAY3AApZwj2xgzG4QZRYHrFdI/hOyhgasNuwHG5PZMwqw4qRAsUJO12jAmhgvHP0EWLxZAN3u+qVGYD6QvGgE1hDcUiEbGIElptMxwGq8h3CEGrCABBFTfKtPNLtB3vmBwNosPVphO4lzRmvAUg2bJ/0EWHOetWH0Th8E4EVyfY3AgrcJyAZGYPFJcB0OWNArDWIdLYClG8Rfh7qxCiyd2LR3BVjW4/QPgHUUum0HLGDpk0LeCCyoUknMG4ElMiUJLJwC2ghyDVhAVGu2O7L0txT0WwGLV2gisL61q0I1/QBYkhGnCg9E4IIyCRwjsKCThhT0VoklGVkUsEona7HWpW8FFsiDIGNWrYDFezhFYE3NtQJ+ogoFWyQBNpY+CGA9vEtikQxpBJZoRxPAcnHV/KWFKtSBNWzcKST02wBLuP8lq8KjtdzGj4z3iDfewfD0K7xAFZJgNQILpjaRDYzAEgfsA4u6EvicRgtgSVf9KgI+Z1JZvP1eIUnTdxvvs4rwV9hLIzCDSFfLYH1J55vV3QBciGQDE7D2suzwgFWSN+MrC76Fu0G5EtlBTq8fGu9UNmFNAFgzatP1vIYHWYGVFVXdKOwL4Z2wbXgROr3IXTUCCyRZ0wcLAKweQzMvgdohF1gDpuLCw2+iAQvYAK38WOQqWIGl3PYHQehNVUxsiOt67NWR3skKrNpcTHCYm8sjBKugFlqBK0JuqxFYfa0ZAJZWLoIlB1j81fj7XzVgFY3nTfUPQfYjedUGrI9PxcFJZTfgciPi4aYebltgOYk5nMwCjKwWWoGbQzYwAgt0QzPl+7MbaD1Y0UUHFjw8a44sWHKHtC4swBot1XpIFLBiLLOoq34uxc3UiGgVmY8F2OxOdMQGHGHUmA5Y3T3ZwAYsmDFI4+btwOL0YEVjPbsBBIX5k5A/PbKBBVjnNgl6MMMAX1cxhAtB4mXmqwc60c+pIUJnIgK9pORjFWpfJmDBC93MDbB3A8vRg8eBU19uowILRoXt+Vh7sgETK8RqTHdEMYl++ObXSQ0Yhs1iE6qTSU3Gd6C/SYkEl0zMs0C5ibTWNAELSmsm6/bNwJof0DqMik6AzYR/4J80sGAO2V78LkzHoqfHBaExJITrBxUxqcnOXVUtewzqNUK+cZcpHFal9HYMG0giC17YZCSNBVhwSFzFsDcDC9PjvvmQ+ytnQkGzQsx5hw3b5bznGFlcCb0XcZcpYqz2pfIkd5JD5uz1L1zH4puylaEgEsp1vumWDrrPzR3dfxNY/yrmCTlDh5kajDIKhWLRvXNGWvBpM9j0VhxR7PWvHHualHuFQMISGOQvrOL1PRJLgreavVcIr6nsGTGtA6tEQOfsiF8E1vklJAsGWQywEmiW7dnzM+RSDn9CPhZWY2QIuyb+wiquqiD7J6FXimgoXLF3bsf7GxWj2ABzvzFAY+VsMRVYVySmM262vwcsUNiOqblkugk9pSU7vgnNHckEYDnOR/EAKlyx36FeZlINVrgKBJ9L1WbGyNNPVLTB6vJMdO/UbuCqCWjAKjAn/WPN018DFuKrugY6Ig5YuVN3gqrdgIUgJ9akDNIcRwCZ+5sPkoqCOD5M3iiM4d4TfxfrY2FUEGIc38P/8IIlhVNthjUxJGAlZeokF/CM9FvAmuKRrw9EG9b/ucbtIncdd079MjaoKKYmOwaSEEAS62NhH2aP5RZ4XqBuXskV/bCH5OjzmrO2c1wfK3KsET4MC4CFDcH8K8rcDAyhqMCbQzr1+robUPhtBMe6k05wTqFxHV8d3xh/6ULOeQ+xWOdNb7miH54aY+6tEYqpk51SgxTz0sibcuDVAt5/ju+l9IrNyfuTUKYdAGsGAsZuDw+asr2YgtAVfU/7JWOH+MDq+bK68Is/8sDKvdrC/6JNcV+lMvVOAv9sFf2oP2OdyxSAUGuQOlNDw0mGYRAuHUYhHWcKsGL85IR/2d6pGSbSe2qQZlJgslVx2xUt1DxgUSfizsBDlhAKJGDIkrEGqfb37v9XeO1OODwKXIa7T8djXBF5eFTrvGN0+tqUfx3GpfdUTSZucwNqV46bdhe5wGJKxHj4+2+rJpMNcM2NlkVBuNEeX8AIqMdNuOikCizH9+aPVXy2qyHSxVqTGVhnOeze8gEBEqQOYr45JLvxaTF5YWN8PYrVX3fSL6ziIC+Tl6W/TIH9Afvqf+ZMRX963jqwcLyAcLFYXjyhg0JgQUx93Ox25azXEljkVTQMrAPPEE4mvJwVUx4sA1qKnk3DTWhsetMiWQeW895BxczO4fZFjNNNB1YnhqcWKluNeZ4AElWfFJIRWBctMMo/bkcSeSZHwBKTMbHKeMNzQUr6kaV2Axr9lDxggmozrP8HndqqmdECJGNYvRkq76yF2QlkUkagvf4lCvg7hcqljjv1+rpring6TyLS7IQImMkMAZ/dlHV9x8tL8Wmr5UvuGr5hywRjO4tcsWaRhAxN6GlaOj8DNOF8I83vBW4Br9dlpI2TiE/FbPWHBuO+8PuK+pb3ThlxzRG9rs3fD1rSJ3h6Sb+ZHpeSpj4s1KxNAE3B/wnWgH4sqFGXUk45EFCVMKEUE59IER6eTWjEPCmve+IKEAhvh24sCdRrxbhdac+hV2R8iuzVKd1nw5r6rfgmOKFlmdzJ9bEDSi2RguZrkiRtEMBooVpOiCKy3tFnIC703y+7CFtbVOJ1L+9bPqlEksAoQ+pN6NncVmrJS4cGXRzmK/2uZ022o8SjY45JXoJhannB/WWUi48ZAUoz4n25/cr43PhrdvILnYPnmDiX31M/cG9i10OtvG+1yHFE1l65zxZe+vPVUrtzGpefk+wk67Rw7MRwtgv7K/adYLPwqqSl1+WmXNv7uNN4mZIV11y68suaLG47M1/Yoo1FdOO5s/FN9Xvn7iv2+zav2Kd3Bs80q6BY3dn0xDJGPo62p4uaw7xenrJs0biRQex4Go31mFmemNRMnuhGwC4sF1H/TqtlEVqeB0c/b1/X0dZN65KRw9A++PjWuF1gMhkOLqvHKkWXMmi3SrePDfVf3MfEvkL1aKBv5p3yBH0rGKe3nb2M1+FO2Zr/AZih3q5rAEiyAAAAAElFTkSuQmCC"
          onclick={() =>
            (window.location.href = "https://github.com/Kodeworks/liquidator")
          }
          contentTitle="Liquidator"
          contentText="I've done some small work on the frontend which is written in Typescript and React with styled components."
        />
        <Card
          image="/sites/worthlet.png"
          onclick={() =>
            (window.location.href =
              "https://github.com/erikskaar/fermented-snake-contraption")
          }
          contentTitle="Worthlet"
          contentText="A cryptocurrency monitor written in plain Python and using the Coinmarketcap API."
        />
        <Card
          image="/sites/foodRoulette.png"
          onclick={() =>
            (window.location.href = "https://github.com/erikskaar/foodRoulette")
          }
          contentTitle="foodRoulette"
          contentText="A random food combination generator using vanilla JS."
        />
        <Card
          image="/sites/zerg.png"
          onclick={() =>
            (window.location.href =
              "https://github.com/erikskaar/erikskaar.online/tree/master/scrapsimulator")
          }
          contentTitle="Zerg Simulator"
          contentText="An unfinished clicker game written in vanilla JS."
        />
        <Card
          image="/sites/vgs.png"
          onclick={() =>
            (window.location.href =
              "https://github.com/erikskaar/erikskaar.online/tree/master/vgsprojects")
          }
          contentTitle="Random high school projects"
          contentText="A collection of old high school projects written in vanilla JS."
        />
      </Container>
      <Footer />
    </div>
  );
};

export default styled(App)`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
