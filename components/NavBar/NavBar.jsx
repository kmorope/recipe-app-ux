import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = ({ isHeader }) => {
  const menuItems = [
    {
      name: "Home",
      short: "home",
      link: "/",
      icon: "/assets/icons/ic_home.svg",
      iconSizes: {
        width: "25",
        height: "25",
      },
      iconSizesXs: {
        width: "25",
        height: "25",
      },
    },
    {
      name: "Vegetarianos",
      short: "Vegetarianos",
      link: "/",
      icon: "/assets/icons/ic_vegetarian.svg",
      iconSizes: {
        width: "27",
        height: "42",
      },
      iconSizesXs: {
        width: "19",
        height: "28",
      },
    },
    {
      name: "Platos Principales",
      short: "Principales",
      link: "/",
      icon: "/assets/icons/ic_main.svg",
      iconSizes: {
        width: "31",
        height: "33",
      },
      iconSizesXs: {
        width: "33",
        height: "16",
      },
    },
    {
      name: "Tortas",
      short: "Tortas",
      link: "/",
      icon: "/assets/icons/ic_cake.svg",
      iconSizes: {
        width: "34",
        height: "26",
      },
      iconSizesXs: {
        width: "37",
        height: "20",
      },
    },
    {
      name: "Comida Rápida",
      short: "Rápida",
      link: "/",
      icon: "/assets/icons/ic_fast-food.svg",
      iconSizes: {
        width: "32",
        height: "30",
      },
      iconSizesXs: {
        width: "23",
        height: "33",
      },
    },
    {
      name: "Menú Niños",
      short: "Menú Niños",
      link: "/",
      icon: "/assets/icons/ic_kids.svg",
      iconSizes: {
        width: "34",
        height: "29",
      },
      iconSizesXs: {
        width: "37",
        height: "31",
      },
    },
    {
      name: "Sopas",
      short: "Sopas",
      link: "/",
      icon: "/assets/icons/ic_soup.svg",
      iconSizes: {
        width: "31",
        height: "34",
      },
      iconSizesXs: {
        width: "33",
        height: "17",
      },
    },
  ];
  const renderMenuItems = (isMobile) => {
    return menuItems.map((item, index) => {
      return (
        <li
          key={index}
          className={`${index === 0 ? styles.selected : ""} ${
            isMobile === true ? styles.mobileMenuItem : styles.menuItem
          } ${isHeader === false && index === 0 ? "hidden" : ""}`}
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={item.iconSizes.width}
            height={item.iconSizes.height}
            className={styles.menuItemIcon}
            layout="fixed"
            objectFit="fill"
          />
          <span>{isMobile === true ? item.short : item.name}</span>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      {isHeader === true ? (
        <nav className={`${styles.main}`}>
          <a href="#" className="logo ml-70">
            <span className="recipe">Recipe</span>
            <span className="app">App</span>
          </a>
          <ul className={`${styles.menu} mr-70`}>{renderMenuItems(false)}</ul>
          <div className={styles.home}>
            <Image
              src="/assets/icons/ic_home.svg"
              alt="Home"
              width="25"
              height="25"
              className={styles.home}
            />
          </div>
        </nav>
      ) : (
        <div className={styles.mobile}>
          <ul className={styles.menuMobile}>{renderMenuItems(true)}</ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
