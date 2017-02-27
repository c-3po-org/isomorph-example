export const wrapHtml = (content, title, locale='en') => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${title}</title>
        </head>
        <body>
        <div id="content">${content}</div>
        <script src='./dist/${ locale }/app.js' type='text/javascript'></script>
        </body>
    </html>`
};