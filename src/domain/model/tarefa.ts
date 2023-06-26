export interface Tarefa {
  id: string;
  name: string;
  done: boolean;
  createdAt: Date;
  untilDate:  Date;
}

export const makeSearchByName = (search: string) => ({ name }: Tarefa) => {
  if (search === "") {
    return true;
  }

  return name.toLowerCase().includes(search.toLowerCase());
};

