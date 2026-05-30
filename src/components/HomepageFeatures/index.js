import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Land',
    Svg: require('@site/static/img/land.svg').default,
    description: (
      <>
        We use ecological principles to design regenerative landscapes that support
        biodiversity, improve soil health, and enhance ecosystem services. From individual
        properties to large landscapes, we turn landscapes into thriving parts of the greater ecosystem.
      </>
    ),
  },
  {
    title: 'Water',
    Svg: require('@site/static/img/water.svg').default,
    description: (
      <>
        We perform thorough watershed assessments to understand the unique dynamics of each system and
        inform management and restoration strategies that work *with* the natural processes.
      </>
    ),
  },
  {
    title: 'Built',
    Svg: require('@site/static/img/home_and_garden.svg').default,
    description: (
      <>
        We integrate built and native landscapes through science-based design, from individual properties to 
        entire watersheds. Our services include ecological design, watershed assessments, and restoration 
        planning to create resilient and thriving environments that benefit both people and nature.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
