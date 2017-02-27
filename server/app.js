import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { HelloPage } from '../common/HelloPage';
import { wrapHtml } from './html';
import { t, useLocale } from 'c-3po';
import { loadLocale } from 'c-3po/dist/loader';

loadLocale('uk', 'i18n/uk.mo');

const app = express();
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(cookieParser());

app.get('/', (req, res) => {
    const locale = req.cookies.locale || 'en';
    useLocale(locale);

    const title = t`Main page`;
    const date = new Date();
    const data = { hour: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() };
    const resp = wrapHtml(HelloPage(data), title, locale);

    res.send(resp);
});

app.get('/locale/:locale', (req, res) => {
   res.cookie('locale', req.params.locale);
   res.redirect('/');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
