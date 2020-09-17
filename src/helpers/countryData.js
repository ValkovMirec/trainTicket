import countries from "../data/country.json";

export default function countryData() {
  const countrySelector = countries[0].staList.sta.sort(function (a, b) {
    let textA = a.sn.toUpperCase();
    let textB = b.sn.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return countrySelector;
}
