import { Button } from "@/components";

import styles from "./not-found.module.scss";

const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>Страница не найдена</h1>

      <div className={styles.errorCode}>404</div>

      <Button
        className={styles.btn}
        variant="filled"
        btnContent={"Главная страница"}
        href="/"
      />
    </main>
  );
};

export default NotFoundPage;
