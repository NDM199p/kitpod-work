interface Page {
  title: string;
}

function HomaPage(props: Page) {
  return <div>{props.title}</div>;
}

export default HomaPage;
