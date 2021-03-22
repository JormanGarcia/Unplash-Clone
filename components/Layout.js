import Header from "./header";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <div className="body">{children}</div>
    </>
  );
}
