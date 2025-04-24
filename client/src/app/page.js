import styles from "@/app/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>🚀 Welcome to the Next Full-Stack Template</h1>

        <details>
          <summary><strong>🧩 About the Client</strong></summary>
          <p>
            This template was created using <code>npx create-next-app@latest</code>.
            Please note that the Next.js version might be outdated depending on when you’re using this.
          </p>
        </details>

        <details>
          <summary><strong>🛠️ About the Backend</strong></summary>
          <p>This full-stack template includes:</p>
          <ul>
            <li><a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
            <li><a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">Express</a></li>
            <li><a href="https://www.npmjs.com/package/cors" target="_blank" rel="noopener noreferrer">CORS</a></li>
            <li><a href="https://www.npmjs.com/package/better-sqlite3" target="_blank" rel="noopener noreferrer">better-sqlite3</a></li>
          </ul>
          <p>Please check for the latest versions before building your app on top of this template.</p>
        </details>
      </main>
    </div>
  );
}
