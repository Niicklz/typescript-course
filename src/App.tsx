import { Button } from "./components/Button/Button.tsx";
import { Card } from "./components/Card/Card.tsx";

import { useState } from "react";
import logo from "./assets/images/logo.svg";
import menuIcon from "./assets/images/icon-menu.svg";
import menuIconClose from "./assets/images/icon-menu-close.svg";
import "./style.css";
import { Title } from "./components/Title/Title.tsx";
import { NewsLetter } from "./components/NewsLetter/NewsLetter.tsx";
import { ArticleCard } from "./components/ArticleCard/ArticleCard.tsx";
import gamingImage from "./assets/images/image-gaming-growth.jpg";
import retroPcImage from "./assets/images/image-retro-pcs.jpg";
import laptopImage from "./assets/images/image-top-laptops.jpg";

export const App = () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  console.log("hola wapo");

  const MouseEventHandler = () => {
    setMenuStatus((menuStatus) => !menuStatus);
  };

  return (
    <div className={`container ${menuStatus ? `container-hidden` : ""}`}>
      <header>
        <figure className="logo-container">
          <img src={logo} alt="" />
        </figure>

        <nav className={`menu ${!menuStatus ? `menu-inactive` : ""}`}>
          <ul className="menu-options">
            <li>
              <Button redirect value="Home" size="sm" />
            </li>
            <li>
              <Button redirect value="New" size="sm" />
            </li>
            <li>
              <Button redirect value="Popular" size="sm" />
            </li>
            <li>
              <Button redirect value="Trending" size="sm" />
            </li>
            <li>
              <Button redirect value="Categories" size="sm" />
            </li>
          </ul>
        </nav>
        <figure onClick={MouseEventHandler} className="menu-icon-container">
          <img
            className="menu-icon"
            src={!menuStatus ? menuIcon : menuIconClose}
            alt=""
          />
        </figure>
      </header>
      <main>
        <section className="principal-content">
          <div className="left-section-content">
            <Card>
              <figure className="hero-img"></figure>
              <div className="section-text-container">
                <Title
                  text="The Bright Future of Web 3.0?"
                  type="h1"
                  variant="blue"
                  size="bg"
                />
                <div className="section-text-description-and-button-container">
                  <p className="section-text-description">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fullfilling its promise?
                  </p>
                  <Button value="READ MORE" size="sm" />
                </div>
              </div>
            </Card>
          </div>

          <div className="right-section-content">
            <aside>
              <Card variant="dark">
                <Title type="h2" text="News" size="md" variant="orange" />
                <NewsLetter
                  type="h3"
                  text="Hydrogen VS Electric Cars"
                  newsDescription="Will hydrogen-fueled cars ever catch up to EVs?"
                />
                <NewsLetter
                  type="h3"
                  text="The Downsides of AI Artistry"
                  newsDescription="WWhat are the possible adverse effects of on-demand AI image generation?"
                />
                <NewsLetter
                  type="h3"
                  text="Is VC Funding Drying Up?"
                  newsDescription="Private funding by VC firms is down 50% YOY. We take a look at what that means."
                />
              </Card>
            </aside>
          </div>
        </section>
        <section className="final-articles">
          <ArticleCard
            urlImage={gamingImage}
            description="What happens when old PCs are give modern upgrades?"
            id="01"
            imageName="test"
            title="Reviving retro PCs"
            type="h4"
            size="md"
            variant="blue"
          />
          <ArticleCard
            urlImage={retroPcImage}
            description="Our best picks for various needs and budgets"
            id="02"
            imageName="test"
            title="Top 10 Laptops of 2023"
            type="h4"
            size="md"
            variant="blue"
          />
          <ArticleCard
            urlImage={laptopImage}
            description="How the pandemic has sparked fresh oportunities"
            id="03"
            imageName="test"
            title="The Growth of Gaming"
            type="h4"
            size="md"
            variant="blue"
          />
        </section>
      </main>
    </div>
  );
};
