import Head from "next/head";
import TodoApp from "./app";

const Index = () => (
    <div>
        <Head>
            <title>Gerilimsiz Todo Application</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="/static/App.css" rel="stylesheet" />
        </Head>
        <layout>
            <TodoApp />
        </layout>
    </div>
);

export default Index;