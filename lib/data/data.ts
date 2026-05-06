
import car from "@/assets/images/car.png"
import car1 from "@/assets/images/usedCars/car1.jpg"
import car2 from "@/assets/images/usedCars/car2.jpg"
import car3 from "@/assets/images/usedCars/car3.jpg"
import car4 from "@/assets/images/usedCars/car4.jpg"
import car5 from "@/assets/images/usedCars/car5.jpg"
import car6 from "@/assets/images/usedCars/car6.jpg"
import car7 from "@/assets/images/usedCars/car7.jpg"
import car8 from "@/assets/images/usedCars/car8.jpg"

export interface LatestCars {
  id : number;
  brand : string;
  model : string,
  buildYear : number,
  images  : string[]
}


    

export const latestCars: LatestCars[] = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model S Plaid",
    buildYear: 2024,
    images: [
      car,
      "https://example.com/tesla-model-s-side.jpg",
      "https://example.com/tesla-model-s-interior.jpg"
    ]
  },
  {
    id: 2,
    brand: "BMW",
    model: "i7 M70",
    buildYear: 2024,
    images: [
      car2,
      "https://example.com/bmw-i7-rear.jpg"
    ]
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "EQS SUV",
    buildYear: 2024,
    images: [
       car1,
      "https://example.com/mercedes-eqs-side.jpg",
      "https://example.com/mercedes-eqs-interior.jpg"
    ]
  },
  {
    id: 4,
    brand: "Porsche",
    model: "Taycan Turbo GT",
    buildYear: 2024,
    images: [
      car4,
      "https://example.com/porsche-taycan-back.jpg"
    ]
  },
  {
    id: 5,
    brand: "Lucid",
    model: "Air Sapphire",
    buildYear: 2024,
    images: [
      car3,
      "https://example.com/lucid-air-side.jpg",
      "https://example.com/lucid-air-rear.jpg"
    ]
  },
  {
    id: 6,
    brand: "Audi",
    model: "Q8 e-tron",
    buildYear: 2024,
    images: [
     car3,
      "https://example.com/audi-q8-interior.jpg"
    ]
  },
  {
    id: 7,
    brand: "Hyundai",
    model: "Ioniq 6 N",
    buildYear: 2024,
    images: [
    car6,
      "https://example.com/hyundai-ioniq6-side.jpg"
    ]
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang Mach-E GT",
    buildYear: 2024,
    images: [
     car7,
      "https://example.com/ford-mache-rear.jpg",
      "https://example.com/ford-mache-interior.jpg"
    ]
  },
  {
    id: 9,
    brand: "Rivian",
    model: "R1S Quad-Motor",
    buildYear: 2024,
    images: [
      car8,
      "https://example.com/rivian-r1s-side.jpg"
    ]
  },
  {
    id: 10,
    brand: "Polestar",
    model: "Polestar 4",
    buildYear: 2024,
    images: [
      car5,
      "https://example.com/polestar-4-rear.jpg",
      "https://example.com/polestar-4-interior.jpg"
    ]
  }
];