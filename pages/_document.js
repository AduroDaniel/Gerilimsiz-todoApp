import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <head>
                    <title>Gerilimsiz App</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}