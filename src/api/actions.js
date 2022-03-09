export const postGoogleSpreadsheets = (data) => ({
  method: "POST",
  endpoint:
    "https://script.google.com/macros/s/AKfycbyfbtUmscZLrXA0hMfBm1QMn51CgNXXd2lEJefXm5N5kCTsQdwna5LX6ZACn2eceInu/exec",
  body: data,
});
