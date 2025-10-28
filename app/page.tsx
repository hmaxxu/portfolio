import TwoColumnLayout from '../components/TwoColumnLayout';

export default function Home() {
  return (
    <TwoColumnLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p>
        This content is the children prop that gets rendered in the 
        right-hand two-thirds column by the TwoColumnLayout.
        The layout component handles the structure, keeping the page component clean.

        Yeah I have no idea what is going on right now
      </p>

    </TwoColumnLayout>
  );
}
