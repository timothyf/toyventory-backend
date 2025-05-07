import { Manufacturer } from '../models'; // adjust path as needed
import { Country } from '../models'; // adjust path as needed


export async function findOrCreateManufacturerByName(name) {
  if (!name) return null;

  const [manufacturer] = await Manufacturer.findOrCreate({
    where: { name: name.trim() },
    defaults: { name: name.trim() }
  });

  return manufacturer.id;
}

export async function findOrCreateCountryByName(name) {
  if (!name) return null;

  const [country] = await Country.findOrCreate({
    where: { name: name.trim() },
    defaults: { name: name.trim() }
  });

  return country.id;
}
