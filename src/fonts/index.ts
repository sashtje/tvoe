import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const archivo = Archivo({
  subsets: ["latin"],
  style: "italic",
  weight: ["900"],
});

export const ttNormsPro = localFont({
  src: [
    {
      path: "./TTNormsPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TTNormsPro-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./TTNormsPro-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});
