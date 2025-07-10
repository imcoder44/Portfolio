// Portfolio site storage - currently only handles contact form submissions
// No user management needed for this portfolio site

export interface IStorage {
  // Contact form submissions could be stored here if needed
  // For now, we just log them to console
}

export class MemStorage implements IStorage {
  constructor() {
    // Empty constructor for now
  }
}

export const storage = new MemStorage();
