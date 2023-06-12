# me-display

## Описание
<br/>

Данный компонент предназначен для перевода текста с формулами LaTeX в html.

## Установка
<br/>

```sh
npm install me-display
```
В файле main.js
```javascript
import MEDisplay from 'me-display';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
```
...
```javascript
Vue.use(MEDisplay);
Vue.use(VueKatex);
```


## Входные параметры
<br/>

<table>
<thead>
    <tr><th>Параметр</th><th>Описание</th></tr>
</thead>
<tbody>
    <tr><td>text</td><td>передаваемый текст c формулами</td></tr>
    <tr><td>startSymbol</td><td>стартовый символ, в котором заключена формула (по умолчанию '$$')</td></tr>
    <tr><td>endSymbol</td><td>конечный символ, в котором заключена формула (по умолчанию '$$')</td></tr>
</tbody>
</table>

## Пример использования
<br/>

```Vue
<MEDisplay text="Моя любимая формула $$x^2$$" />
<MEDisplay text="Мои любимые формулы <x^2$, <\lim\limits_{x \to 0} f(x)$"
           start-symbol="<" end-symbol="$" />
```

