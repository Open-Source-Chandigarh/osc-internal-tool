
/**
 * Map the prisma schema with the corresponding
 * type definitions for controller management
 */
export type Role = "USER" | "LEAD" | "ADMIN" | "SUBHEAD";
export type EventCategory = "WORKSHOP" | "HACKATHON";
export interface Team {
  name: string;
  description: string;
}
export interface User {
  name?: string;
  rollnumber?: string;
  email: string;
  password?: string;
  role: Role;
}
export interface TeamMember {
  userId: string;
  teamId: string;
}
export interface Event {
  name: string;
  tagline: string;
  eventStartDate: Date;
  eventEndDate: Date;
  eventCategory: EventCategory;
  eventPoster: string;
  createdBy: string;
}
