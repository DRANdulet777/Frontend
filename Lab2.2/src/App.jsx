import Card from "./Card";
import ProductList from "./ProductList";
import Section from "./Section";

function App() {
  return (
    <>
      <Section title="Products">
        <ProductList />
      </Section>

      <Section title="Info">
        <Card title="About Us">
          <p>This is a demo shop built with React.</p>
        </Card>

        <Card title="Contact" className="highlight">
          <p>Email: support@example.com</p>
        </Card>
      </Section>
    </>
  );
}

export default App;