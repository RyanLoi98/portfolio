import { SectionWrapper } from "../hoc";

const Credit = () => {
  return (
    <div
      style={{ color: "#2e2d2d" }}
      className="text-[12px] flex flex-col justify-center items-center text-center flex-wrap"
    >
      <p className="whitespace-nowrap">
        This work is based on{" "}
        <a
          href="https://sketchfab.com/3d-models/earth-cartoon-8980e2238c534516bc2345703cd8eae4"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Earth cartoon"
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/onirix"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          onirix
        </a>{" "}
        licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC-BY-4.0
        </a>
      </p>

      <p className="whitespace-nowrap">
        This work is based on{" "}
        <a
          href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Gaming Desktop PC"
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/Yolala1232"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yolala1232
        </a>{" "}
        licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC-BY-4.0
        </a>
        , and has been modified.
      </p>

      <p className="whitespace-nowrap">
        All trademarks, logos, and images used on this site are the property of their respective owners. No copyright infringement is intended.
      </p>
    </div>
  );
};

export default Credit;