export enum PRODUCTION_STATUS {
  POST_PRODUCTION = "Post-Production",
  PRE_PRODUCTION = "Pre-Production",
  SCREENPLAY_FINISHED = "Screenplay finished",
  FILMING = "Filming",
  COMPLETED = "Completed",
  RELEASED = "Released",
  PITCH = "Pitch"
}
export interface Movie {
  title: string;
  productionStatus: PRODUCTION_STATUS;
  genre: string;
  director?: string;
  screenwriters?: string[];
  logline?: string;
  id: number;
  image?: string;
  tags: string[];
}