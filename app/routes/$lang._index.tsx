import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";
import Logo from "../assets/images/logo.jpeg";

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
    <div className="mb-5">
      <NavBar />
      <div className="text-xl font-bold flex flex-col items-center gap-5">
        <h1>FUNDACIÓN HUELLAS DE LA CALLE - SANTA MARTA</h1>
        <p>We help abandoned animals</p>
        <img src={Logo} width="400" height="auto" alt="logo"/>
      </div>
    </div>
  );
}
