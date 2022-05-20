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
