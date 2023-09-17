import { ExampleComponent } from '@example-monorepo/ui-components';

type Props = { title: string };

export const ExamplePage = ({ title }: Props) => {
  return (
    <div id="welcome">
      <h1>
        <span> Hello there, </span>
        Welcome {title} 👋
      </h1>
      <div>
        <ExampleComponent />
      </div>
    </div>
  );
};

export default ExamplePage;
