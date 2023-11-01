export default undefined;

// Another Greeter...

type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
  code: string;
  huch: number;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
  code: string;
};
type TranslateToFrench = {
  translation: "EN_FR";
};

// type Translate = TranslateToEnglish | TranslateToGerman;

// Tagged Union Type
function translate(msg: TranslateToEnglish | TranslateToGerman | TranslateToFrench) {
  switch (msg.translation) {
    case "DE_EN":
      return msg.huch;
    case "EN_DE":
      return msg.englishString;
  }

  handleInvalidMessage(msg); // never;
}

function handleInvalidMessage(invalidMessage: never) {
  throw new Error("...");
}

// @ts-ignore
translate();

// Info (tagged union types werden auch "discriminating unions" genannt):
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
