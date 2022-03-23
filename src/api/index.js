import { spreadsheetProjectID } from "consts";

export const addRow = async (data) => {
  const response = await fetch(
    `https://script.google.com/macros/s/${spreadsheetProjectID}/exec`,
    {
      method: "POST",
      body: new URLSearchParams(data),
    }
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => error);

  return response;
};
