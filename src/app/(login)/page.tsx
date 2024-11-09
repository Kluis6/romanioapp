import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full w-full">
      <div className="text-center font-bold bg-neutral-50 p-4 shadow relative  w-[30vw] space-y-4">
        <h1 className="text-xl text-neutral-900">Romaneio App</h1>
        <section className="flex flex-col gap-2">
          <input className="bg-neutral-100 p-2 " type="email" name="" id="" />
          <input className="bg-neutral-100 p-2" type="password" name="" id="" />
          <Link href={"/inicial"}></Link>
          <button type="button">login</button>
          <button> Esqueceu sua senha?</button>
        </section>
      </div>
    </main>
  );
}
