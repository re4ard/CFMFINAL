import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>CFM-FINAL WEBSITE</title>
        <meta name="description" content="My reflection on this year's business class" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Career and Financial Management!</h1>
        <h2 className={styles.title2}>Kinda rushed (not my best work at all)</h2>

        <section className={styles.section}>
          <div className={styles.learnedBox}>
            <h2>What I Learned</h2>
            <p>
            From career and financial management, I learned many things that
will help me in the future. I learned how to invest, what stocks are, I learned
how to make a resume, and I learned how to manage my time and money better.

            </p>
            <p>
            I also learned problem-solving with the six-step decision-making process, which
helps me make decisions faster and better. So, to sum up what I learned, I learned real adult skills 
I could use to be a better adult in the future and be ahead.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.learnedBox}>
            <h2>Favorite Topic</h2>
            <p>
            My favorite project was "Career Research Project" because it made me learn more about the field I want to go into.
It helped me learn about the pros and cons, the starting salary, the experienced salary, and just overall, a very good
understanding of the job and field. It also helps me prepare for that field and teaches me what classes I should take and 
what skills to learn now so I have a better chance at getting the job I want in the future.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.learnedBox}>
            <h2>Real-Life Example</h2>
            <p>
            A real-life example of what I learned from this class being used in the real world is a job interview.  In this class, we 
learned how to properly do a job interview, the do's the don'ts, what to wear and not to wear, and how 
you should speak at a job interview. Another example is a job resume, you're gonna need one if you want a job, and this class teaches 
you how to properly make one.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.learnedBox}>
            <h2>Should It Be Mandatory?</h2>
            <p>
            I think this class should be mandatory for all high school business students to take because this will help them learn more about 
the business world, and it will help them prepare for it. It also teaches skills that everyone needs in real life, like money management, time management
and how to work with a team, which in the business world is very important.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.learnedBox}>
            <h2>Advice for Future Students</h2>
            <p>
            My first piece of advice is to do all your work, and this class wouldn't be a stress.
Make sure you're engaged because this is stuff you're gonna need in a few years. My last
piece of advice is to ask questions and stay organized.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Career and Financial Management Final – Created by Priyanshu Bhowmik</p>
      </footer>
    </>
  );
}
