interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <div className={"container"}>{children}</div>;
}
