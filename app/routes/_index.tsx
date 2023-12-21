import type { MetaFunction } from "@remix-run/node";

const experienceStartDate = new Date('2019-02-01T00:00:00');
const currentDate = new Date();
const timeDifference = currentDate.getTime() - experienceStartDate.getTime();
const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25);
const experienceYears = Math.floor(yearsDifference);

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Griffee" },
    { name: "description", content: `Front-end developer and interface designer with ${experienceYears}+ years of experience building design systems for global non-profit and tech companies.` },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
