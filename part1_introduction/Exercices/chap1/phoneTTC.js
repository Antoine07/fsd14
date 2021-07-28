// Utilisez la fonction map pour calculer le prix TTC des téléphones. Utilisez une fonction fléchée.

// On prendra comme tva 20%

const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];

// la tva en constante on bloque comme cela l'assignation la tva ne peux plus changer
const tva = 0.2;
const phonesTTC = phones.map((phone) => {
    // assignation par décomposition des variables
  const { name, priceHT } = phone;
  // calcul de le prix ttc
  const priceTTC = priceHT * (1 + tva);

  // retourne les informations que je souhaites garder
  return {
    name,
    priceHT,
    priceTTC,
  };
});

console.table(phonesTTC);
