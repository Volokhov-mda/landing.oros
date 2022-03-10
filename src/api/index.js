import { spreadsheetID } from "consts";

export const addRow = async (data) => {
  const response = await fetch(
    `https://script.google.com/macros/s/${spreadsheetID}/exec`,
    {
      method: "POST",
      body: new URLSearchParams(data),
    }
  );

  return response;
};
