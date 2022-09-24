export interface Program {
  title: string;
  id: string;
  specializedSubjects: SpespecializedSubjects[];
}

export interface SpespecializedSubjects {
  id: string;
  string: string;
  __v: number;
  _id: string;
}
