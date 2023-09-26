import { FromLangauge, Language, RequestBody } from "../types";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../const";
type RequesBody = {
fromLanguage : FromLangauge,
toLanguage : Language,
inputText : string
}

const URL = import.meta.env.VITE_TRANSLATE_SERVICE_URL || ''

export const getTranslatedText = async ({fromLanguage,toLanguage,inputText}:RequesBody,signal: AbortSignal) => {

try {
  const body =JSON.stringify({fromLanguage,toLanguage,inputText})
     
  // const resp = await fetch(URL,{
  //   signal,
  //   method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body
  // })
// const data = await resp.json()

  return "Texto traducido del backend"

} catch (error) {
    console.log("Error");
    console.log(error);
}
}
;

