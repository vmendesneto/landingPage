import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>John Doe</h1>
        <p className={styles.tagline}>Full Stack Developer</p>
      </section>
      <section className={styles.portfolio}>
        <h2>Projects</h2>
        <ul>
          <li>Portfolio Website - A responsive personal site built with React.</li>
          <li>E-commerce Platform - Online store powered by Node and MongoDB.</li>
          <li>Blog Engine - A markdown-based blogging tool.</li>
        </ul>
      </section>
      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:johndoe@example.com">johndoe@example.com</a></p>
      </section>
    </div>
  );
};

export default Home;
