import AstroDice from "./components/Astrodice";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly px-24 pt-8 pb-24">
      <AstroDice />
    </main>
  );
}
