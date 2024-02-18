import type {MetaFunction, LinksFunction} from '@remix-run/node';

import styles from '../styles/shared.css';
import TopBarNav from '../components/TopBarNav';
import Footer from '../components/Footer';

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

const experienceStartDate = new Date('2019-02-01T00:00:00');
const currentDate = new Date();
const timeDifference = currentDate.getTime() - experienceStartDate.getTime();
const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25);
const experienceYears = Math.floor(yearsDifference);

export const meta: MetaFunction = () => {
  return [
    {title: 'Laura Griffee'},
    {
      name: 'description',
      content: `Front-end developer and interface designer with ${experienceYears}+ years of experience building design systems for global non-profit and tech companies.`,
    },
  ];
};

export default function Index() {
  return (
    <>
      <TopBarNav />
      <main>
        <section>Content here!</section>
      </main>
      <Footer />
    </>
  );
}
