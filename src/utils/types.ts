export interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export interface HomeProps {
  projetos: IProjeto[];
}

export interface ProjetoProps {
  projetos: IProjeto[];
}

export interface ProjetosProps {
  projetos: IProjeto[];
}

export interface IExpereriencia {
  slug: string;
  end_date: string;
  title: string;
  description: string;
}

export interface ExpererienciasProps {
  experiencias: IExpereriencia[];
}
