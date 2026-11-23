export const whatsappNumber = "919600069633";
export const whatsappDisplayNumber = "9600069633";
export const email = "dwarakvaradharajan@gmail.com";

// Google Maps place for Dwarak Foundations Chennai LLP, on 2nd Cross Street beside Grand Mall.
export const officeLatitude = 12.9708211;
export const officeLongitude = 80.220321;
export const officeMapEmbed =
  "https://maps.google.com/maps?cid=2926664627492564055&z=17&hl=en&output=embed";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
