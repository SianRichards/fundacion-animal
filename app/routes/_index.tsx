import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";

export const meta: MetaFunction = () => {
  return [
    { title: "Fundacion Huellas De La Calle - Santa Marta" },
    {
      name: "description",
      content: "Fundacion Huellas De La Calle - Santa Marta",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <NavBar />
      <div className="text-3xl font-bold underline">
        <h1>FUNDACIÓN HUELLAS DE LA CALLE - SANTA MARTA</h1>
      </div>
    </div>
  );
}
