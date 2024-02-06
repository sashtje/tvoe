import styles from "./loading.module.scss";

const dots = new Array(15).fill(0);

const Loading = () => {
  return (
    <main className={styles.loading}>
      <div className={styles.dots}>
        {dots.map((_, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${24 * (index + 1)}deg) translateY(35px)`,
              animationDelay: `${(index + 1) * 0.05}s`,
            }}
          ></span>
        ))}
      </div>
    </main>
  );
};

export default Loading;
