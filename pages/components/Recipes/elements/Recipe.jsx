import { useState, useMemo } from "react";
import Image from "next/image";
import styles from "../Recipes.module.scss";
const Recipe = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderName = (name) => {
    return (
      <div className={styles.cardTitle}>
        <span className={styles.poppins}>{name.split(" ")[0] + " "}</span>
        <span className={styles.monster}>{name.split(" ")[1]}</span>
      </div>
    );
  };
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setIsOpen(true);
      },
      onMouseOut() {
        setIsOpen(false);
      },
    }),
    []
  );
  const renderSpecifications = (recipe) => {
    return (
      <div className={styles.specifications}>
        <div className={styles.spec}>
          <Image
            src="/assets/icons/ic_portion.svg"
            alt="Porción"
            width={17}
            height={17}
          />
          <span className={styles.specTitle}>Tamaño de la porción</span>
          <span className={styles.specText}>
            {recipe.portion + " raciones"}
          </span>
        </div>
        <div className={styles.spec}>
          <Image
            src="/assets/icons/ic_time.svg"
            alt="Tiempo de preparación"
            width={17}
            height={17}
          />
          <span className={styles.specTitle}>Tiempo de preparación</span>
          <span className={styles.specText}>
            {recipe.cookTime + " minutos"}
          </span>
        </div>
        <div className={styles.spec}>
          <Image
            src="/assets/icons/ic_chef.svg"
            alt="Dificultad"
            width={17}
            height={17}
          />
          <span className={styles.specTitle}>Dificultad</span>
          <span className={styles.specText}>{recipe.level}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.recipe} {...eventHandlers}>
      <div className={styles.image}>
        <Image src={recipe.image} alt={recipe.name} width={164} height={168} />
      </div>
      {isOpen === false ? (
        <div className={`${styles.card} ${styles.closed}`}>
          <div className={styles.content}>
            {renderName(recipe.name)}
            <div className={styles.actions}>
              <div className={styles.qualification}>
                <Image
                  src="/assets/icons/ic_star.svg"
                  alt={recipe.qualification}
                  width={23}
                  height={23}
                />
                <span className={styles.qualificationText}>
                  {recipe.qualification}
                </span>
              </div>
              <div className={styles.favorite}>
                <Image
                  src="/assets/icons/ic-favorite.svg"
                  alt="Favorito"
                  width={23}
                  height={23}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.card} ${styles.closed}`}>
          {renderSpecifications(recipe)}
        </div>
      )}
    </div>
  );
};

export default Recipe;
