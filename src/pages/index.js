import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Why for IORP?',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        we have created lot's of modules for server, you can use our doucumenation to learn and create own modules for iorp server.
      </>
    ),
  },
  {
    title: 'Why for SA-MP?',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       Haven't you heard The SA-MP wiki is down. The reason is unknown and we do not have an update if it is coming back or not. But we used the sa-mp archive to improve the sa-mp doumentaion and help you to learn native functions.
      </>
    ),
  },
  {
    title: 'What else?',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       We can use this site to update some tutorials and upcoming server documentation, you can find all the details on iorp.in
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
