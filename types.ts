
export interface Activity {
  time: string;
  title: string;
  description?: string;
  details?: string[];
  speaker?: string;
  location?: string;
}

export interface ProgramDay {
  id: string;
  date: string;
  activities: Activity[];
  theme?: string;
}

export interface Objective {
  id: number;
  text: string;
}
