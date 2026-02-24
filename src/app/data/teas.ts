export interface Tea {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  moods: string[];
  healthGoals: string[];
  imageUrl: string;
  steepTime: string;
  temperature: string;
}

export const TEAS: Tea[] = [
  {
    id: "matcha",
    name: "Ceremonial Matcha",
    description: "Finely ground green tea powder with a rich, umami flavor. Provides sustained energy without the crash.",
    benefits: ["High in antioxidants", "Boosts metabolism", "Enhances focus"],
    moods: ["focused", "tired", "productive"],
    healthGoals: ["energy", "detox", "weight loss"],
    imageUrl: "https://images.unsplash.com/photo-1637590594015-9caa6148d381",
    steepTime: "Whisk for 1 min",
    temperature: "80°C / 175°F"
  },
  {
    id: "chamomile",
    name: "Egyptian Chamomile",
    description: "A calming herbal infusion with sweet floral notes reminiscent of apple.",
    benefits: ["Improves sleep quality", "Reduces anxiety", "Aids digestion"],
    moods: ["anxious", "stressed", "sleepy"],
    healthGoals: ["sleep", "relaxation", "digestion"],
    imageUrl: "https://images.unsplash.com/photo-1749105862005-6e0409c8c55a",
    steepTime: "5-7 mins",
    temperature: "100°C / 212°F"
  },
  {
    id: "peppermint",
    name: "Pure Peppermint",
    description: "Refreshing and cooling menthol flavor that invigorates the senses.",
    benefits: ["Relieves headaches", "Freshens breath", "Settles stomach"],
    moods: ["bloated", "congested", "refreshed"],
    healthGoals: ["digestion", "immunity", "energy"],
    imageUrl: "https://images.unsplash.com/photo-1763907538089-6e2965d51b43",
    steepTime: "4-6 mins",
    temperature: "100°C / 212°F"
  },
  {
    id: "ginger",
    name: "Lemon Ginger",
    description: "Spicy ginger root paired with zesty lemon for a warming, immune-boosting cup.",
    benefits: ["Reduces nausea", "Fights inflammation", "Boosts immunity"],
    moods: ["sick", "cold", "nauseous"],
    healthGoals: ["immunity", "recovery", "digestion"],
    imageUrl: "https://images.unsplash.com/photo-1608158454932-bec5a8364a30",
    steepTime: "5-10 mins",
    temperature: "100°C / 212°F"
  },
  {
    id: "lavender",
    name: "Lavender Grey",
    description: "A soothing twist on Earl Grey with calming lavender blossoms.",
    benefits: ["Reduces stress", "Lowers blood pressure", "Improves skin health"],
    moods: ["overwhelmed", "unwinding", "romantic"],
    healthGoals: ["relaxation", "skin health", "heart health"],
    imageUrl: "https://images.unsplash.com/photo-1635687941366-f68b26aabdaf",
    steepTime: "3-4 mins",
    temperature: "95°C / 203°F"
  }
];
