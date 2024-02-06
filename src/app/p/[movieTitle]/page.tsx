import type { Metadata } from "next";

import { MovieScreen } from "@/screens/Movie";

export const metadata: Metadata = {
  title: "Уэнздей (2022) смотреть онлайн в хорошем качестве",
  description:
    "Уэнздей (2022) сериал, ужасы, США. Уэнсдей предстоит освоить экстрасенсорные способности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
};

export default function MoviePage() {
  return <MovieScreen />;
}
