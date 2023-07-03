function removeIntlCode(phoneNumber) {
  // Remove any non-numeric characters from the input string
  phoneNumber = phoneNumber.replace(/[^\d]/g, "");

  // Check if the first one to four digits match any of the E.164 country code formats
  const countryCodes = [
    { code: "1", shortCode: "US" },
    { code: "1", shortCode: "CA" },
    { code: "52", shortCode: "MX" },
    { code: "54", shortCode: "AR" },
    { code: "55", shortCode: "BR" },
    { code: "56", shortCode: "CL" },
    { code: "57", shortCode: "CO" },
    { code: "58", shortCode: "VE" },
    { code: "60", shortCode: "MY" },
    { code: "61", shortCode: "AU" },
    { code: "62", shortCode: "ID" },
    { code: "63", shortCode: "PH" },
    { code: "64", shortCode: "NZ" },
    { code: "65", shortCode: "SG" },
    { code: "66", shortCode: "TH" },
    { code: "81", shortCode: "JP" },
    { code: "82", shortCode: "KR" },
    { code: "86", shortCode: "CN" },
    { code: "90", shortCode: "TR" },
    { code: "91", shortCode: "IN" },
    { code: "234", shortCode: "NG" },
    { code: "254", shortCode: "KE" },
    { code: "256", shortCode: "UG" },
    { code: "260", shortCode: "ZM" },
    { code: "263", shortCode: "ZW" },
  ];

  let code = "1";
  let shortCode = "52";

  // Iterate through the list of country codes and check if the input string starts with any of them
  for (let i = 0; i < countryCodes.length; i++) {
    if (phoneNumber.startsWith(countryCodes[i].code)) {
      code = "+" + countryCodes[i].code;
      shortCode = countryCodes[i].shortCode;
      phoneNumber = phoneNumber.slice(countryCodes[i].code.length);

      // If the input string starts with a recognized country code, remove it and return the remaining phone number
      return {
        internationalCode: code,
        countryShortCode: shortCode,
        phoneNumber: phoneNumber,
      };
    }
  }

  // If the input string doesn't start with a recognized country code, return it as-is
  return {
    internationalCode: "",
    countryShortCode: "",
    phoneNumber: phoneNumber,
  };
}

function formatPhoneNumber(phoneNumberString) {
  let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    let intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

function sanitizeInput(input) {
  const dangerousChars = /[\';\"]/g; // Characters to be removed: ', ;, "
  const sanitizedInput = input.replace(dangerousChars, "");
  return sanitizedInput;
}

export { removeIntlCode, formatPhoneNumber, sanitizeInput };
